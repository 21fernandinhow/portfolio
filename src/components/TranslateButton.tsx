import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LanguageContext } from '../contexts/LanguageContext';
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

export default function TranslateButton() {

    const { language, setLanguage } = useContext(LanguageContext);

    const handleLanguage = (currentLanguage: string) => {
        const userLang = currentLanguage === 'pt-br' ? 'en' : 'pt-br'
        localStorage.setItem('language', userLang)
        setLanguage(userLang)
        document.documentElement.lang = userLang
    }

    return(
        <button onClick={()=>handleLanguage(language)} aria-label="Translate Button">
            <FontAwesomeIcon icon={faLanguage}/> 
            {/* <span>文</span> */}
        </button>
    )
}