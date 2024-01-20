import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ProjectItem from "./ProjectItem"

export default function ProjectsCarrousel() {

  const [projectIndex, setProjectIndex] = useState(0)
  const projects = [
    {
      description: `A Typescript Fullstack financial blog that automatically generates content every monday using A.I with cron jobs`,
      img: "/bolsocheioai.webp",
      url: "https://bolsocheio.ai"
    },
    {
      description: `A video content platform made for Codi Academy using ReactJs`,
      img: "/codiverso.webp",
      url: "https://codiacademy.com/codiverso/"
    },
    {
      description: `A Crypto Converter made with ReactJs`,
      img: "/crypto.webp",
      url: "https://welcometocryptoconverter.netlify.app/"
    },
    {
      description: "How many days are left to the next FIFA World Cup",
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