import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHouse, faAddressCard, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    
    return (
      <footer>
        <ul>
            <li><a href={'/'}><FontAwesomeIcon icon={faHouse} /> <span className="tooltip">Home</span></a></li>
            <li><a href={'/about'}><FontAwesomeIcon icon={faAddressCard} /> <span className="tooltip">About</span></a></li>
            <li><a href={'/projects'}><FontAwesomeIcon icon={faCode}/> <span className="tooltip">Projects</span></a></li>
            <li><a href={'/contact'}><FontAwesomeIcon icon={faEnvelope} /> <span className="tooltip">Contact</span></a></li>
        </ul>
      </footer>
    )
}