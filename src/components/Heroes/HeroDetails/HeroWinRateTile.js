import React from "react";

import HeroTile from "./HeroTile";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HeroWinRate = props => {
  return (
    <HeroTile
      style={{ marginTop: "20px", padding: "20px" }}
      height={"200px"}
      className="col-lg-4 offset-lg-1 col-md-6 col-6"
    >
      <div style={{ width: "100px", marginBottom: "20px" }}>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: props.heroColor,
            textColor: props.heroColor
          })}
          value={props.heroWinRate}
          text={`${props.heroWinRate}%`}
        />
      </div>

      <span>Win Rate on Pro Matches</span>
    </HeroTile>
  );
};

export default HeroWinRate;
