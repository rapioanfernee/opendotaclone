import {
  FETCH_HEROES,
  FETCH_HERO,
  FETCH_HERO_WIN_RATE
} from "../actions/action-types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_HEROES: {
      const sortedHeroes = action.payload.sort((a, b) =>
        a.localized_name > b.localized_name ? 1 : -1
      );

      return {
        ...state,
        heroes: sortedHeroes
      };
    }

    case FETCH_HERO: {
      if (state.heroes) {
        let selectedHero;
        if (action.payload !== null) {
          selectedHero = state.heroes.find(
            hero => hero.id.toString() === action.payload.toString()
          );
        }
        return {
          ...state,
          selectedHero
        };
      }
      return {
        ...state,
        selectedHero: null
      };
    }

    case FETCH_HERO_WIN_RATE: {
      console.log(state);
    }

    default: {
      return state;
    }
  }
};
