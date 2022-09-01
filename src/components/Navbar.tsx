import './Navbar.css'
import { NavLink } from 'react-router-dom'


export function Navbar(){
  return(
    <div className="navbar| shadow-xl flex items-center justify-between w-screen h-16 fixed text-2xl font-mono font-bold text-white bg-black">
        <p id='logo' className="logo| font-black text-6xl ml-4">CoffeeShop</p> 
       <div className="Links flex gap-40 mr-10">
       <NavLink to="/"><p>Home</p></NavLink>
        <a href="#history"><NavLink to="/history"><p>Historia</p></NavLink></a>
        <p>Sobre</p>
        <p>Cardápio</p>
       </div>
    </div>
  )
}