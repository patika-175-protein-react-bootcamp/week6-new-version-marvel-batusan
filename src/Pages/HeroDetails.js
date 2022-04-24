import React from "react";
import { useParams } from "react-router-dom";
import Details from "../Components/Details";

function HeroDetails() {
  const { id } = useParams();
  return <Details heroId={id} />;
}

export default HeroDetails;
