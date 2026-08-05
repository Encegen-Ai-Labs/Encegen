import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import Insights from './pages/Insights'
import Resources from './pages/Resources' 

function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 80px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/resources" element={<Resources />} /> 
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App