import React, { useState } from "react";
import gsap from "gsap";
import tyler from "../img/Tyler-Rake.png";
import tyler2 from "../img/tyler2.png";
import thecent from "../img/the100.png";
import avengers from "../img/avenger.png";
import bullet from "../img/bullter.png";
import stone from "../img/agent-stone.png";
import divergente from "../img/divergente.jpeg";
import divergente2 from "../img/divergente2.jpeg";
import divergente3 from "../img/divergente3.jpeg";
import Navigations from "../components/Navigations";

const items = [
  {
    name: "tyler rake",
    image: tyler,
    description:
      "Tyler Rake, interprété par Chris Hemsworth, est un mercenaire chargé de secourir le fils kidnappé d'un criminel. Le film Extraction est une intense aventure d'action mettant en avant la force et la bravoure de Rake.",
  },
  {
    name: "tyler rake 2",
    image: tyler2,
    description:
      "Dans Extraction 2, Tyler Rake revient dans un contexte de vengeance, plongeant à nouveau dans des missions périlleuses. Le personnage, toujours interprété par Chris Hemsworth, est confronté à de nouvelles épreuves d'action intense.",
  },
  {
    name: "The100",
    image: thecent,
    description:
      "The 100 se déroule dans un monde post-apocalyptique où 100 jeunes délinquants sont envoyés sur Terre pour déterminer si la planète est habitable. La série explore la survie, les dilemmes moraux, et les relations complexes entre les personnages.",
  },
  {
    name: "Avengers: End game",
    image: avengers,
    description:
      "Avengers: Endgame est l'épisode final de la saga Avengers de Marvel. Les super-héros survivants s'unissent pour inverser les effets dévastateurs de Infinity War. Avec des scènes épiques et des retournements inattendus, le film conclut de manière spectaculaire l'arc narratif des Avengers.",
  },
  {
    name: "Bullet Train",
    image: bullet,
    description:
      "Bullet Train est un film d'action à suspense qui suit un groupe de tueurs à bord d'un train à grande vitesse. Porté par un casting étoilé comprenant Brad Pitt, le film promet une combinaison d'intrigue captivante et de scènes d'action haletantes.",
  },
  {
    name: "Agent Stone",
    image: stone,
    description:
      "Agent Stone est un personnage fictif présent dans des univers variés. Sans détails spécifiques, il est souvent associé à des rôles d'agents secrets ou d'antagonistes. L'histoire précise dépend du contexte, que ce soit dans des films, des séries ou d'autres médias.",
  },
  {
    name: "Divergente",
    image: divergente,
    description:
      "Divergente est un film de science-fiction basé sur le roman du même nom. L'histoire se déroule dans une société divisée en factions basées sur les traits de personnalité. Tris Prior, l'héroïne, découvre qu'elle est divergente, ne pouvant être catégorisée, ce qui la met en danger.",
  },
  {
    name: "Divergente 2",
    image: divergente2,
    description:
      "Dans la suite, Divergente 2: L'insurrection, Tris et Four s'opposent à une autorité oppressive. Ils cherchent refuge parmi les sans-faction, découvrant des secrets choquants sur le monde qui les entoure et l'origine des divergents.",
  },
  {
    name: "Divergente 3",
    image: divergente3,
    description:
      "Divergente 3: Au-delà du mur suit Tris, Four et leurs alliés qui cherchent à découvrir ce qui se trouve au-delà du mur entourant Chicago. Ils sont confrontés à des révélations troublantes et doivent prendre des décisions cruciales pour l'avenir de leur société.",
  },
];

const HomePages = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCard = (index) => {
    const card = items[index];
    const modal = document.querySelector(".modal-content");

    gsap.to(modal, {
      opacity: 0,
      y: 50,
      duration: 0.3,
      ease: "power0.easeNone",
      onComplete: () => {
        setSelectedCard(card);
        gsap.to(modal, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power0.easeNone",
        });
      },
    });
  };

  const closeModal = () => {
    const modal = document.querySelector(".modal-content");

    gsap.to(modal, {
      opacity: 0,
      y: 50,
      duration: 0.3,
      onComplete: () => {
        setSelectedCard(null);
        gsap.to(modal, {
          opacity: 1,
          y: 0,
          duration: 0.3,
        });
      },
    });
  };

  return (
    <div className="main">
      <div className="content">
        <Navigations />
        <div className="card-container">
          {items.map((item, index) => (
            <div key={index} className="card" onClick={() => handleCard(index)}>
              <div className="card-content">
                <p>{`${index + 1}: ${item.name}`}</p>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "240px",
                    height: "140px",
                    borderRadius: "15px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        {selectedCard && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-body">
                <img
                  src={selectedCard.image}
                  alt={selectedCard.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                  }}
                />
                <p className="title-card">{selectedCard.name}</p>
                <p className="modal-description">{selectedCard.description}</p>
                <button onClick={closeModal} className="close">
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePages;
