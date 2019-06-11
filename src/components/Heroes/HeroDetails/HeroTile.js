import React from "react";
import styled from "styled-components";

const HeroTile1 = styled.div`
  width: ${props => {
    return props.width;
  }};
  height: ${props => {
    return props.height;
  }};
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const HeroTile = props => {
  return (
    <HeroTile1
      style={props.style}
      className={props.className}
      width={props.width}
      height={props.height}
    >
      {props.children}
    </HeroTile1>
  );
};

export default HeroTile;
