import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import CoursesPage from './pages/CoursesPage'
import InscriptionPage from './pages/InscriptionPage'
import './App.css'

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <div className="app d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<ProjectsPage />} />
            <Route path="/formations" element={<CoursesPage />} />
            <Route path="/inscription" element={<InscriptionPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
