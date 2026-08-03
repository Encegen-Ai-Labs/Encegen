import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 80px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
