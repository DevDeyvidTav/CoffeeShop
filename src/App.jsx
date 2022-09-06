import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { History } from "./pages/History"
import { About } from "./pages/About"
import { Menu } from "./pages/Menu"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"


export function App(){
  
  return (
    <div style={{backgroundColor:'#8C663C'}} className="Container| w-screen max-w-full ">      
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/History" element={<History />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Menu" element={<Menu />}/>
        </Routes>
      </Router>
    </div>
  )
}