import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="w-full mt-24 bg-slate-900 text-gray-300">
            <div className="grid grid-cols-2 md:grid-cols-4 mx-auto px-8 py-9 text-sm border-b-2 border-gray-600">
                <div className="">
                    <h6 className="font-bold uppercase">Solutions</h6>
                    <ul>
                        <li className="py-2">Marketing</li>
                        <li className="py-2">Analytics</li>
                        <li className="py-2">Commerce</li>
                        <li className="py-2">Data</li>
                        <li className="py-2">Cloud</li>
                    </ul>
                </div>

                <div className="">
                    <h6 className="font-bold uppercase">Support</h6>
                    <ul>
                        <li className="py-2">Pricing</li>
                        <li className="py-2">Help</li>
                        <li className="py-2">Customer Care</li>
                        <li className="py-2">Api</li>
                    </ul>
                </div>

                <div className="col-span-2 pt-4">
                    <h1 className="uppercase font-bold text-xl">Subscribe to our news letter</h1>
                    <p className="text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, quidem.</p>
                    <form action="" className="flex pt-4 gap-x-4 flex-col justify-center items-baseline md:flex-row">
                        <input type="text" placeholder="Enter your email" className="mb-4 w-full text-xl rounded-md px-4 py-2" />
                        <button className="bg-indigo-600 self-stretch px-6 py-2 text-xl border-2 border-indigo-600 hover:bg-transparent font-bold rounded-lg">Subscribe</button>
                    </form>
                </div>
               
            </div>

            <div className="py-4 w-full mx-auto">
                <div className="flex gap-7 justify-center">
                    <FaFacebook size="40" />
                    <FaGithub size="40" className="hover:text-white cursor-pointer" />
                    <FaInstagram size="40" className="hover:text-white cursor-pointer" />
                    <FaLinkedin size="40" className="hover:text-white cursor-pointer" />
                </div>
                <p className="text-center mt-5">2022 @ All rights reserved</p>
            </div>

        </footer>
    )
}

export default Footer;