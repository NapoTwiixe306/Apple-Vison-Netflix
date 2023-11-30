import React, { useState } from "react";
import gsap from "gsap";
import Navigations from "../components/Navigations";
import { items } from "./list/items";
import { series } from "./list/series";

export default function HomePages() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isSeriesPanelOpen, setIsSeriesPanelOpen] = useState(false);

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

  const toggleSeriesPanel = () => {
    setIsSeriesPanelOpen(!isSeriesPanelOpen);
  };

  return (
    <div className="main">
      <div className="content">
        <Navigations toggleSeriesPanel={toggleSeriesPanel} />

        {isSeriesPanelOpen ? (
          <div className="series-panel">
            <div className="card-container">
              {series.map((serie, index) => (
                <div
                  key={index}
                  className="card"
                  onClick={() => handleCard(index)}
                >
                  <div className="card-content">
                    <p>{serie.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="card-container">
            {items.map((item, index) => (
              <div
                key={index}
                className="card"
                onClick={() => handleCard(index)}
              >
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
        )}

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
}
