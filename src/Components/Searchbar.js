import React, { useState } from "react";
import { getCharacterStartsWith } from "../Services/characterService";
import SearchSuggestion from "./SearchSuggestion";
import { useTranslation } from "react-i18next";

function Searchbar() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { t } = useTranslation();

  const onChange = (e) => {
    const userInput = e.target.value;
    setInput(e.target.value);
    getSuggestion(userInput);
  };

  const getSuggestion = async (input) => {
    await getCharacterStartsWith(input).then((res) => {
      setSuggestions(res.results);
    });
  };

  return (
    <div id="search">
      <label className="hero-font">Karakter Ara</label>
      <input
        name="hero-search"
        className="hero-search"
        type="text"
        value={input}
        onChange={onChange}
        placeholder={t("search")}
        autoComplete="off"
      />
      {input && <SearchSuggestion suggestions={suggestions} />}
    </div>
  );
}

export default Searchbar;
