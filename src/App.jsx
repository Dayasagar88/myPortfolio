import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App