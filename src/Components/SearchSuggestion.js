import React from "react";
import { useNavigate } from "react-router-dom";

function SearchSuggestion({ suggestions }) {
  const navigate = useNavigate();

  const redirectDetail = (_id) => {
    navigate(`/details/${_id}`);
  };

  return (
    <ul className="suggestion-box">
      {suggestions.map((suggest) => {
        return (
          <li
            className="suggestion"
            onClick={(e) => {
              redirectDetail(suggest.id);
            }}
          >
            Karakter Adı:{suggest.name}
          </li>
        );
      })}
    </ul>
  );
}

export default SearchSuggestion;
