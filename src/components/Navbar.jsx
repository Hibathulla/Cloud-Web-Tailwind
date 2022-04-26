import { useState } from "react";
import {MenuIcon, XIcon} from "@heroicons/react/outline"

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className="w-screen h-[4rem] z-10 bg-zinc-200 fixed drop-shadow-lg py-2">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold mr-4 sm:text-2xl md:text-3xl">BRAND.</h1>
                    <ul className="hidden md:flex justify-between font-medium">
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platforms</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className=" hidden md:flex pr-4">
                    <button className="border-none text-[black] bg-transparent mr-4">Sign In</button>
                    <button className="px-8 py-2">Sign Up</button>
                </div>
                <div className="md:hidden" onClick={() => setOpen(!open)}>
           {open ? <XIcon className="w-7" /> : <MenuIcon className="w-7" />}
                </div>
            </div>

        <ul className={`bg-zinc-200 w-full px-8 py-4 ease-in-out duration-200 transition-all ${open ? "absolute top-17" : "absolute top-[-30rem]"}`}>
            <li className="border-b-2 border-zinc-300 w-full">Home</li>
            <li className="border-b-2 border-zinc-300 w-full">About</li>
            <li className="border-b-2 border-zinc-300 w-full">Support</li>
            <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
            <li className="border-b-2 border-zinc-300 w-full">Pricing</li>

            <div className="pr-4 text-center mt-5">
                    <button className="border-1 px-8 py-2 text-[black] bg-transparent mr-5 w-full mb-3 hover:bg-indigo-500 hover:text-white">Sign In</button>
                    <button className="px-8 py-2 w-full">Sign Up</button>
                </div>
        </ul>
        </div>
    )
}

export default Navbar;