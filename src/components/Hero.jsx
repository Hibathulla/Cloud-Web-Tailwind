import { CloudUploadIcon, MailOpenIcon, PaperAirplaneIcon, ServerIcon } from "@heroicons/react/outline";
import bgImg from "../assets/5031659-bg.png"

const Hero = () => {
    return <div className="w-full bg-zinc-200 flex flex-col justify-between py-7">
        <div className="m-auto grid md:grid-cols-2 px-7 py-7">
            <div className="flex flex-col justify-center md:items-start w-[100%] px-4 py-8">
                <p className="text-xl">Unique sequencing and production</p>
                <h1 className="py-3 text-5xl md:text-6xl font-bold">Cloud management</h1>
                <p className="text-2xl">This is our tech brand</p>
                <button className="py-2 px-5 my-3 text-white border bg-indigo-600 border-indigo-600
    hover:bg-transparent hover:text-indigo-600 rounded-md ">Get Started</button>
            </div>

            <div className="">
                <img src={bgImg} alt="/" />
            </div>

        </div>

        <div className="w-[80%] bg-gray-100 border-slate-300 rounded-xl mx-auto px-4 text-center shadow-xl mt-[-1rem] py-7">
                <p className="text-center text-2xl font-bold text-zinc-900 tracking-widest">Data services</p>
                <div className="flex flex-col md:flex-row py-4 md:justify-between">
                    <p className="flex mb-3 font-medium"><CloudUploadIcon className="h-6 text-indigo-600 mr-3" />App security</p>
                    <p className="flex mb-3 font-medium"><MailOpenIcon className="h-6 text-indigo-600 mr-3" />Dashboard Design</p>
                    <p className="flex mb-3 font-medium"><PaperAirplaneIcon className="h-6 text-indigo-600 mr-3" />Cloud data</p>
                    <p className="flex font-medium"><ServerIcon className="h-6 text-indigo-600 mr-3" />API Services</p>
                </div>
            </div>

    </div>
}

export default Hero;