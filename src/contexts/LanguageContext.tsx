import { createContext, ReactNode, useState } from 'react';

type LanguageContextType = {
    language: string;
    setLanguage: (lang: string) => void;
};
  
export const LanguageContext = createContext<LanguageContextType>({language: "en", setLanguage: () => {} });

export const LanguageProvider : React.FC<{ children: ReactNode }> = ({ children }) => {

    const [language, setLanguage] = useState(localStorage.getItem('language') ? `${localStorage.getItem('language')}` : 'en')

    return(
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}
