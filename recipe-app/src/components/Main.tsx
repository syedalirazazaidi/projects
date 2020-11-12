import React from "react";
import "./main.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { getRandomMeal, getMealBYID, getMEalbySearch } from "./api";
import { Meal } from "./types/types";
import HorizontalScroll from "react-scroll-horizontal";
interface mealing {
  meal: {};
}
interface IProps_Square {
  // onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClick: any;
  onRemove: (mItem: string) => void;
}

export const Main: React.FC = () => {
  const [meal, setRandomMeal] = React.useState<Meal>();
  const [search, setSearch] = React.useState("");
  const [getLocal, getstateLocal] = React.useState([]);

  let fetchData = async () => {
    try {
      const meals: any = await getRandomMeal();
      setRandomMeal(meals);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  if (!meal) return <h2>Loading...</h2>;
  const randomDish: () => void = () => {
    fetchData();
  };
  const addFav = (e: any) => {
    e.target.classList.toggle("active");
    const mealDs: any = getLS();
    getstateLocal(getLS);
    localStorage.setItem(
      "mealItem",
      JSON.stringify(Object.values([...mealDs, meal]))
    );
  };

  const onRemove = (mItem: string) => {
    console.log(mItem, "DOO");
    localStorage.setItem(
      "mealItem",
      JSON.stringify(
        getLocal.filter((id: any) => {
          console.log(id, "kk");
          return id.idMeal !== mItem;
        })
      )
    );
    const oo: [] = getLS();
    getstateLocal(oo);
  };

  function getLS() {
    const mealing = window.localStorage.getItem("mealItem");
    return mealing !== null ? JSON.parse(mealing) : [];
  }
  const aSear: any = [];
  const handleSearch = (e: any) => {
    console.log(e.target.value);
    aSear.push(e.target.value.toLowerCase());
  };
  const onSearch = () => {
    console.log(aSear, "PPPPP");
    setSearch(aSear);
  };
  console.log(search, "SEARCH");
  const { strMeal, strMealThumb } = meal;
  return (
    <div className="recepi_container">
      <div>
        <header>
          <input
            type="text"
            placeholder="search a meal"
            onChange={handleSearch}
          />

          <BiSearch
            onClick={onSearch}
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
        {getLocal && getLocal.length !== 0 ? (
          getLocal.map((mIDs: any) => (
            <div className="fav-container">
              <div className="fav-meal">
                <ul key={mIDs.mealID}>
                  <li>
                    <img
                      onClick={() => onRemove(mIDs.idMeal)}
                      className="imp"
                      src={mIDs.strMealThumb}
                      alt={mIDs.strMeal}
                    />
                    <span>{mIDs.strMeal}</span>
                  </li>
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p
            style={{
              display: "flex",
              color: "green",
              justifyContent: "center",
            }}
          >
            <b>no favorite selected</b>
          </p>
        )}
        <div className="meal-container">
          <div className="header">
            <div>
              <img src={strMealThumb} alt={strMeal} />
            </div>
          </div>
          <span className="random" onClick={randomDish}>
            <p
              style={{
                border: "2px solid black",
                cursor: "pointer",
                color: "blue",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              {" "}
              For Random Food
            </p>
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <h4 style={{ margin: 0 }}>{strMeal}</h4>
            <button>
              <AiOutlineHeart className="icon-css" onClick={addFav} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
