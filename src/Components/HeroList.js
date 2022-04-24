import React from "react";
import { useNavigate } from "react-router-dom";

function HeroList({ characters }) {
  const navigate = useNavigate();

  const redirectDetail = (_id) => {
    navigate(`/details/${_id}`);
  };
  return (
    <div id="hero-box" className="m-auto">
      {characters.map((character, i) => (
        <div
          key={`${character.name}${i}`}
          className="hero-card"
          onClick={(e) => {
            redirectDetail(character.id);
          }}
        >
          <img
            className="hero-img"
            src={`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`}
            alt={`${character.name}`}
          />
          <div id="hero-name" className="hero-font">
            {character.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroList;
