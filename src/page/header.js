import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header (){
    const[toggleMenu,setToggleMenu] = useState(false);
    return (
    <header className="flex text-white justify-between px-5  py-5 bg-primary ">
        <a  className="font-bold  hover:text-yellow-500 "href="#" >Achchu</a>
        <nav className="hidden md:block">
            <ul className="flex  font-bold" >
                <li><a href="#" className=' hover:text-yellow-500'>Home</a></li>
                <li><a href="#"  className=' hover:text-yellow-500'>About</a></li>
                <li><a href="#"  className=' hover:text-yellow-500'>Project</a></li>
                <li><a href="#"  className=' hover:text-yellow-500'>Contact</a></li> 
            </ul>
        </nav>
        {toggleMenu&&<nav className="block md:hidden font-bol   ">
            <ul className="flex flex-col mobile-nav" >
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">Contact</a></li> 
            </ul>
        </nav>}
        <button  onClick={()=> setToggleMenu(!toggleMenu)}className='block  md:hidden'>
        <Bars3Icon className='text-white h-6 w-6' />
        </button>
        
    </header>
    )
}