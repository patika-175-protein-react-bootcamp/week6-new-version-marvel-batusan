import "./App.css";
import banner from "./assets/marvel-bg.svg";
import MarvelLogo from "./assets/marvel.svg";

import leftArrow from "./assets/l_arrow.png";
import rightArrow from "./assets/r_arrow.png";

import axios from "axios";
import { useEffect, useState } from "react";

import PageRouter from "./Routers/PageRouter";

import Header from "./Components/Header";
import Loader from "./Components/Loader";
import HeroList from "./Components/HeroList";
import Pagination from "./Components/Pagination";

function App() {
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [totalPage, setTotalPage] = useState(79);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!sessionStorage.getItem(`current Page: ${currentPage}`)) {
      getCharacters(true);
    } else {
      const sessionData = JSON.parse(
        sessionStorage.getItem(`current Page: ${currentPage}`)
      );
      //setCharacters(sessionData.results);
      //setTotalCharacterCount(sessionData.total);
      setLoading(false);
    }
  }, [offset]);

  function handleClick(e) {
    setOffset((e - 1) * 20);
    setCurrentPage(e);
  }

  const fetchData = async () => {
    const data = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?limit=20&offset=${offset}&apikey=8fe60df9043ca82bac87ba80098f1c1a`
    );
    return data;
  };

  function getCharacters(setSession) {
    fetchData()
      .then((res) => {
        //setCharacters(res.data.data.results);
        //setTotalCharacterCount(res.data.data.total);
        setLoading(false);
        if (setSession) setDataOnSession(res);
      })
      .catch(console.error);
  }

  function setDataOnSession(res) {
    sessionStorage.setItem(
      `current Page: ${currentPage}`,
      JSON.stringify(res.data.data)
    );
  }

  const setPage = (value) => {
    if (value.type === "next" && currentPage < totalPage) {
      setCurrentPage((x) => x + 1);
    } else if (value.type === "prev" && currentPage > 0) {
      setCurrentPage((x) => x - 1);
    } else if (value.type === "add") {
      setCurrentPage(value.number);
    }
  };

  function inRange(x, min, max) {
    return (x - min) * (x - max) <= 0;
  }

  return (
    <>
      <PageRouter />
    </>
  );
}

export default App;
