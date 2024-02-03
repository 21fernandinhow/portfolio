import { useState, useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ProjectItem from "./ProjectItem"

export default function ProjectsCarrousel() {

  const { language } = useContext(LanguageContext)
  const [projectIndex, setProjectIndex] = useState(0)
  const isEnglish = language === "en"
  const projects = [
    {
      description: isEnglish ? 
      "A Typescript Fullstack financial blog that automatically generates content every tuersday using A.I with cron jobs" 
      : "Um blog de finanças fullstack em typescript que gera conteúdo automaticamente todas as terças-feiras com IA e cron jobs",
      img: "/bolsocheioai.webp",
      url: "https://bolsocheio.ai"
    },
    {
      description: isEnglish ? 
      "A video content platform made for Codi Academy using Youtube API and ReactJs"
      : "A plataforma de video oficial da Codi Academy usando a API do Youtube e ReactJS",
      img: "/codiverso.webp",
      url: "https://codiacademy.com/codiverso/"
    },
    {
      description: isEnglish ? 
      "A cripto converter made with Mercado Pago API and ReactJs"
      : "Um conversor de criptomoedas feito com a API do Mercado Pago e ReactJs",
      img: "/crypto.webp",
      url: "https://welcometocryptoconverter.netlify.app/"
    },
    {
      description: isEnglish ? 
      "How Many Days Left to World Cup"
      : "Contador de quanto falta para a copa",
      img: "/worldcup.webp",
      url: "https://quantofaltapracopa.netlify.app/"
    }
  ]

  const nextProject = () => {
    if(projectIndex < projects.length-1 ){
      setProjectIndex(projectIndex+1);
    } else {
      setProjectIndex(0);
    }
  }

  const previousProject = () => {
    if(projectIndex !== 0 ){
      setProjectIndex(projectIndex-1);
    } else if (projectIndex === 0){
      setProjectIndex(projects.length-1);
    }
  }
    
  return (
    <div className="carousel">
      <button onClick={previousProject} aria-label="Previous project"><FontAwesomeIcon icon={faChevronLeft}/></button>
      <ProjectItem 
        url={projects[projectIndex].url}
        img={projects[projectIndex].img}
        description={projects[projectIndex].description}
      />
      <button onClick={nextProject} aria-label="Next project"><FontAwesomeIcon icon={faChevronRight} /></button>
    </div>
  )

}