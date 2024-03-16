import { useTranslation } from "../translations/Translate"
import ProjectsCarrousel from "../components/ProjectsCarroussel"

export default function Projects() {
  
  return (
    <main className="page-container" id="projects">

      <div className="overflow">
        <h2>{useTranslation('projects.title')}</h2>
        <p>{useTranslation('projects.description')}</p>
        <ProjectsCarrousel/>
      </div>
      
    </main>
  )
}
