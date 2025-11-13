import { useState, useEffect } from "react"
import { DownloadIcon, EyeIcon } from "lucide-react";

const Presentation = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        // Déclenche l'animation après le montage du composant
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);
    
    return(
        <div className="min-h-screen pt-16 sm:pt-20 md:pt-40 pb-8 sm:pb-16 md:pb-28 relative overflow-hidden bg-transparent">
            {/* Ellipses décoratives en arrière-plan */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 md:top-20 left-5 md:left-10 w-16 md:w-32 h-16 md:h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-20 md:top-40 right-10 md:right-20 w-12 md:w-24 h-12 md:h-24 bg-green-300 rounded-full opacity-15 animate-pulse delay-500"></div>
                <div className="absolute bottom-32 md:bottom-20 left-1/4 w-10 md:w-20 h-10 md:h-20 bg-yellow-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 md:bottom-40 right-1/3 w-8 md:w-16 h-8 md:h-16 bg-green-400 rounded-full opacity-20 animate-pulse delay-300"></div>
            </div>
            
            <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-24 2xl:px-32 relative z-10">
                {/* Layout mobile-first: colonne sur mobile, ligne sur desktop */}
                <div className="flex items-center mt-20 md:-mt-10 lg:items-start gap-6 sm:gap-8 lg:gap-20">
                    {/* Section texte */}
                    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} 
                        flex flex-col justify-center text-center lg:text-left flex-1 order-2 lg:order-1`}>
                        <div>
                            <h1 className="text-cyan-400 font-extrabold text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                                <span className="italic text-yellow-400 underline font-medium text-2xl sm:text-4xl">Lovas ALITERA</span> <br />
                                <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Développeur Web<br />Backend</span>
                            </h1>
                        </div>
                        <div className="text-gray-400 my-4 sm:my-6 lg:my-10 xl:my-14">
                            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Je résous des problèmes complexes d'expérience 
                                utilisateur en créant des solutions axées sur l'intégrité, 
                                connectant des millions de personnes.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-8 items-center lg:items-start w-full">
                            <a
                                href="/src/assets/LIVRET-ENI-final2.pdf"
                                download
                                className="flex items-center my-8 justify-center gap-2 bg-transparent border-2 border-cyan-400 text-cyan-400 py-2 px-4 sm:py-2 sm:px-4 rounded-3xl text-xs sm:text-base hover:bg-cyan-800 transition-colors duration-300 w-full sm:w-auto"
                            >
                                Télécharger mon CV <DownloadIcon className="w-4 h-4"/>
                            </a>
                        </div>
                    </div>
                    {/* Section image */}
                    <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} 
                        order-1 lg:order-2 flex justify-center lg:justify-end flex-1 w-full`}>
                        <div className="relative w-full max-w-[16rem] sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
                            {/* Ellipses décoratives autour de l'image */}
                            <div className="absolute -inset-4 md:-inset-10 pointer-events-none">
                                <div className="absolute top-0 left-0 w-8 md:w-20 h-8 md:h-20 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full opacity-30 animate-bounce"></div>
                                <div className="absolute top-2 md:top-10 right-0 w-6 md:w-16 h-6 md:h-16 bg-gradient-to-br from-cyan-300 to-gray-500 rounded-full opacity-25 animate-bounce delay-500"></div>
                                <div className="absolute bottom-0 left-2 md:left-10 w-4 md:w-12 h-4 md:h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-35 animate-bounce delay-1000"></div>
                                <div className="absolute bottom-2 md:bottom-10 right-2 md:right-10 w-5 md:w-14 h-5 md:h-14 bg-gradient-to-br from-cyan-400 to-gray-400 rounded-full opacity-30 animate-bounce delay-300"></div>
                            </div>
                            {/* Image principale */}
                            <div className="relative w-full aspect-square overflow-hidden flex justify-center items-center">
                                <img src="src/assets/images/photsLova.png" alt="imageHome" 
                                className="w-full max-w-[12rem] sm:max-w-xs md:max-w-md lg:max-w-lg h-auto object-cover relative z-10 -mt-4 sm:-mt-8 mx-auto"/>
                            </div>
                            {/* Ellipses supplémentaires sous l'image */}
                            <div className="absolute -bottom-4 md:-bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none">
                                <div className="w-16 md:w-32 h-4 md:h-8 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-full opacity-20 blur-sm"></div>
                                <div className="w-12 md:w-24 h-3 md:h-6 bg-gradient-to-r from-gray-300 via-cyan-400 to-green-500 rounded-full opacity-15 blur-sm mt-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation