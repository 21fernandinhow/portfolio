import ProjectsCarrousel from "../components/ProjectsCarroussel"

export default function Projects() {
  
  return (
    <main className="page-container" id="projects">

      <div className="overflow">
        <h2>Projects</h2>
        <p>Some of my favourite projects. Click the image to visit!</p>
        <ProjectsCarrousel/>
      </div>
      
    </main>
  )
}
