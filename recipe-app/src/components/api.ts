import { Meal } from "./types/types";

export const getRandomMeal = async (): Promise<Meal[]> => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);

  let meals = await res.json().then((res) => res.meals[0]);

  return meals;
};
export const getMealBYID = async (id: number): Promise<void> => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=` + id
  );
  let { meals } = await res.json();
  console.log(meals, "MAELING  ");
};
export const getMEalbySearch = async (meal: string) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=` + meal
  );
  let { meals } = await res.json();
  console.log(meals, "search");
};
