import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"
import ProjectsCarrousel from "../components/ProjectsCarroussel"

export default function Projects() {

  const { language } = useContext(LanguageContext)
  const isEnglish = language === "en"
  
  return (
    <main className="page-container" id="projects">

      <div className="overflow">
        <h2>{isEnglish ? "Projects" : "Projetos"}</h2>
        <p>
          {isEnglish ? "Some of my favourite projects. Click on image to visit" : "Alguns de meus projetos favoritos. Clique na imagem para visitar."}
        </p>
        <ProjectsCarrousel/>
      </div>
      
    </main>
  )
}
