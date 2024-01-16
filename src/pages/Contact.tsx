export default function Contact() {

    return (
      <main className="page-container" id="contact">
  
        <div className="overflow">
          
          <h2>Contact</h2>
          <p>Send me a message on the form bellow</p>
          <form action="https://formsubmit.co/21fernandinhow@gmail.com" method="POST">
                <input type="text" name="name" id="name" placeholder="Name: " required/>
                <input type="email" name="email" id="email" placeholder="E-mail: " required/>
                <textarea id="message" name="message" rows={3} placeholder="Message" required/>
                <button type="submit">Get in Touch</button>
          </form>
  
        </div>
  
      </main>
    )
}