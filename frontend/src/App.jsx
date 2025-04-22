
import './App.css'
import Result from './component/Result'
import About from './component/About'
import HowItWorks from './component/HowItWorks'
import Home from './component/Home'
import { Router,Routes,Route } from 'react-router-dom'
import Header from './component/Header'

function App() {

  return (
    <>
    <Header></Header>
    <Routes>
    <Route path="/" element={<Result />} />
    <Route path="/how-it-works" element={<HowItWorks />} />
    <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}

export default App
