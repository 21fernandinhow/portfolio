import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHouse, faAddressCard, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "../translations/Translate";

export default function Footer() {

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
              <span className="tooltip">{useTranslation('about.title')}</span>
            </Link>
          </li>

          <li>
            <Link to={'/projects'} aria-label="Projects">
              <FontAwesomeIcon icon={faCode} /> 
              <span className="tooltip">{useTranslation('projects.title')}</span>
            </Link>
          </li>

          <li>
            <Link to={'/contact'} aria-label="Contact">
              <FontAwesomeIcon icon={faEnvelope} /> 
              <span className="tooltip">{useTranslation('contact.title')}</span>
            </Link>
          </li>

      </ul>
    </footer>
  )
}