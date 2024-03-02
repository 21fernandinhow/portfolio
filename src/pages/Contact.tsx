import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"

export default function Contact() {

  const { language } = useContext(LanguageContext)
  const isEnglish = language === "en"

  return (
    <main className="page-container" id="contact">
      <div className="overflow">
        
        <h2>{isEnglish ? "Contact" : "Contato"}</h2>
        <p>{isEnglish ? "Send me a message on the form bellow" : "Me envie uma mensagem através do formulário abaixo:"}</p>
        <form action="https://formsubmit.co/contato@fernandocarvalhodev.com" method="POST">
              <input type="text" name="name" id="name" placeholder={isEnglish ? "Name: " : "Nome: "} required/>
              <input type="email" name="email" id="email" placeholder="E-mail: " required/>
              <textarea id="message" name="message" rows={3} placeholder={isEnglish ? "Message" : "Mensagem"}  required/>
              <button type="submit">{isEnglish ? "Send" : "Enviar"}</button>
        </form>

      </div>
    </main>
  )
}