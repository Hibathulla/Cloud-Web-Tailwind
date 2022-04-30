import {CheckIcon} from "@heroicons/react/solid"

const Pricing = () => {
    return (
        <section id="pricing" className="my-24">

            <div className="absolute mix-blend-overlay w-full h-[600px] bg-slate-900"></div>
                <div className="text-center py-6 text-white px-3">
                    <h3 className="uppercase text-2xl py-2 text-slate-400">pricing</h3>
                    <h2 className="text-4xl font-bold py-3">Find the right price for your needs.</h2>
                    <p className="text-slate-400 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptate vel? Officia doloremque, eaque a distinctio rem expedita cum. Aspernatur in libero atque molestias. Quae ullam quasi fugit eaque saepe?</p>
                </div>

            <div className="grid md:grid-cols-2 py-7">
                <div className="bg-white w-[90%] mx-auto px-4 py-5 rounded-xl shadow-xl ">
                    <span className="uppercase w-28 bg-indigo-200 text-indigo-900 rounded-xl px-3 py-1 font-medium text-sm">standard</span>
                    <div className="py-5">
                        <h1 className="text-5xl inline font-bold">$49</h1><span className="inline">/mo</span>
                    </div>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nostrum accusantium.</p>

                    <div className="py-7">
                        <p className="text-gray-400 py-4"><CheckIcon className="w-6 inline mr-3 text-green-600 font-bold" />Lorem ipsum dolor sit amet.</p>
                        <p className="text-gray-400 py-4"><CheckIcon className="w-6 inline mr-3 text-green-600 font-bold" />Lorem ipsum dolor sit.</p>
                        <p className="text-gray-400 py-4"><CheckIcon className="w-6 inline mr-3 text-green-600 font-bold" />Lorem ipsum dolor sit.</p>
                        <p className="text-gray-400 py-4"><CheckIcon className="w-6 inline mr-3 text-green-600 font-bold" />Lorem ipsum dolor sit amet.</p>
                        <p className="text-gray-400 py-4"><CheckIcon className="w-6 inline mr-3 text-green-600 font-bold" />Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <button className="w-full text-white text-xl font-medium rounded-lg bg-indigo-800 hover:bg-transparent hover:text-black border border-indigo-600 py-2">Get Started</button>
               </div>

               <div className="bg-white w-[90%] mx-auto px-4 py-5 rounded-xl shadow-xl ">
                    <span className="uppercase w-28 bg-indigo-200 text-indigo-900 rounded-xl px-3 py-1 font-medium text-sm">standard</span>
                    <div className="py-5">
                        <h1 className="text-5xl inline font-bold">$49</h1><span className="inline">/mo</span>
                    </div>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nostrum accusantium.</p>

                    <div className="py-7">
                        <p className="text-gray-400 py-4"><CheckIcon className="w-6 inline mr-3 text-green-600 font-bold" />Lorem ipsum dolor sit amet.</p>
                        <p className="text-gray-400 py-4"><CheckIcon className="w-6 inline mr-3 text-green-600 font-bold" />Lorem ipsum dolor sit.</p>
                        <p className="text-gray-400 py-4"><CheckIcon className="w-6 inline mr-3 text-green-600 font-bold" />Lorem ipsum dolor sit.</p>
                        <p className="text-gray-400 py-4"><CheckIcon className="w-6 inline mr-3 text-green-600 font-bold" />Lorem ipsum dolor sit amet.</p>
                        <p className="text-gray-400 py-4"><CheckIcon className="w-6 inline mr-3 text-green-600 font-bold" />Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <button className="w-full text-white text-xl font-medium rounded-lg bg-indigo-800 hover:bg-transparent hover:text-black border border-indigo-600 py-2">Get Started</button>
               </div>
            </div>
        
        </section>
    )
}

export default Pricing;