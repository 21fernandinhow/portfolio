import { useTranslation } from "../translations/Translate"

export default function About() {

  return (

    <main className="page-container" id="about">
      <div className="overflow">

        <h2>{useTranslation('about.title')}</h2>
        <p> {useTranslation('about.text')}</p>

        <h4>{useTranslation('about.skills')}</h4>
        <div className="skills">
          <p>NextJs</p> <p>ReactJs</p> <p>Typescript / Javascript</p> <p>NodeJs</p> <p>Express</p>
          <p>MongoDB</p> <p>CSS / SCSS / Sass</p> <p>Bulma / Bootstrap</p> 
          <p>HTML</p>
        </div>
        
      </div>    
    </main>
  )
}