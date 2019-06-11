import { FETCH_HEROES, FETCH_HERO, FETCH_HERO_WIN_RATE } from "./action-types";
import opendotaAPI from "../apis/opendotaAPI";

export const fetchHeroes = () => async dispatch => {
  const response = await opendotaAPI.get("/heroStats");
  dispatch({ type: FETCH_HEROES, payload: response.data });
};

export const fetchHero = id => {
  return {
    type: FETCH_HERO,
    payload: id
  };
};

export const fetchHeroWinRate = id => {
  return {
    type: FETCH_HERO_WIN_RATE,
    payload: id
  };
};
