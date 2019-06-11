import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchHero, fetchHeroes } from "../../actions";

import HeroList from "./HeroList/HeroList";
import HeroDetails from "./HeroDetails/HeroDetails";

class HeroContainer extends Component {
  componentDidMount() {
    this.props.fetchHeroes();
  }
  componentDidUpdate(prevProps, prevState) {}

  onHeroClick = id => {
    this.props.fetchHero(id);
  };

  render() {
    if (this.props.heroes) {
      const { heroes, heroSelected } = this.props;

      return (
        <div className="container">
          <div
            style={{
              backgroundColor: "rgb(240,240,240)",
              padding: "0px 20px"
            }}
            className="row"
          >
            <HeroDetails
              heroSelected={heroSelected}
              className="col-lg-8 col-md-7 col-12"
            />
            <HeroList
              style={{
                height: "96vh",
                width: "100%",
                margin: "2vh 0 2vh 0"
              }}
              className="col-lg-4 col-md-5 offset-4 col-8"
              onHeroClick={id => {
                this.onHeroClick(id);
              }}
              heroes={heroes}
            />
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    heroes: state.heroes.heroes,
    heroSelected: state.heroes.selectedHero
  };
};

export default connect(
  mapStateToProps,
  { fetchHero, fetchHeroes }
)(HeroContainer);
