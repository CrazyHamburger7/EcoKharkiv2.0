import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Problems from './pages/Problems'
import WaterResources from './pages/WaterResources'
import Trash from './pages/Trash'
import Air from './pages/Air'
import GreenZones from './pages/GreenZones'
import Suggestions from './pages/Suggestions'
import EcoVolunteering from './pages/EcoVolunteering'
import Contact from './pages/Contact'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/problems" element={<Problems />} />
              <Route path="/water" element={<WaterResources />} />
              <Route path="/trash" element={<Trash />} />
              <Route path="/air" element={<Air />} />
              <Route path="/green-zones" element={<GreenZones />} />
              <Route path="/suggestions" element={<Suggestions />} />
              <Route path="/volunteering" element={<EcoVolunteering />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
