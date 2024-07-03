import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faRepeat } from "@fortawesome/free-solid-svg-icons";

export default function ThemeButton() {

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? `${localStorage.getItem('theme')}` : 'light')
    const [reverseOrder, setReverseOrder] = useState('');

    const handleTheme = (currentTheme: string) => {
        const userNewTheme = currentTheme === 'dark' ? 'light' : 'dark'
        localStorage.setItem('theme', userNewTheme)
        setTheme(userNewTheme)
    }

    const applyTheme = (theme : string) => {
        const isThemeDark = theme === 'dark'
        document.body.style.setProperty("--bg-color", isThemeDark ? "#222831" : "#f5f5f7");
        document.body.style.setProperty("--primary-color", isThemeDark ? "#31363F" : "#fff");
        document.body.style.setProperty("--contrast-color", isThemeDark ? "#f5f5f7" : "#222831");
        document.body.style.setProperty("--shine-color", isThemeDark ? "rgba(255,255,255, 0.4)" : "rgba(0,0,0, 0.4)");
        setReverseOrder(isThemeDark ? 'reverse-true' : 'reverse-false');
    }

    useEffect(()=>{
        applyTheme(theme)
    },[theme])

    return(
        <button onClick={()=>handleTheme(theme)} className={reverseOrder} aria-label="Change dark / light theme">
            <FontAwesomeIcon icon={faSun} className="icon"/>
            <FontAwesomeIcon icon={faRepeat} className="icon"/>
            <FontAwesomeIcon icon={faMoon} className="icon"/> 
        </button>
    )
}