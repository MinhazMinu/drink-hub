import React from "react";
import { useParams } from "react-router-dom";

const SingleCocktail = () => {
  const { id } = useParams();

  return <div>SingleCocktail page id : {id}</div>;
};

export default SingleCocktail;
