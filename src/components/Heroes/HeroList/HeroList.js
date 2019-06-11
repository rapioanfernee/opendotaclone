import React, { useState, useEffect } from "react";

import { Scrollbars } from "react-custom-scrollbars";

import HeroCard from "./HeroCard";

const HeroList = props => {
  const [cardSelected, setCardSelected] = useState(null);
  useEffect(() => {
    props.onHeroClick(cardSelected);
  });
  return (
    <Scrollbars className={props.className} style={props.style}>
      <div>
        {props.heroes.map((hero, index) => {
          let isSelected = false;
          if (hero.id === cardSelected) {
            isSelected = true;
          } else {
            isSelected = false;
          }
          return (
            <HeroCard
              id={hero.id}
              key={index}
              hero={hero}
              onClick={id => {
                if (id === cardSelected) {
                  setCardSelected(null);
                } else {
                  setCardSelected(id);
                }
              }}
              selected={isSelected}
            />
          );
        })}
      </div>
    </Scrollbars>
  );
};

export default HeroList;
