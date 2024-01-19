import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faRepeat } from "@fortawesome/free-solid-svg-icons";

export default function ThemeButton() {

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? `${localStorage.getItem('theme')}` : 'light')

    const handleTheme = (currentTheme: string) => {
        const userNewTheme = currentTheme === 'dark' ? 'light' : 'dark'
        localStorage.setItem('theme', userNewTheme)
        setTheme(userNewTheme)
    }

    const applyTheme = (theme : string) => {
        const isThemeDark = theme === 'dark'
        document.body.style.setProperty("--bg-color", isThemeDark ? "#1A1A2E" : "#CDF5FD");
        document.body.style.setProperty("--primary-color", isThemeDark ? "#1D2D50" : "#A0E9FF");
        document.body.style.setProperty("--secondary-color", isThemeDark ? "#27496D" : "#00A9FF");
        document.body.style.setProperty("--contrast-color", isThemeDark ? "#CDF5FD" : "#1A1A2E");
    }

    useEffect(()=>{
        applyTheme(theme)
    },[theme])

    return(
        <button onClick={()=>handleTheme(theme)} className="theme-btn">
            {
                theme === 'dark' ? 
                <><FontAwesomeIcon icon={faMoon}/>   <FontAwesomeIcon icon={faRepeat}/>   <FontAwesomeIcon icon={faSun}/></> 
                : 
                <><FontAwesomeIcon icon={faSun}/>   <FontAwesomeIcon icon={faRepeat}/>   <FontAwesomeIcon icon={faMoon}/></> 
            } 
        </button>
    )
}