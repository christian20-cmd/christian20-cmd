import { MinusIcon } from "lucide-react"

const Cv = () => {
    return(
        <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-24 2xl:px-32 my-10 sm:my-20 md:my-28">
            <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-8 font-extrabold text-cyan-400 flex gap-2 items-center justify-center my-2 sm:my-4">
                <MinusIcon className="text-yellow-400"/>Circulium Vitae
            </h1>
            <div className="gap-4 sm:gap-8">
                <div className="space-y-4 sm:space-y-8 w-full pb-6 sm:pb-10 border-b-2 border-white">
                    <h1 className="text-xl sm:text-2xl md:text-3xl italic text-yellow-400 underline">
                        Experiences
                    </h1>
                    <div className="flex flex-col md:flex-row gap-4 sm:gap-8">
                        <div className="rounded-lg px-4 sm:px-8 md:px-10 py-4 sm:py-8 bg-gray-900 hover:bg-gray-800 transform duration-500 shadow-lg w-full">
                            <h1 className="text-cyan-400 font-bold text-sm sm:text-base">Mars 2025 - En cours</h1>
                            <h1 className="text-white font-bold text-lg sm:text-2xl md:text-3xl">MY AGENCY | DEV.INT</h1>
                            <p className="text-gray-300 text-xs sm:text-base">Developpeur web Symfony</p>
                        </div>
                        <div className="rounded-lg px-4 sm:px-8 md:px-10 py-4 sm:py-8 bg-gray-900 hover:bg-gray-800 transform duration-500 shadow-lg w-full">
                            <h1 className="text-cyan-200 font-bold text-sm sm:text-base">Janvier - Fevrier 2025 (5 semaines)</h1>
                            <h1 className="text-white font-bold text-lg sm:text-2xl md:text-3xl">SOPHARMAD | DEV CONSULT</h1>
                            <p className="text-gray-300 text-xs sm:text-base">Developpeur web Symfony</p>
                        </div>
                        <div className="rounded-lg px-4 sm:px-8 md:px-10 py-4 sm:py-8 bg-gray-900 hover:bg-gray-800 transform duration-500 shadow-lg w-full">
                            <h1 className="text-cyan-400 font-bold text-sm sm:text-base">Janvier - Decembre 2024 (1 an)</h1>
                            <h1 className="text-white font-bold text-lg sm:text-2xl md:text-3xl">SAFIDY MG | CONSULT</h1>
                            <p className="text-gray-300 text-xs sm:text-base">Developpeur Php</p>
                        </div>
                    </div>
                    <div className="rounded-lg px-4 sm:px-8 md:px-10 py-4 sm:py-8 bg-gray-900 hover:bg-gray-800 transform duration-500 shadow-lg w-full mt-4">
                        <h1 className="text-cyan-400 font-bold text-sm sm:text-base">Aout - Novembre 2023 (3 mois)</h1>
                        <h1 className="text-white font-bold text-lg sm:text-2xl md:text-3xl">DandoRoid Technology | REMOTE</h1>
                        <p className="text-gray-300 text-xs sm:text-base">Chef de projet | Symfony | React Js | Api plateform</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-4">
                        <div className="rounded-lg px-4 sm:px-8 md:px-10 py-4 sm:py-8 bg-gray-900 hover:bg-gray-800 transform duration-500 shadow-lg w-full">
                            <h1 className="text-cyan-400 font-bold text-sm sm:text-base">Janvier - Mars 2023 (3 mois)</h1>
                            <h1 className="text-white font-bold text-lg sm:text-2xl md:text-3xl">ISFPP Madagascar | CONSULT</h1>
                            <p className="text-gray-300 text-xs sm:text-base">Developpeur Symfony</p>
                        </div>
                        <div className="rounded-lg px-4 sm:px-8 md:px-10 py-4 sm:py-8 bg-gray-900 hover:bg-gray-800 transform duration-500 shadow-lg w-full">
                            <h1 className="text-cyan-400 font-bold text-sm sm:text-base">Mai 2022 - Octobre 2022</h1>
                            <h1 className="text-white font-bold text-lg sm:text-2xl md:text-3xl">NG Academy | STAGE</h1>
                            <p className="text-gray-300 text-xs sm:text-base">Developpeur Symfony</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-4 sm:space-y-8 w-full mt-6 sm:mt-10">
                    <h1 className="text-xl sm:text-2xl md:text-3xl italic text-yellow-400 underline">Educations</h1>
                    <div className="rounded-lg px-4 sm:px-8 md:px-10 py-4 sm:py-8 bg-gray-900 hover:bg-gray-800 transform duration-500 shadow-lg w-full">
                        <h1 className="text-cyan-400 font-bold text-sm sm:text-base">2020</h1>
                        <h1 className="text-white font-bold text-lg sm:text-2xl md:text-3xl">LICENCE EN INFORMATIQUE</h1>
                        <p className="text-gray-300 text-xs sm:text-base">Univerité de Fianarantsoa | Ecole Natianale d'informatique</p>
                    </div>
                    <div className="rounded-lg px-4 sm:px-8 md:px-10 py-4 sm:py-8 bg-gray-900 hover:bg-gray-800 transform duration-500 shadow-lg w-full">
                        <h1 className="text-cyan-400 font-bold text-sm sm:text-base">2016</h1>
                        <h1 className="text-white font-bold text-lg sm:text-2xl md:text-3xl">BACCALAUREAT</h1>
                        <p className="text-gray-300 text-xs sm:text-base">Enseignement generale | Lycée privée Les Capucines</p>
                    </div>
                    <div className="rounded-lg px-4 sm:px-8 md:px-10 py-4 sm:py-8 bg-gray-900 hover:bg-gray-800 transform duration-500 shadow-lg w-full">
                        <h1 className="text-cyan-400 font-bold text-sm sm:text-base">J2014 (6 mois)</h1>
                        <h1 className="text-white font-bold text-lg sm:text-2xl md:text-3xl">FORMATION ANGLAIS</h1>
                        <p className="text-gray-300 text-xs sm:text-base">UNITED STANDARD ENGLISH</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cv