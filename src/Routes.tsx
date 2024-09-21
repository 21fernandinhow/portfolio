import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import WaitingAnimation from './components/WaitingAnimation'

const LazyHome = lazy(() => import('./pages/Home'))
const LazyAbout = lazy(() => import('./pages/About'))
const LazyProjects = lazy(() => import('./pages/Projects'))
const LazyContact = lazy(() => import('./pages/Contact'))
const LazyCharlie = lazy(() => import('./pages/Charlie'))

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<Suspense fallback={<main className='zoom-in'><WaitingAnimation/></main>}><LazyHome/></Suspense>} />
        <Route path="/about" element={<Suspense fallback={<main className='zoom-in'><WaitingAnimation/></main>}><LazyAbout/></Suspense>} />
        <Route path="/projects" element={<Suspense fallback={<main className='zoom-in'><WaitingAnimation/></main>}><LazyProjects/></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<main className='zoom-in'><WaitingAnimation/></main>}><LazyContact/></Suspense>} />
        <Route path="/charlie" element={<Suspense fallback={<main className='zoom-in'><WaitingAnimation/></main>}><LazyCharlie/></Suspense>} />
        <Route path="*" element={<Suspense fallback={<main className='zoom-in'><WaitingAnimation/></main>}><LazyHome/></Suspense>} />
    </Routes>
  )
}