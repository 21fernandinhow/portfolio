import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faRepeat } from "@fortawesome/free-solid-svg-icons";

export default function ThemeButton() {

    const [theme, setTheme] = useState('light')

    const handleTheme = () => {

        if(theme==='light'){
            document.body.style.setProperty("--bg-color", "#1A1A2E");
            document.body.style.setProperty("--primary-color", "#1D2D50");
            document.body.style.setProperty("--secondary-color", "#27496D");
            document.body.style.setProperty("--contrast-color", "#CDF5FD");
            setTheme('dark')
        } else {
            document.body.style.setProperty("--bg-color", "#CDF5FD");
            document.body.style.setProperty("--primary-color", "#A0E9FF");
            document.body.style.setProperty("--secondary-color", "#00A9FF");
            document.body.style.setProperty("--contrast-color", "#1A1A2E");
            setTheme('light')
        }
    }

    return(
        <button onClick={handleTheme} className="theme-btn">
            {
                theme === 'dark' ? 
                <><FontAwesomeIcon icon={faMoon}/>   <FontAwesomeIcon icon={faRepeat}/>   <FontAwesomeIcon icon={faSun}/></> 
                : 
                <><FontAwesomeIcon icon={faSun}/>   <FontAwesomeIcon icon={faRepeat}/>   <FontAwesomeIcon icon={faMoon}/></> 
            } 
        </button>
    )
}