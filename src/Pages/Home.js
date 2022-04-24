import React, { useEffect, useState } from "react";

import Header from "../Components/Header";
import HeroList from "../Components/HeroList";
import LanguageChanger from "../Components/LanguageChanger";
import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";
import Searchbar from "../Components/Searchbar";
import { getCharacters } from "../Services/characterService";

function Home() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  const [limit, setLimit] = useState(20);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getData(currentPage, limit);
  }, [currentPage]);

  const getData = async (currentPage, limit) => {
    await getCharacters(currentPage, limit).then((res) => {
      setCharacters(res.results);
      setLoading(false);
      setTotalPage(Math.ceil(res.total / res.limit));
    });
  };

  const setPage = (value) => {
    if (value.type === "next" && currentPage < totalPage) {
      setCurrentPage((x) => x + 1);
    } else if (value.type === "prev" && currentPage > 0) {
      setCurrentPage((x) => x - 1);
    } else if (value.type === "add") {
      setCurrentPage(value.number);
    }
  };

  return (
    <div>
      <div id="search-side" className="m-auto">
        <Searchbar />
        <LanguageChanger />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="wrapper">
          <HeroList characters={characters} />
          <div className="pagination m-auto">
            <Pagination
              total={totalPage}
              currentPage={currentPage}
              click={setPage}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
