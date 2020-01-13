import React, { useState, useEffect } from "react";
import Card from "../Card/Card.js";
import "./ListCocktail.scss";

export default function ListCocktail(props) {
  const { loadDataListCocktail, listCocktail, listType, error } = props;

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function processArray(listType) {
      setLoaded(true);
      listType.forEach(async type => {
        await loadDataListCocktail(type.title);
      });
    }

    if (listType && !listCocktail.length && !loaded) {
      processArray(listType);
    }
  }, [listCocktail.length, listType, loadDataListCocktail, loaded]);

  if (error) {
    return <h3>Пожалуйста перезагрузите страницу</h3>;
  }
  return (
    <div>
      {listCocktail.map((cockyail, index) => {
        return listType.find(type => type.title === cockyail.type).sort ? (
          <div key={cockyail.id} className="list-cocktail">
            <p className="list-cocktail__heading">{cockyail.type}</p>
            <div className="list-cocktail__card">
              {cockyail.drinks.map(drink => (
                <Card
                  key={drink.idDrink}
                  title={drink.strDrink}
                  img={drink.strDrinkThumb}
                />
              ))}
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
}
