import React, { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";

import CocktaiilList from "../components/CocktaiilList";
const Home = () => {
  const [loading, setloading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    setloading(true);
    async function getDrinks() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const newCocktail = drinks.map(item => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcholic,
              strGlass
            } = item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcholic,
              glass: strGlass
            };
          });
          setCocktails(newCocktail);
        } else {
          setCocktails([]);
        }
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    }
    getDrinks();
  }, [searchTerm]);

  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktaiilList cocktails={cocktails} loading={loading} />
    </main>
  );
};

export default Home;
