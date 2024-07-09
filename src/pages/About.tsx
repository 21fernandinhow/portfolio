import { useTranslation } from "../translations/Translate"

export default function About() {

  return (

    <main className="page-container" id="about">
      <div className="overflow">

        <h2 className="gradient-text">{useTranslation('about.title')}</h2>
        <p> {useTranslation('about.text')}</p>

        <h4>{useTranslation('about.skills')}</h4>
        <div className="skills">
          <p>NextJs</p> <p>ReactJs</p> <p>Typescript</p> <p>Javascript</p> <p>NodeJs</p> <p>Express</p> <p>Ruby</p> <p>Ruby on Rails</p>
          <p>MongoDB</p> <p>PostgreSQL</p> <p>SCSS / Sass</p> <p>Bulma</p> <p>MUI Components</p> <p> TailwindCSS</p> <p> Daisy UI</p> 
        </div>
        
      </div>    
    </main>
  )
}