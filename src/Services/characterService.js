import axios, { URL } from "../Constants/axios";

const API_KEY = process.env.REACT_APP_MARVEL_API;

export const getCharacters = async (currentPage, characterCount) => {
  try {
    const offset = (currentPage - 1) * 20;
    const response = await axios.get(
      URL.characters +
        `?limit=${characterCount}&offset=${offset}&apikey=${API_KEY}`
    );

    if (response.status === 200) {
      return response.data.data;
    } else {
      return {
        error: "Data gelmedi",
      };
    }
  } catch (err) {
    console.log(err);
  }
};

export const getCharacterStartsWith = async (input) => {
  try {
    const response = await axios.get(
      URL.characters + `?nameStartsWith=${input}&limit=5&apikey=${API_KEY}`
    );
    if (response.status === 200) {
      return response.data.data;
    } else {
      return { error: 404 };
    }
  } catch (err) {
    console.log(err);
  }
};

export const getCharacterDetail = async (heroId) => {
  try {
    const response = await axios.get(
      URL.characters + `/${heroId}?apikey=${API_KEY}`
    );

    if (response.status === 200) {
      return response.data.data;
    } else {
      return { error: 404 };
    }
  } catch (err) {
    console.log(err);
  }
};
