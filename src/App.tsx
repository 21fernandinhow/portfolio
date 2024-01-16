import { Router } from './Routes';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/style.css';

export default function App () {
  return (
    <>
      <Header/>
      <Router/>
      <Footer/>
    </>
  );
}
