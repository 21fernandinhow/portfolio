import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHouse, faAddressCard, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
    
    return (
      <footer>
        <ul>
            <li><Link to={'/'}><FontAwesomeIcon icon={faHouse} /> <span className="tooltip">Home</span></Link></li>
            <li><Link to={'/about'}><FontAwesomeIcon icon={faAddressCard} /> <span className="tooltip">About</span></Link></li>
            <li><Link to={'/projects'}><FontAwesomeIcon icon={faCode}/> <span className="tooltip">Projects</span></Link></li>
            <li><Link to={'/contact'}><FontAwesomeIcon icon={faEnvelope} /> <span className="tooltip">Contact</span></Link></li>
        </ul>
      </footer>
    )
}