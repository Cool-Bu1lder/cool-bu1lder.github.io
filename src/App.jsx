import { Routes, Route } from 'react-router'

import Home from './pages/Home'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  )
}

export default App
