
import { NavLink } from "react-router-dom"

export function Home() {
    return (
        <div id='home' className="max-w-full w-screen h-screen">
            <div className="flex flex-col md:flex-row w-screen h-screen">
                <img className="w-screen md:w-3/5 h-72 md:h-screen shadow-xl shadow-zinc-500 " src="https://img.freepik.com/vetores-gratis/fundo-preto-e-branco-da-cafeteria_125540-817.jpg?w=2000" alt="" />
                <div style={{backgroundColor:'#8C663C'}} className="w-screen md:w-2/5 h-screen flex items-center flex-col justify-center gap-20 ">
                    <p className="text-center text-white font-bold text-4xl mx-20 font-serif">Temos os melhores cafés e refeições da região. Tudo isso com um preço super acessível.</p>
                    <NavLink to="/history"><button className='p-1 bg-white hover:bg-zinc-300 border-2 border-black font-serif rounded-md px-3 hover:duration-300 shadow-xl text-black font-bold text-2xl '>Conheça nossa história</button></NavLink>
                </div>
            </div>
        </div>
    )
}

