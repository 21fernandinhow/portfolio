import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"

export default function About() {

  const { language } = useContext(LanguageContext)
  const isEnglish = language === "en"

  return (

    <main className="page-container" id="about">
      <div className="overflow">

        <h2>{isEnglish ? "About" : "Sobre"}</h2>
        <p>
          {isEnglish ? 
          `I'm a brazillian FullStack Developer with a long entrepreunership story. As a freelancer, I've done webapplications and websites 
          for a lot of clients, and even started some business. Today, I work for a amazing startup called Nvoip, where I'm allways learning 
          a lot and improving my skills!` 
          : 
          `Eu sou um Desenvolvedor Fullstack brasileiro com uma longa história de empreendedorismo. Como freelancer, já criei websites e 
          webaplicações para diversos clientes, e até iniciei alguns empreendimentos. Hoje em dia, eu trabalho para uma startup incrível
          chamada Nvoip, onde estou sempre aprendendo e aperfeiçoando minhas habilidades` }
        </p>

        <h4>{isEnglish ? "Skills" : "Habilidades"}</h4>
        <div className="skills">
          <p>NextJs</p> <p>ReactJs</p> <p>Typescript / Javascript</p> <p>NodeJs</p> <p>Express</p>
          <p>MongoDB</p> <p>CSS / SCSS / Sass</p> <p>Bulma / Bootstrap</p> 
          <p>HTML</p>
        </div>
        
      </div>    
    </main>
  )
}