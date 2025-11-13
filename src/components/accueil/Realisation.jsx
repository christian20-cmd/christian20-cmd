import { MinusIcon } from "lucide-react";

import image1 from "/TOUS MES PROJETS/PERFOLIO-LOVAS/src/assets/images/image1.png";



import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const Realisation = () => {
  // Exemple de données pour chaque projet
  const projets = [
    {
      image: image1,
      titre: "Tsena Vita Malagasy",
      description: "Plateforme E-commerce .",
      longDescription: "**Tsena Vita Malagasy** est une plateforme dédiée à la promotion de l’artisanat, des saveurs et des traditions de Madagascar. Fondée en 2023, elle met en avant des produits authentiques, témoignant du talent des artisans locaux. Chaque article raconte une histoire et contribue au développement des communautés grâce à un commerce équitable. Plus qu’un simple espace de vente, **Tsena Vita Malagasy** est une passerelle culturelle reliant Madagascar au monde.",
      images: [
        image1,
        image1,
        image1,
        image1
      ]
    },
    {
      image: image1,
      titre: "Projet 2",
      description: "Application mobile de gestion de tâches.",
      longDescription: "**Projet 2** est une application mobile intuitive permettant aux utilisateurs de gérer efficacement leurs tâches quotidiennes. Elle propose des rappels, des listes personnalisées et une synchronisation cloud pour une organisation optimale, adaptée aussi bien aux professionnels qu’aux particuliers."
    },
    {
      image: image1,
      titre: "Projet 3",
      description: "Site vitrine pour une entreprise locale.",
      longDescription: "**Projet 3** est un site vitrine moderne conçu pour mettre en valeur l’image d’une entreprise locale. Il intègre des animations, une galerie photo et une section contact dynamique, offrant une expérience utilisateur fluide et professionnelle."
    },
    {
      image: image1,
      titre: "Projet 4",
      description: "Plateforme de réservation en ligne.",
      longDescription: "**Projet 4** est une plateforme web permettant la réservation de services en ligne. Elle propose un calendrier interactif, des notifications automatiques et un système de paiement sécurisé, facilitant la gestion des rendez-vous pour les clients et les prestataires."
    },
    {
      image: image1,
      titre: "Projet 5",
      description: "Blog personnel sur le développement web.",
      longDescription: "**Projet 5** est un blog dédié au partage de connaissances et d’astuces sur le développement web. Il comprend des articles, des tutoriels et une section commentaires pour favoriser l’échange entre passionnés et professionnels du secteur."
    },
    {
      image: image1,
      titre: "Projet 6",
      description: "Outil d’analyse de données.",
      longDescription: "**Projet 6** est un outil puissant d’analyse de données, conçu pour visualiser et interpréter des statistiques complexes. Il propose des graphiques interactifs, des exports personnalisés et une interface ergonomique adaptée aux besoins des entreprises."
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProjet, setSelectedProjet] = useState(null);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  const handleImageClick = (projet) => {
    setSelectedProjet(projet);
    setSelectedImageIdx(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProjet(null);
    setSelectedImageIdx(0);
  };

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-24 2xl:px-32 my-28 py-20 relative animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-extrabold text-cyan-400 flex gap-2 items-center justify-center my-4 drop-shadow-lg animate-gradient-x">
        <MinusIcon className="text-yellow-400 scale-125 animate-bounce" />Mes réalisations récentes
      </h1>
      <p className="text-center my-6 text-gray-200 font-medium animate-fade-in-up">
        Découvrez mes projets récents où chaque création reflète l'innovation et l'expertise <br />
        dans le domaine du développement web.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projets.map((projet) => (
          <div
            className="relative group w-full h-[200px] sm:h-[200px] md:h-[240px] cursor-pointer flex flex-col transition-transform duration-500 hover:scale-105 hover:z-10"
            key={projet.titre}
            onClick={() => handleImageClick(projet)}
          >
            <img
              src={projet.image}
              className="w-full h-full object-cover shadow-2xl border-4 border-cyan-400 group-hover:border-gradient-end transition-all duration-500"
              alt={projet.titre}
            />
            <div
              className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-cyan-900 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
                flex flex-col gap-2 backdrop-blur-sm"
            >
              
              <span className="text-xl md:text-2xl lg:text-3xl font-bold text-cyan-800 drop-shadow-lg">{projet.titre}</span>
              <span className="text-sm md:text-lg text-white">{projet.description}</span>
              <span className="absolute right-4 bottom-4 text-snow text-2xl md:text-3xl animate-pulse"><FaPaperPlane/></span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {modalOpen && selectedProjet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-2 sm:p-6">
          <div
            className="relative bg-white shadow-2xl w-full max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl flex flex-col items-center animate-modal-open max-h-[95vh] h-auto"
            style={{ scrollbarGutter: 'stable' }}
          >
            <button
              className="absolute top-2 right-2 text-3xl px-2.5 rounded-full bg-cyan-900 text-cyan-200 hover:text-teal focus:outline-none z-20"
              onClick={closeModal}
              aria-label="Fermer"
            >
              &times;
            </button>
            {/* Contenu scrollable */}
            <div className="flex-1 w-full overflow-y-auto px-2 sm:px-4 py-4 flex flex-col items-center" style={{ maxHeight: '80vh' }}>
              {selectedProjet.images && selectedProjet.images.length > 0 ? (
                <>
                  <img
                    src={selectedProjet.images[selectedImageIdx]}
                    alt={selectedProjet.titre}
                    className="object-cover mx-auto w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl max-h-[60vh] sm:max-h-[50vh] transition-all duration-500"
                  />
                  <div className="text-start mx-4 md:mx-20 my-10">
                    <h1 className="text-4xl">{selectedProjet.titre}</h1>
                    <h1>{selectedProjet.longDescription}</h1>
                    <div className="flex justify-center gap-2 sm:gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-gray-200 py-2 w-full max-w-full mt-2" style={{ scrollbarGutter: 'stable' }}>
                      {selectedProjet.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`Miniature ${idx + 1}`}
                          className={`object-cover rounded-md cursor-pointer border-2 transition-all duration-300
                            ${selectedImageIdx === idx
                              ? 'h-20 w-32 sm:h-28 sm:w-44 md:h-60 md:w-96 border-blue z-10'
                              : 'h-12 w-20 sm:h-16 sm:w-28 border-transparent opacity-70 hover:opacity-100'}
                          `}
                          onClick={() => setSelectedImageIdx(idx)}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Miniatures sous l'image principale */}
                  {/* Dots */}
                  <div className="flex justify-center gap-1 sm:gap-2 mb-4">
                    {selectedProjet.images.map((img, idx) => (
                      <button
                        key={idx}
                        className={`h-2 w-6 sm:h-3 sm:w-8 rounded-full transition-all duration-300 focus:outline-none ${selectedImageIdx === idx ? 'bg-blue' : 'bg-sky'}`}
                        onClick={() => setSelectedImageIdx(idx)}
                        aria-label={`Voir l'image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <img
                  src={selectedProjet.image}
                  alt={selectedProjet.titre}
                  className="w-full max-w-xs sm:max-w-md md:max-w-lg max-h-[40vh] object-cover rounded-xl mx-auto"
                />
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Realisation;