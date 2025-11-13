import { EyeIcon, GitBranchIcon, GitCommitIcon, GitForkIcon, MailCheckIcon, MailIcon, MapIcon, MapPin, MapPinHouse, MinusIcon, Phone, PhoneCall } from "lucide-react"
import { FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { motion, AnimatePresence } from "framer-motion";

import { FaTelegram } from "react-icons/fa6";
import { useState } from "react";

const Contact = () => {
    const [activeLink, setActiveLink] = useState("");
    const handleLinkClick = (link) => {
        setActiveLink(link);
        
        // Scroll vers la section correspondante
        const sectionMap = {
            "Accueil": "presentation",
            "Services": "services",
            "Réalisations": "realisations",
            "CV": "cv",
            "Compétences": "competences",
            "Contact": "contact",
        };
        const sectionId = sectionMap[link];
        if (sectionId) {
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const links = ["Accueil", "Services", "Réalisations", "CV", "Compétences", "Contact"];
    return (
        <div className="bg-gradient-to-r from-slate-900 via-transparent to-slate-900 text-cyan-400 mt-8 sm:mt-12 shadow-inner animate-fade-in-up">
            <div className="border-b-2 border-white grid grid-cols-1 sm:grid-cols-2 px-4 sm:px-8 items-center justify-between py-4 gap-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-cyan-400 flex items-center justify-between">
                    <MinusIcon className="text-yellow-400 font-bold"/>Contactez-moi la-bas
                </h1>
                <div className="place-self-end w-full sm:w-auto flex justify-end">
                    <button
                        className="bg-white text-cyan-900 px-4 sm:px-6 py-1.5 rounded-[40px] font-medium flex items-center gap-2 hover:bg-transparent hover:text-cyan-400 hover:border-2 border-cyan-400 transition-all duration-500 text-xs sm:text-base"
                        onClick={() => handleLinkClick("Réalisations")}
                    >
                        Voire tout Mes Réalisations <EyeIcon/>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-16 py-6 sm:py-8 px-4 sm:px-8">
                    
                    {/* A propos */}
                    <div className="space-y-4">
                        {/* Logo */}
                        <motion.div 
                            className="flex items-center gap-1.5 text-white"
                        >
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="text-navy bg-white w-8 h-8 rounded-full flex items-center justify-center"
                            >
                                <span className="text-xs font-bold">L</span>
                            </motion.div>
                            <p className="font-bold text-base sm:text-lg">Lovas</p>
                        </motion.div>
                       
                        <p className="text-sky leading-relaxed text-xs sm:text-base">
                            Je résous des problèmes complexes d'expérience
                            utilisateur en créant des solutions axées sur l'intégrité,
                            connectant des millions de personnes. <br />
                            Travaillons ensemble sur votre prochain projet <br />
                            Je suis la pour vous.
                        </p>
                        <div className="text-2xl sm:text-3xl flex gap-3 sm:gap-4">
                            <FaFacebook className="text-white"/>
                            <FaWhatsapp className="text-green-600"/>
                            <FaGithub className="text-white"/>
                            <FaTelegram/>
                        </div>
                    </div>

                    {/* Pages */}
                    <div className="space-y-4">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-medium">Navigation</h1>
                        <div className="grid gap-1 sm:gap-2 text-sky text-xs sm:text-base">
                            <a href="#presentation" className="hover:text-cyan-400 hover:underline underline-offset-4 transition-all duration-300">Accueil</a>
                            <a href="#services" className="hover:text-cyan-400 hover:underline underline-offset-4 transition-all duration-300">Services</a>
                            <a href="#realisations" className="hover:text-cyan-400 hover:underline underline-offset-4 transition-all duration-300">Réalisations</a>
                            <a href="#cv" className="hover:text-cyan-400 hover:underline underline-offset-4 transition-all duration-300">CV</a>
                            <a href="#competences" className="hover:text-cyan-400 hover:underline underline-offset-4 transition-all duration-300">Compétences</a>
                            <a href="#contact" className="hover:text-cyan-400 hover:underline underline-offset-4 transition-all duration-300">Contact</a>
                        </div>
                    </div>

                    {/* Coordonnées */}
                    <div className="space-y-4">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-medium">Contacte</h1>
                    <ul className="space-y-3 sm:space-y-4 text-sky text-xs sm:text-base">
                        <li className="flex items-center gap-3">
                            <MapPin className="flex-shrink-0 mt-1" />
                            <span>Lot 515/780 Andrainjato Fianarantsoa</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <MdEmail className="flex-shrink-0 mt-1 text-xl" />
                            <span>lovasaltera@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="flex-shrink-0 mt-1" />
                            <span>034 45 265 55 | 032 78 364 14</span>
                        </li>
                    </ul>
                </div>
                

                
            </div>
            <footer className="bg-gradient-to-b from-transparent to-slate-950 p-4 sm:p-8 ">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-0">
                    <div className="mb-2 md:mb-0 font-bold text-base sm:text-lg tracking-widest drop-shadow-lg animate-gradient-x bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent">
                        Lovas © {new Date().getFullYear()} 
                    </div>
                    <div>
                        <p className="text-sky text-xs sm:text-base">Condition générales d'utilisation | Politique de confidentialité</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Contact