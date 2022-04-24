import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getCharacterDetail } from "../Services/characterService";
import Loader from "./Loader";
import leftArrow from "../assets/left_arrow.png";
import { useNavigate } from "react-router-dom";

function Details({ heroId }) {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState();
  const [stories, setStories] = useState();
  const [series, setSeries] = useState();

  const navigator = useNavigate();

  const { t } = useTranslation();

  useEffect(() => {
    getDetails().then((res) => {
      setCharacter(res.results[0]);
      setLoading(false);
      setStories(res.results[0].stories.items);
      setSeries(res.results[0].series.items);
    });
  }, []);

  const getDetails = async () => {
    return await getCharacterDetail(heroId);
  };

  return (
    <div className="detailWrapper m-auto">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="hero-detail-profile">
            <img
              className="hero-detail-img"
              src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
              alt={`${character.name}`}
            />
          </div>
          <div className="hero-detail hero-font">
            <div id="hero-detail-name">
              <img
                src={leftArrow}
                alt="back button"
                className="hero-detail-button "
                onClick={() => {
                  navigator("/");
                }}
              />{" "}
              {character.name} <hr />
            </div>
            <div id="hero-detail-description">{character.description}</div>
            <div id="hero-detail-double">
              <div id="hero-detail-stories">
                {t("stories")} ({character.stories?.available})
                <div>
                  {stories?.map((story, i) => (
                    <div key={`${story.name}${i}`}>{story.name}</div>
                  ))}
                </div>
              </div>
              <div id="hero-detail-series">
                {t("series")} ({character.series?.available})
                <div>
                  {series?.map((serie, i) => (
                    <div key={`${serie.name}${i}`}>{serie.name}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Details;
