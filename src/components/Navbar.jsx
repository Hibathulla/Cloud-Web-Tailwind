import { useState } from "react";
import {MenuIcon, XIcon} from "@heroicons/react/outline"
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className="w-screen h-[4rem] z-10 bg-zinc-200 fixed drop-shadow-lg py-2">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold mr-4 sm:text-2xl md:text-3xl">BRAND.</h1>
                    <ul className="hidden md:flex justify-between font-medium">
                    <li className="cursor-pointer hover:text-gray-800"><Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
                    <li className="cursor-pointer hover:text-gray-800"><Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500}>About</Link></li>
                    <li className="cursor-pointer hover:text-gray-800"><Link activeClass="active" to="support" spy={true} smooth={true} duration={500}>Support</Link></li>
                    <li className="cursor-pointer hover:text-gray-800"><Link activeClass="active" to="pricing" spy={true} smooth={true} duration={500}>Pricing</Link></li>
                    </ul>
                </div>
                <div className=" hidden md:flex pr-4">
                    <button className="border-none text-[black] bg-transparent mr-4">Sign In</button>
                    <button className="px-6 py-2 bg-indigo-600 border hover:bg-transparent text-white font-bold rounded-md">Sign Up</button>
                </div>
                <div className="md:hidden mr-4" onClick={() => setOpen(!open)}>
           {open ? <XIcon className="w-7" /> : <MenuIcon className="w-7" />}
                </div>
            </div>

        <ul className={`bg-zinc-200 w-full px-8 py-4 ease-in-out duration-200 transition-all ${open ? "absolute top-17" : "absolute top-[-30rem]"}`}>
                <li className="border-b-2 border-zinc-300 w-full font-medium"><Link onClick={() => setOpen(!open)} activeClass="active" to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
                <li className="border-b-2 border-zinc-300 w-full font-medium"><Link onClick={() => setOpen(!open)} activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500}>About</Link></li>
                <li className="border-b-2 border-zinc-300 w-full font-medium"><Link onClick={() => setOpen(!open)} activeClass="active" to="support" spy={true} smooth={true} duration={500}>Support</Link></li>
                <li className="border-b-2 border-zinc-300 w-full font-medium"><Link onClick={() => setOpen(!open)} activeClass="active" to="pricing" spy={true} smooth={true} duration={500}>Pricing</Link></li>

            <div className="pr-4 text-center mt-5">
                    <button className="border-1 px-8 py-2 text-[black] bg-transparent mr-5 w-full mb-3 hover:bg-indigo-500 hover:text-white">Sign In</button>
                    <button className="px-8 py-2 w-full bg-indigo-600 border hover:bg-transparent text-white font-bold rounded-md">Sign Up</button>
                </div>
        </ul>
        </div>
    )
}

export default Navbar;