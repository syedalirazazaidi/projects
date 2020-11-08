import React from "react";
import "./main.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { getRandomMeal, getMealBYID, getMEalbySearch } from "./api";
import { Meal } from "./types/types";
interface mealing {
  meal: {};
}

export const Main: React.FC = () => {
  const [meal, setRandomMeal] = React.useState<Meal>();
  let fetchData = async () => {
    try {
      const meals: any = await getRandomMeal();
      setRandomMeal(meals);
    } catch (error) {
      alert("");
    }
  };
  React.useEffect(() => {
    // async function fetchData() {
    //   const meals: any = await getRandomMeal();
    //   setRandomMeal(meals);
    // }
    fetchData();
  }, []);

  //   if (!meal.length) return <div>loading...</div>;
  if (!meal) return null;
  console.log(meal.strMeal, "<<<<");

  //   const pp = meal.map((i) => i.strMeal);
  //   console.log(pp, "LL");
  //     //   console.log(meal[0].strCategory, "}}}}}}");
  //     return meal.map((op) => {
  //       console.log(op, "OPTIo");
  //       return (
  //         <ul>
  //           <li>{op.strCategory}</li>
  //         </ul>
  //       );
  //     });
  //   console.log(Mp, ":::::");

  //   let Meal = Object.values(meal).map(g);
  //   .map((obj) => {
  // return obj.strMeal;
  //   });
  //   console.log(meal[0].strMeal, "mealing");
  const randomDish: () => void = () => {
    fetchData();
  };
  const addFav: () => void = () => {
    alert("hello");
  };
  const { strMeal, strMealThumb } = meal;
  return (
    <div className="recepi_container">
      <div>
        <header>
          <input type="text" placeholder="search a meal" />

          <BiSearch
            onClick={(e) => alert("hi")}
            style={{
              marginLeft: 15,
              marginTop: 15,
              fontSize: "1.7rem",
              backgroundColor: "transparent",
              color: "#aaaa",
            }}
          />
        </header>
        <h3
          style={{ color: "gray", display: "flex", justifyContent: "center" }}
        >
          Favourite Meal
        </h3>
        <div className="fav-container">
          <div className="fav-meal">
            <ul>
              <li>
                <img
                  className="imp"
                  src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg/preview"
                  alt="meals"
                />
                <span style={{ marginLeft: 18 }}>Meal</span>
              </li>
              <li>
                <img
                  className="imp"
                  src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg/preview"
                  alt="meals"
                />
                <span style={{ marginLeft: 18 }}>Meal</span>
              </li>
              <li>
                <img
                  className="im"
                  src="https://www.themealdb.com/images/ingredients/Lime-Small.png"
                  alt="Lime"
                />
                <span style={{ marginLeft: 18 }}>Lime</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="meal-container">
          <div className="header">
            <span className="random" onClick={randomDish}>
              Random Recept
            </span>

            <div>
              <img
                src={strMealThumb}
                // src="https://www.themealdb.com/images/media/meals/tytyxu1515363282.jpg"
                alt="fageta"
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <h4 style={{ margin: 0 }}>{strMeal}</h4>
            <AiOutlineHeart className="icon-css" onClick={addFav} />
          </div>
        </div>
      </div>
    </div>
  );
};
