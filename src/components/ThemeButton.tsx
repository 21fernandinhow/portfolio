import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faRepeat } from "@fortawesome/free-solid-svg-icons";

export default function ThemeButton() {

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

    const handleTheme = () => {
        localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark')
        setTheme(localStorage.getItem('theme'))
        applyTheme()
    }

    const applyTheme = () => {
        document.body.style.setProperty("--bg-color", localStorage.getItem('theme') === 'dark' ? "#1A1A2E" : "#CDF5FD");
        document.body.style.setProperty("--primary-color", localStorage.getItem('theme') === 'dark' ? "#1D2D50" : "#A0E9FF");
        document.body.style.setProperty("--secondary-color", localStorage.getItem('theme') === 'dark' ? "#27496D" : "#00A9FF");
        document.body.style.setProperty("--contrast-color", localStorage.getItem('theme') === 'dark' ? "#CDF5FD" : "#1A1A2E");
    }

    useEffect(()=>{
        applyTheme()
    },[])

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