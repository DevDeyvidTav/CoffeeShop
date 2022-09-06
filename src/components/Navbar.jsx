import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { CoffeeContext } from '../contexts/CoffeeContext'
import { useContext , useState} from 'react'

export function Navbar() {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="navbar| max-w-full shadow-xl flex items-center justify-between w-screen h-16 fixed text-2xl font-mono font-bold text-white bg-black">
      <p id='logo' className="logo| font-black text-6xl ml-4">CoffeeShop</p>
      <div className=" hidden lg:flex gap-24 mr-10">
        <NavLink to="/"><p>Home</p></NavLink>
        <a href="#history"><NavLink to="/history"><p>Historia</p></NavLink></a>
        <p>Sobre</p>
        <NavLink to="/Menu">Cardápio</NavLink>
      </div>
      <p onClick={()=>setOpen(true)} className='lg:hidden cursor-pointer mr-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      </p>
      <div style={{backgroundColor:'#8C663C'}} className={`${open?'flex flex-col translate-x-0':'-translate-x-full'} duration-500 w-3/4 rounded-md shadow-2xl mt-[39rem]  shadow-black fixed h-screen`}>
        <button onClick={()=> setOpen(false)} className>
          fechar
        </button>
        <div className='flex flex-col justify-center items-center gap-32 text-4xl w-full h-screen'>
          <NavLink onClick={()=> setOpen(false)} to="/">Home</NavLink>
          <NavLink onClick={()=> setOpen(false)} to="/history">História</NavLink>
          <NavLink onClick={()=> setOpen(false)} to="/menu">Cardápio</NavLink>
        </div>
      </div>
    </div>
  )
}