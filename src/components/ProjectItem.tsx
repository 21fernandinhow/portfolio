interface ProjectData {
  img: string,
  url: string,
  description: string,
}

export default function ProjectItem (project: ProjectData) {
    
    return (
      <div className="carousel-item">
        <a href={project.url} target="_blank" rel="noopener noreferrer"> 
          <img  src={project.img} width={1080} height={566} alt={'project'}
          />
        </a>
        <p>{project.description}</p>
      </div>
    )
}