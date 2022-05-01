import {PhoneIcon, ArrowRightIcon} from "@heroicons/react/outline"
import {ChipIcon, SupportIcon} from "@heroicons/react/outline"

import support from "../assets/support.jpg"

const Support = () => {
    return (
        <section name="support" className="w-full mt-24">
            <div className="w-full h-[700px] bg-gray-900/90 absolute">
                <img className="w-full h-full object-cover mix-blend-soft-light" src={support} alt="/" />
            </div>

            <div className=" w-full mx-auto text-white relative">

                    <div className="px-4 py-12">
                        <h2 className="text-3xl pt-8 text-slate-300 text-center uppercase">Support</h2>
                        <h3 className="text-5xl font-bold py-6 text-center">Finding the right team</h3>
                        <p className="py-4 text-slate-300 md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit possimus saepe culpa placeat nihil officia dolorum ducimus? Deleniti animi aperiam natus dolores ex officia error, id distinctio facilis maxime! Distinctio id necessitatibus, non expedita numquam quisquam error, iure nobis quibusdam cupiditate quia. Laborum sapiente repudiandae, temporibus voluptate a perferendis.</p>
                    </div>

                    <div className="max-w-[1240px] mx-auto text-block grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 px-4 text-black">
                        <div className="bg-white rounded-xl shadow-2xl py-5 px-4">
                            <PhoneIcon className="w-14 p-4 bg-indigo-600 text-white rounded-md mt-[-3rem]"  />
                            <h1 className="text-2xl font-bold my-6">Sales</h1>
                            <p className="text-gray-600 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta incidunt corporis rem vero ullam beatae ab cumque placeat modi accusamus. Mollitia officiis quasi earum, fugiat repudiandae odio ea! Fuga repellat enim itaque esse cum doloribus accusamus ducimus, eveniet nobis velit?</p>
                           <div className="w-full bg-slate-200 px-4 my-3">
                            <button className="w-30 inline text-indigo-600 border-0 bg-transparent">Contact us <ArrowRightIcon className="w-5 inline my-4 hover:scale-150" /></button>
                           </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-2xl py-5 px-4">
                            <SupportIcon className="w-14 p-4 bg-indigo-600 text-white rounded-md mt-[-3rem]"  />
                            <h1 className="text-2xl font-bold my-6">Technical Support</h1>
                            <p className="text-gray-600 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta incidunt corporis rem vero ullam beatae ab cumque placeat modi accusamus. Mollitia officiis quasi earum, fugiat repudiandae odio ea! Fuga repellat enim itaque esse cum doloribus accusamus ducimus, eveniet nobis velit?</p>
                           <div className="w-full bg-slate-200 px-4 my-3">
                            <button className="w-30 inline text-indigo-600 border-0 bg-transparent">Contact us <ArrowRightIcon className="w-5 inline my-4 hover:scale-150" /></button>
                           </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-2xl py-5 px-4">
                            <ChipIcon className="w-14 p-4 bg-indigo-600 text-white rounded-md mt-[-3rem]"  />
                            <h1 className="text-2xl font-bold my-6">System Integration</h1>
                            <p className="text-gray-600 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta incidunt corporis rem vero ullam beatae ab cumque placeat modi accusamus. Mollitia officiis quasi earum, fugiat repudiandae odio ea! Fuga repellat enim itaque esse cum doloribus accusamus ducimus, eveniet nobis velit?</p>
                           <div className="w-full bg-slate-200 px-4 my-3">
                            <button className="w-30 inline text-indigo-600 border-0 bg-transparent">Contact us <ArrowRightIcon className="w-5 inline my-4 hover:scale-150" /></button>
                           </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Support;