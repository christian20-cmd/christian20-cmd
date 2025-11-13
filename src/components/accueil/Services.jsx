import { CodeIcon, MinusIcon, TextIcon } from "lucide-react"
import { DiReact, DiNodejs, DiDatabase } from "react-icons/di"
import { useState, useEffect } from "react"

const Services = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return(
        <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-24 2xl:px-32 mt-16 sm:mt-24 md:mt-36">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-cyan-400 flex gap-2 items-center justify-center my-2 sm:my-4">
                <MinusIcon className="text-yellow-400 font-bold"/>Services
            </h1>
            <p className="text-center my-4 sm:my-6 text-gray-200 text-sm sm:text-base">Je vais transformer vos idées et vos souhaits en un projet web unique <br className="hidden sm:block" />
             qui vous inspirera, ainsi que vos clients.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {/* Frontend */}
                <div className={`bg-gray-100 p-4 sm:p-8 rounded-lg w-full max-w-xs sm:max-w-96 mx-auto
                    transition-colors duration-700
                    hover:bg-yellow-200
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                `}>
                    <button className="bg-cyan-900 p-2 rounded"><TextIcon className="text-white text-bold text-2xl sm:text-4xl"/></button>
                    <h1 className="text-lg sm:text-xl font-bold my-2">Conception</h1>
                    <p className="text-gray-500 text-sm sm:text-base">
                      Interface et contenu simplifiés, configuration sur-mesure
                    </p>
                </div>
                {/* Base de données */}
                <div className={`bg-gray-100 p-4 sm:p-8 rounded-lg w-full max-w-xs sm:max-w-96 mx-auto
                    transition-colors duration-700
                    hover:bg-yellow-200
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                `}>
                    <button className="bg-cyan-900 p-2 rounded"><DiDatabase className="text-white text-bold text-2xl sm:text-4xl"/></button>
                    <h1 className="text-lg sm:text-xl font-bold my-2">Gestion de Base de Données</h1>
                    <p className="text-gray-500 text-sm sm:text-base">
                      Modélisation, requêtage optimisé et déploiement.
                    </p>
                </div>
                {/* Backend */}
                <div className={`bg-gray-100 p-4 sm:p-8 rounded-lg w-full max-w-xs sm:max-w-96 mx-auto
                    transition-colors duration-700
                    hover:bg-yellow-200
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                `}>
                    <button className="bg-cyan-900 p-2 rounded"><CodeIcon className="text-white text-bold text-2xl sm:text-4xl"/></button>
                    <h1 className="text-lg sm:text-xl font-bold my-2">Développement</h1>
                    <p className="text-gray-500 text-sm sm:text-base">
                      Evolution en fonction de vos besoins
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Services
