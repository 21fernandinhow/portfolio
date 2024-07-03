import WaitingAnimation from "../components/WaitingMessage";
import { useTranslation } from "../translations/Translate"
import { useState } from "react"

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
    const [isWaitingMessage, setIsWaitingMessage] = useState(false)

    const sendMessageToAI = async () => {

        setIsWaitingMessage(true)

        try {
            
            const userMessage = userInputText
            setUserInputText("")

            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: model,
                    messages: [...messages, { role: "user", content: userMessage }], // messages
                    max_tokens: 300,
                    temperature: 0.5
                }),
            });
    
            const data = await response.json(); 
            setMessages([
                ...messages, 
                { role: "user", content: userMessage }, 
                { role: 'assistant', content: data.choices[0].message.content }
            ]);

        } catch (error) {
            console.error('Erro ao enviar a mensagem:', error);
        }

        setIsWaitingMessage(false)
    }

    return (
        <main className="page-container" id="charlie">
            <div className="header">
                <h2 className="gradient-text">{useTranslation("charlie.title")}</h2>
                <p>{useTranslation("charlie.description")}</p>
            </div>

            <div className="overflow chat">
                {messages.filter((item)=>{return item.role === "user" || item.role === "assistant"}).map((item, index)=>{
                    return <p key={index} className={`chat-message-${item.role}`}>{item.content}</p>
                })}
            </div>

            <div className="user-input">
                <textarea 
                    onChange={(e)=>{setUserInputText(e.target.value)}} 
                    placeholder={useTranslation("charlie.placeholder")} 
                    value={userInputText}
                />
                <button onClick={sendMessageToAI} disabled={isWaitingMessage}>
                    {isWaitingMessage ? <WaitingAnimation/> : useTranslation("contact.send")}
                </button>
            </div>
        </main>
    )
}