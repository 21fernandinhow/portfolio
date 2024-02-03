import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from '../contexts/LanguageContext';

export default function TranslateButton() {

    const { language, setLanguage } = useContext(LanguageContext);

    const handleLanguage = (currentLanguage: string) => {
        const userNewTheme = currentLanguage === 'pt-br' ? 'en' : 'pt-br'
        localStorage.setItem('language', userNewTheme)
        setLanguage(userNewTheme)
    }

    return <FontAwesomeIcon icon={faLanguage} id="translate" onClick={()=>handleLanguage(language)} aria-label="Translate Button"/>
}