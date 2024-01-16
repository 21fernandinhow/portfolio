import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export function Router() {
  return (
    <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/projects" Component={Projects} />
        <Route path="/contact" Component={Contact} />
        <Route path="*" Component={Home} />
    </Routes>
  )
}