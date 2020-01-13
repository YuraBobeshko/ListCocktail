import React, { useState, useEffect } from "react";
import Card from "../Card/Card.js";
import "./ListCocktail.scss";

export default function ListCocktail(props) {
  const { loadDataListCocktail, listCocktail, listType } = props;

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

  console.log(props)

  return (
    <div>
      {listCocktail.map((cockyail, index) => {
        return (listType.find(type => type.title === cockyail.type).sort ?
          <div key={cockyail+index} className="list-cocktail">
            <p className="list-cocktail__heading">{cockyail.type}</p>
            <div className="aaa">
              {cockyail.drinks.map(drink => (
                <Card
                  id={drink.idDrink}
                  title={drink.strDrink}
                  img={drink.strDrinkThumb}
                />
              ))}
            </div>
          </div>
          : null
        );
      })}
    </div>
  );
}
