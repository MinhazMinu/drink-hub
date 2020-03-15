import React from "react";
import Cocktail from "./Cocktail";

const CocktaiilList = ({ cocktails, loading }) => {
  if (loading) {
    return <h2 className="sectionTitle">loading...</h2>;
  }
  if (cocktails.length < 1) {
    return <h2 className="sectionTitle">No cocktails</h2>;
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map(item => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktaiilList;
