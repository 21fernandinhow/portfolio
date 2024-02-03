import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import ThemeButton from "./ThemeButton";
import TranslateButton from "./TranslateButton";

export default function Header() {

  const { language } = useContext(LanguageContext)
  const isEnglish = language === "en"

  return (
    <header>

      <h1>Fernando Carvalho</h1>
      <h2>{ isEnglish ? "FullStack Developer" : "Desenvolvedor FullStack"}</h2>

      <div className="icons">
        <a href="https://github.com/21fernandinhow" target="_blank" rel="noopener noreferrer" aria-label="Github">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/fernando-carvalho-6005b024b/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <ThemeButton/>
        <TranslateButton/>
      </div>

    </header>
  )
}