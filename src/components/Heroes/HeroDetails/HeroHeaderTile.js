import React from "react";
import HeroTile from "./HeroTile";

const HeroHeader = props => {
  return (
    <HeroTile
      style={{ marginTop: "20px" }}
      height={"200px"}
      className="col-lg-7 col-md-12 col-sm-12"
    >
      <div className="row" style={{ padding: "10px" }}>
        <div className="col-md-6 col-6">{props.heroImage}</div>
        <div className="col-md-6 col-6">
          <span style={{ display: "block", fontSize: "0.9rem" }}>
            Attack Range: {props.heroAttackRange} units
          </span>
          <span style={{ display: "block", fontSize: "0.9rem" }}>
            Move Speed: {props.heroMoveSpeed} ms
          </span>
          <span style={{ display: "block", fontSize: "0.9rem" }}>
            Attack Rate: {props.heroAttackRate}
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-8 col-sm-8 col-8">
          <span style={{ fontSize: "1.5rem", display: "block" }}>
            {props.heroName}
          </span>
          {props.heroRoles.map(role => (
            <span style={{ fontSize: "0.75rem", marginRight: "5px" }}>
              {role}{" "}
            </span>
          ))}
        </div>
        <div
          className="col-md-6 col-lg-4 col-sm-4 col-4"
          style={{ fontSize: "0.75rem" }}
        >
          <span style={{ color: "red", display: "block" }}>
            STR: {props.heroBaseStr} + {props.heroStrGain}
          </span>
          <span
            style={{
              color: "green",
              display: "block"
            }}
          >
            AGI: {props.heroBaseAgi} + {props.heroAgiGain}
          </span>
          <span style={{ color: "blue", display: "block" }}>
            INT: {props.heroBaseInt} + {props.heroIntGain}
          </span>
        </div>
      </div>
    </HeroTile>
  );
};

export default HeroHeader;
