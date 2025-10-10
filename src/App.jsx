import { Routes, Route } from 'react-router'
import Container from 'react-bootstrap/Container'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experence'
import Projects from './pages/Projects'

function App() {
  return (
    <>
      {/*<Header />*/}
      <Container className="py-5">
        <Routes>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Experience" element={<Experience />} />
          <Route path="Projects" element={<Projects />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
