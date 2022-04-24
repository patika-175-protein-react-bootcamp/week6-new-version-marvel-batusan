import axios from "axios";

export const baseURL = "https://gateway.marvel.com:443";
export default axios.create({baseURL});

export const URL = {
  characters: `/v1/public/characters`,
}