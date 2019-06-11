import React, { useState } from "react";

import styled from "styled-components";

const HeroCard1 = styled.div`
  cursor: pointer;
  height: 120px;
  width: 65%;
  background-color: white;
  position: relative;
  margin: 5px 5px 5px 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 2px;
  float: right;
  ${props => {
    if (props.heroAttr === "str") {
      return `border-left: 5px solid rgb(255, 121, 121);`;
    } else if (props.heroAttr === "agi") {
      return `border-left: 5px solid rgb( 121,255, 121);`;
    } else if (props.heroAttr === "int") {
      return `border-left: 5px solid rgb( 121, 121,255);`;
    }
  }}
  ${props => {
    if (props.selected) {
      return `margin-right: 25px`;
    } else {
      return ` `;
    }
  }};
`;

const HeroIcon = styled.div`
  padding-left: 15px;
  margin: auto;
  text-align: center;
`;

const HeroDetails = styled.div`
  padding: 10px;
`;

const HeroCard = props => {
  if (props) {
    const { hero } = props;
    return (
      <div style={props.style} className={props.className}>
        <HeroCard1
          onClick={() => props.onClick(props.id)}
          selected={props.selected}
          className="row"
          heroAttr={hero.primary_attr}
        >
          <HeroIcon className="col-md-3 col-3">
            <img src={`http://cdn.dota2.com/${hero.icon}`} alt="hero" />
          </HeroIcon>
          <HeroDetails className="col-md-9 col-9">
            <span style={{ fontSize: "0.9rem", display: "block" }}>
              {hero.localized_name}
            </span>
            <span style={{ fontSize: "0.9rem", display: "block" }}>
              {hero.primary_attr.toUpperCase()} - {hero.attack_type}
            </span>
            <span style={{ fontSize: "12px", color: "red", display: "block" }}>
              {hero.base_str} + {hero.str_gain}
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "green",
                display: "block"
              }}
            >
              {hero.base_agi} + {hero.agi_gain}
            </span>
            <span style={{ fontSize: "12px", color: "blue", display: "block" }}>
              {hero.base_int} + {hero.int_gain}
            </span>
          </HeroDetails>
        </HeroCard1>
      </div>
    );
  } else {
    return (
      <HeroCard1>
        <HeroIcon>Test1</HeroIcon>
        <HeroDetails>Test</HeroDetails>
      </HeroCard1>
    );
  }
};

export default HeroCard;
