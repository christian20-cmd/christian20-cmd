import { useState, useEffect } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
            // Détection de la section visible
            const sectionIds = [
                { id: "presentation", link: "Accueil" },
                { id: "services", link: "Services" },
                { id: "realisations", link: "Réalisations" },
                { id: "cv", link: "CV" },
                { id: "competences", link: "Compétences" },
                { id: "contact", link: "Contact" },
            ];
            let found = "";
            for (const section of sectionIds) {
                const el = document.getElementById(section.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom >= 120) {
                        found = section.link;
                        break;
                    }
                }
            }
            setActiveLink(found);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setMenuOpen(false);
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

    // Animation variants
    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-900 backdrop-blur-md py-0 " : "py-8"}`}
        >
            <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-24 2xl:px-32">
                <motion.div 
                    className={`p-1.5 rounded-[40px] flex items-center justify-between ${scrolled ? "bg-transparent" : "bg-slate-900 shadow-md"}`}
                >
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
                        <p className="font-bold text-lg">Lovas</p>
                    </motion.div>

                    {/* Hamburger menu (mobile) */}
                    <div className="lg:hidden z-60">
                        <motion.button 
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setMenuOpen(!menuOpen)} 
                            className="text-white text-2xl p-2 rounded-full bg-navy"
                        >
                            {menuOpen ? <FiX /> : <FiMenu />}
                        </motion.button>
                    </div>

                    {/* Navigation Links */}
                    <ul className="hidden lg:flex space-x-6 text-white">
                        {links.map((link) => (
                            <motion.li
                                key={link}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleLinkClick(link)}
                                className={`cursor-pointer transition-all duration-300 ease-linear relative px-2 py-1 ${
                                    activeLink === link ? "underline text-cyan-400" : "hover:text-cyan-400"
                                }`}
                            >
                                {link}
                                
                            </motion.li>
                        ))}
                    </ul>

                    {/* Contact Button */}
                    <motion.div 
                        
                        className="hidden lg:block"
                    >
                        <button
                            className="bg-white text-cyan-900 px-6 py-1.5 rounded-[40px] font-medium flex items-center gap-2 hover:bg-transparent hover:text-cyan-400 hover:border-2 border-cyan-400 transition-all duration-500 "
                            onClick={() => handleLinkClick("Contact")}
                        >
                            Contactez-Moi
                        </button>
                    </motion.div>
                </motion.div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden mt-2 bg-cyan-900/95 backdrop-blur-sm p-6 rounded-2xl text-white shadow-xl"
                        >
                            <motion.ul 
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                                className="space-y-6"
                            >
                                {links.map((link) => (
                                    <motion.li
                                        key={link}
                                        variants={itemVariants}
                                        onClick={() => handleLinkClick(link)}
                                        className={`text-lg cursor-pointer flex items-center ${
                                            activeLink === link ? "text-yellow-500 font-bold" : ""
                                        }`}
                                    >
                                        {activeLink === link && (
                                            <motion.span 
                                                layoutId="mobile-nav-indicator"
                                                className="w-2 h-2 bg-yellow-500 rounded-full mr-3"
                                            />
                                        )}
                                        {link}
                                    </motion.li>
                                ))}
                                <motion.li variants={itemVariants}>
                                    <button
                                        className="bg-white text-cyan-900 px-6 py-3 rounded-[40px] font-medium flex items-center justify-center gap-2 w-full mt-4 hover:bg-yellow-500 hover:text-white transition-all duration-300"
                                        onClick={() => { handleLinkClick("Contact"); setMenuOpen(false); }}
                                    >
                                        Contact Me <FiArrowRight />
                                    </button>
                                </motion.li>
                            </motion.ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Navbar;