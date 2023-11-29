import React, { useState, useEffect } from 'react';

const HomePages = () => {
  const [cards, setCards] = useState(Array.from({ length: 9 }, (_, index) => index + 1));

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.card-container');
      if (container && container.scrollTop + container.clientHeight >= container.scrollHeight - 10) {
        // Load more cards when scrolled to the bottom (adjust the threshold as needed)
        setCards(prevCards => [...prevCards, ...Array.from({ length: 3 }, (_, index) => index + prevCards.length + 1)]);
      }
    };

    const container = document.querySelector('.card-container');
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="main">
      <div className="content">
        <div className='navigation'>
        <div className="sidebar">
          <div className="menu">
              <button>Accueil</button>
              <button>Series</button>
              <button>Film</button>
              <button>Parametres</button>
              <button>Nouveauté</button>
            </div>
            <button className="logout-button">Logout</button>
          
          </div>
          <div className="navbar">
            <p>navbar</p>
          </div>
        </div>
        <div className="card-container">
          {cards.map(cardNumber => (
            <div key={cardNumber} className="card">
              <p>card {cardNumber}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePages;
