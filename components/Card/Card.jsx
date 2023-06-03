import React from "react";
import { AiFillStar } from "react-icons/ai";
import {BsChatSquareDots, BsTelephone} from 'react-icons/bs';
import astroCards from "../../assets/astrologer cards";

const AstroCard = ({ astro, active }) => {

  return (
    <div className="astrocard">
      <div className="astrocard__img">
        <img src={astro.image} />
        <p className="exp">{astro.experience}+ Years</p>

        <div className="online">
          <div></div>
          {
            astro.isOnline ? (
              <p>Online</p>
            ):(
              <p>Offline</p>
            )
          }
        </div>

        <div className="info">
          <div className="rate">
            <AiFillStar className="rateStar" />
            <span>{astro.rating}</span>
          </div>
          <h2>Astrologer Name</h2>
          <p className="Shead">Specialties</p>
          <p>Love, Business, Life</p>
          <p className="Shead">Skills</p>
          <p>Vedic Astrology, Kundali,</p>
        </div>

        <div className="price">
          <p>Price</p>
          <h2>₹{astro.price}</h2>
          <p>/min</p>
        </div>
      </div>

      <div className="astrocard__live">
        <img src={astroCards.live} 
          style={astro.islive ? null : {opacity: 0.6}} 
         />
      </div>

      <div className="astrocard__contact">
        <div className="chat">
          <BsChatSquareDots/>
          <p>Chat</p>
        </div>
        <div className="call">
          <BsTelephone/>
          <p>Call</p>
        </div>
      </div>
    </div>
  );
};

export default AstroCard;
