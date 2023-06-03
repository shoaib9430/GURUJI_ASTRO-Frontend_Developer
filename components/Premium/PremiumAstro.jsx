import React from "react";
import star from "../../assets/star.png";
import card from "./data";
import Card from "../Card/Card";
import usserbottom from "../../assets/userbottom.png";

const PremiumAstro = () => {
  return (
    <div className="astroCC">
      <div className="astro">
        <div className="asto__container">
          <div className="astro__head">
            <div className="car_head">
              <img src={star} />
              <span>Premium Astrologers</span>
              <img src={star} />
            </div>
          </div>

          <div className="astro__card">
            <div className="astro__card1">
              {card.cardSection1.map((astrologer, i) => (
                <Card key={i} astro={astrologer} active={astrologer.islive} />
              ))}
            </div>
            <div className="astro__card2">
              {card.cardSection2.map((astrologer, i) => (
                <Card key={i} astro={astrologer} active={astrologer.islive} />
              ))}
            </div>
            <div className="astro__card3">
              {card.cardSection3.map((astrologer, i) => (
                <Card key={i} astro={astrologer} active={astrologer.islive} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="astro__bottom">
        <img src={usserbottom} />
      </div>
    </div>
  );
};

export default PremiumAstro;
