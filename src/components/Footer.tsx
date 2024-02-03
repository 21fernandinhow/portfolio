import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHouse, faAddressCard, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Footer() {
  
  const { language } = useContext(LanguageContext)
  const isEnglish = language === "en"

  return (
    <footer>
      <ul>

          <li>
            <Link to={'/'} aria-label="Home">
              <FontAwesomeIcon icon={faHouse} /> 
              <span className="tooltip">Home</span>
            </Link>
          </li>

          <li>
            <Link to={'/about'} aria-label="About">
              <FontAwesomeIcon icon={faAddressCard} /> 
              <span className="tooltip">{isEnglish ? "About" : "Sobre"}</span>
            </Link>
          </li>

          <li>
            <Link to={'/projects'} aria-label="Projects">
              <FontAwesomeIcon icon={faCode}/> <span className="tooltip">{isEnglish ? "Projects" : "Projetos"}</span>
            </Link>
          </li>

          <li>
            <Link to={'/contact'} aria-label="Contact">
              <FontAwesomeIcon icon={faEnvelope} /> 
              <span className="tooltip">{isEnglish ? "Contact" : "Contato"}</span>
            </Link>
          </li>

      </ul>
    </footer>
  )
}