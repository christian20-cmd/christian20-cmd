import { FaAsterisk } from "react-icons/fa"
import { useState, useEffect } from "react"

const AfterPresentationDeveloper = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div>
        {/* Bandeau vert */}
        <div className={`bg-cyan-400 h-16 md:h-14 -mt-28 w-full -rotate-[4.5deg] md:-rotate-2 transform transition-all duration-1000 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}>

        </div>
        {/* Bandeau jaune avec compétences de développeur */}
        <ul className={`grid grid-cols-3 items-center bg-slate-900 text-cyan-400 shadow-md h-16 md:h-14 w-full absolute -mt-14 font-bold text-xs sm:text-sm md:text-md px-4 gap-2 lg:gap-10 xl:gap-40 py-4 lg:py-0 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
          <li className="grid col-span-1">
            <div className="flex items-center gap-1 lg:gap-10 xl:gap-10">
              <FaAsterisk className="text-xs sm:text-sm lg:text-base"/>
              Experiences Professionelles
            </div>
          </li>
          <li className="grid col-span-1">
            <div className="flex items-center gap-1 lg:gap-10 xl:gap-10">
              <FaAsterisk className="text-xs sm:text-sm lg:text-base"/>
              Projets complétés
            </div>
          </li>
          <li className="grid col-span-1">
            <div className="flex items-center gap-1 lg:gap-10 xl:gap-10">
              <FaAsterisk className="text-xs sm:text-sm lg:text-base"/>
              Clients satisfaits en freelance
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default AfterPresentationDeveloper
