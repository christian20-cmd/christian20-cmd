

import AfterPresentation from '../components/accueil/AfterPresentation';
import Contact from '../components/accueil/Contact';
import Cv from '../components/accueil/Cv';
import FavoryteToll from '../components/accueil/FavoryteToll';
import Presentation from '../components/accueil/Presentation';
import Services from '../components/accueil/Services';
import Navbar from '../components/Navbar';
import Realisation from '../components/accueil/Realisation';
import RevealOnScroll from '../components/RevealOnScroll';


const Accueil = () => {
    return(
        <div className='font-MyFontFamily  min-h-screen flex flex-col animate-fade-in bg-[radial-gradient(circle,_theme(colors.cyan.900)_0%,_theme(colors.cyan.950)_100%)]'>
            <Navbar/>
            <main className="flex-1">
                <section id="presentation"><RevealOnScroll><Presentation/></RevealOnScroll></section>
                <section id="apres-presentation"><RevealOnScroll><AfterPresentation/></RevealOnScroll></section>
                <section id="services"><RevealOnScroll><Services/></RevealOnScroll></section>
                <section id="realisations"><RevealOnScroll><Realisation/></RevealOnScroll></section>
                <section id="cv"><RevealOnScroll><Cv/></RevealOnScroll></section>
                <section id="competences"><RevealOnScroll><FavoryteToll/></RevealOnScroll></section>
                <section id="contact"><RevealOnScroll><Contact/></RevealOnScroll></section>
            </main>
            
        </div>
    )
}
export default Accueil