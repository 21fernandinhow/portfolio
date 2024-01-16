import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import ThemeButton from "./ThemeButton";

export default function Header() {
    return (
      <header>

        <h1>Fernando Carvalho</h1>
        <h2>FullStack Developer</h2>

        <div className="icons">
          <a href="https://github.com/21fernandinhow" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub}/>
          </a>
          <a href="https://www.linkedin.com/in/fernando-carvalho-6005b024b/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
          <ThemeButton/>
        </div>

      </header>
    )
}