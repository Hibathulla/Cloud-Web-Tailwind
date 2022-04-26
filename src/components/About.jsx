const About = () => {
    return (
        <section>
            <div className="px-6 py-10">

                <div className="flex flex-col text-center">
                    <h1 className="text-4xl font-bold">Trusted by developers across the world</h1>
                    <p className="text-2xl text-gray-500 py-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, facilis illo. Ea, sit dolor quo nemo ad omnis. Ab, nulla.</p>
                </div>

                <div className="flex justify-around items-center gap-5 flex-col md:flex-row px-4">

                    <div className="text-center w-[20rem] md:text-6xl bg-white shadow-lg p-6 rounded-xl">
                        <h3 className="text-4xl md:text-6xl font-bold text-indigo-600">100%</h3>
                        <p className="text-2xl text-gray-500 py-2">Completion</p>
                    </div>

                    <div className="text-center w-[20rem] md:text-6xl bg-white shadow-lg p-6 rounded-xl">
                        <h3 className="text-4xl md:text-6xl font-bold text-indigo-600">24/7</h3>
                        <p className="text-2xl text-gray-500 py-2">Delivery</p>
                    </div>

                    <div className="text-center w-[20rem] md:text-6xl bg-white shadow-lg p-6 rounded-xl">
                        <h3 className="text-4xl md:text-6xl font-bold text-indigo-600">100k</h3>
                        <p className="text-2xl text-gray-500 py-2">Transactions</p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default About;