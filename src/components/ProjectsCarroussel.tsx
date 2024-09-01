import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ProjectItem from "./ProjectItem"
import { useTranslation } from "../translations/Translate";

export default function ProjectsCarrousel() {

  const [projectIndex, setProjectIndex] = useState(0)
  const projects = [
    {
      description: useTranslation('projects.project1'),
      img: "/bolsocheio.webp",
      url: "https://bolsocheio.ai"
    },
    // {
    //   description: useTranslation('projects.project2'),
    //   img: "/timemessages.webp",
    //   url: "https://timemessages.vercel.app/"
    // },
    {
      description: useTranslation('projects.project3'),
      img: "/nossaong.webp",
      url: "https://nossaong.com.br/"
    },
    {
      description: useTranslation('projects.project4'),
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