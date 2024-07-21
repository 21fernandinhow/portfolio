import WaitingAnimation from "../components/WaitingMessage";
import { useTranslation } from "../translations/Translate"
import { useEffect, useRef, useState } from "react"

interface Message {
    role: string,
    content: string
}

export default function Charlie() {

    const systemMessage = [
        useTranslation("charlie.systemMessage"),
        useTranslation("charlie.infoBackground"),
        useTranslation("charlie.infoAbout"),
        useTranslation("charlie.infoPersonal"),
        useTranslation("charlie.infoDoors"),
        useTranslation("charlie.infoProjects"),
        useTranslation("charlie.infoPortfolio"),
        useTranslation("charlie.infoDate") + new Date
    ].join()
    const apiKey = import.meta.env.VITE_OPENAI_APIKEY;
    const model = "gpt-3.5-turbo"
    const [messages, setMessages] = useState<Message[]>([{role: "system", content: systemMessage}])
    const [userInputText, setUserInputText] = useState("")
    const [isWaitingAnswer, setIsWaitingAnswer] = useState(false)
    const messagesContainerRef = useRef<HTMLDivElement | null>(null);

    const sendMessageToAI = async () => {

        setIsWaitingAnswer(true)
        const newArrayMessages = [...messages, {role: "user", content: userInputText}]
        setMessages(newArrayMessages)

        try {
            
            setUserInputText("")

            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: model,
                    messages: newArrayMessages, // messages
                    max_tokens: 300,
                    temperature: 0.5
                }),
            });
    
            const data = await response.json(); 
            setMessages([
                ...newArrayMessages, 
                { role: 'assistant', content: data.choices[0].message.content }
            ]);

        } catch (error) {
            console.error('Erro ao enviar a mensagem:', error);
        }

        setIsWaitingAnswer(false)
    }

    const scrollToBottom = () => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTo({
                top: messagesContainerRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    };
    
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <main className="page-container" id="charlie">
            <div className="header">
                <h2 className="gradient-text">{useTranslation("charlie.title")}</h2>
                <p>{useTranslation("charlie.description")}</p>
            </div>

            <div className="overflow chat" ref={messagesContainerRef}>
                {messages.filter((item)=>{return item.role === "user" || item.role === "assistant"}).map((item, index)=>{
                    return <p key={index} className={`chat-message-${item.role}`}>{item.content}</p>
                })}
            </div>

            <div className="user-input">
                <textarea 
                    onChange={(e) => setUserInputText(e.target.value)} 
                    onKeyDown={(e) => { 
                        if (e.key === 'Enter' && !e.shiftKey && !isWaitingAnswer) {
                            e.preventDefault();
                            sendMessageToAI() 
                        }
                    }}
                    placeholder={useTranslation("charlie.placeholder")} 
                    value={userInputText}
                />
                <button onClick={sendMessageToAI} disabled={isWaitingAnswer}>
                    {isWaitingAnswer ? <WaitingAnimation/> : useTranslation("contact.send")}
                </button>
            </div>
        </main>
    )
}