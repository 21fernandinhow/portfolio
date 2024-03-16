import { useTranslation } from "../translations/Translate"

export default function Contact() {

  return (
    <main className="page-container" id="contact">
      <div className="overflow">
        
        <h2>{useTranslation('contact.title')}</h2>
        <p>{useTranslation('contact.description')}</p>
        <form action="https://formsubmit.co/contato@fernandocarvalhodev.com" method="POST">
              <input type="text" name="name" id="name" placeholder={useTranslation('contact.name')} required/>
              <input type="email" name="email" id="email" placeholder="E-mail: " required/>
              <textarea id="message" name="message" rows={3} placeholder={useTranslation('contact.message')}  required/>
              <button type="submit">{useTranslation('contact.send')}</button>
        </form>

      </div>
    </main>
  )
}