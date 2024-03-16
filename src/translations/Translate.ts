import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import en from './en.json';
import ptbr from './pt-br.json';

type Translations = {
  [key: string]: string | Translations;
};

export function useTranslation(key: string): string {

  const { language } = useContext(LanguageContext);
  const translations: Translations = language === 'en' ? en : ptbr;

  const translate = (key: string, translations: Translations): string => {

    const keys = key.split('.');
    let result = translations;

    for (const k of keys) {
      if (!result || typeof result !== 'object') {
        return key;
      }
      result = result[k] as Translations;
    }
    
    return typeof result === 'string' ? result : `Missing translate: ${key}`;
  };

  return translate(key, translations);
}
