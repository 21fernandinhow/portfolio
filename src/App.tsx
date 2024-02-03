import { Router } from './Routes';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import './css/style.css';

export default function App () {
  return (
    <LanguageProvider>
      <Header/>
      <Router/>
      <Footer/>
    </LanguageProvider>
  );
}
