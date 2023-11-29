import React, { useState, useEffect } from 'react';
import avatar from '../img/avatar.png'
const HomePages = () => {
  const [cards, setCards] = useState(Array.from({ length: 9 }, (_, index) => index + 1));

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.card-container');
      if (container && container.scrollTop + container.clientHeight >= container.scrollHeight - 10) {
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
            <div className="img">
            <svg xmlns="http://www.w3.org/2000/svg" width="500" height="110" viewBox="0 0 500 110" fill="none" className='svg'>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899994V109.586C6.83594 108.795 14.1406 108.035 20.9375 107.339C20.9766 84.5894 20.9766 70.6359 21.0156 47.9496C30.4297 70.2879 36.2109 83.482 45.5469 104.713C52.8906 104.048 60.9766 103.226 68.3594 102.625C68.3984 68.7058 68.4766 34.7871 68.5547 0.899994H47.5C47.4609 24.0926 47.4219 39.0902 47.3828 62.2828C38.3594 39.6598 29.2969 24.6937 20.2344 0.899994H0ZM88.8672 0.899994L88.6328 101.169C108.125 99.7453 127.656 98.543 147.188 97.6254C147.227 92.7527 147.227 85.7285 147.227 80.8559C134.531 81.457 122.383 82.1215 109.688 82.8176C109.727 73.8633 109.727 66.3961 109.766 57.4418C119.023 57.2836 128.789 57.4101 138.242 57.2836C138.242 52.3793 138.281 45.3234 138.281 40.4191C128.906 40.5457 119.023 40.5773 109.805 40.7039C109.844 31.718 109.844 26.782 109.844 17.7961C115.664 17.7328 142.461 17.7328 147.305 17.7012C147.305 12.7969 147.188 5.77265 147.188 0.899994H88.8672ZM239.414 0.899994C239.414 32.3508 239.414 63.8332 239.414 95.284C241.68 95.284 243.984 95.284 246.25 95.284C250.938 95.284 255.664 95.284 260.273 95.3156C260.273 81.9633 260.273 69.7816 260.273 56.4293C261.406 56.4293 286.016 56.3976 288.789 56.4293C288.789 51.6516 288.789 44.5324 288.75 39.7547C286.172 39.723 261.328 39.7547 260.273 39.7547C260.273 31.1484 260.273 26.3074 260.273 17.7328C262.539 17.7328 292.305 17.7328 298.008 17.7328C298.008 12.9551 297.969 5.70937 297.969 0.899994H239.414ZM311.68 0.994916C311.719 32.7621 311.523 64.4976 311.562 96.2648C330.273 96.8344 349.961 97.4355 368.633 98.4797C368.633 93.607 368.633 86.5828 368.633 81.6785C356.797 81.1406 344.492 80.4445 332.656 80.0332C332.578 52.8539 332.773 28.1742 332.695 0.994916H311.68ZM385.938 0.994916L386.172 99.5238C393.047 99.9668 400.117 100.41 406.992 100.916C406.992 67.6301 407.07 34.2808 406.992 0.994916H385.938ZM425 0.994916C433.438 17.6062 441.133 34.2492 449.688 51.9047C440.82 68.8324 431.758 85.6652 422.891 101.897C430.234 102.498 437.852 103.384 445.195 104.048C450.469 93.5754 455.234 85.507 460.508 74.7492C465.781 86.2031 470.586 95.0309 475.82 106.864C483.164 107.624 492.695 108.763 500 109.617C491.133 90.3797 481.406 70.3512 472.5 52.1578C481.367 35.1035 490.43 18.8086 499.688 0.994916H476.719C471.016 12.0059 467.07 19.0934 461.602 29.598C456.523 18.682 453.125 11.5945 448.008 0.994916H425ZM160.82 0.994916C160.82 5.83593 160.82 12.8285 160.82 17.7012C161.758 17.6695 181.992 17.7644 182.695 17.7644C182.656 44.7223 182.617 69.307 182.578 96.2648C189.453 96.0433 196.797 95.8851 203.633 95.7586C203.672 68.959 203.711 44.4691 203.75 17.7012C211.016 17.6695 218.516 17.6379 225.781 17.6379C225.781 12.8602 225.781 5.77265 225.781 0.994916H160.82Z" fill="black"/>
            </svg>
            <img src={avatar} alt="" />
            </div>
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
                <div className="card-content">
                    <p>card {cardNumber}</p>
                {/* You can add other content here if needed */}
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePages;
