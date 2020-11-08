import { Meal } from "./types/types";

export const getRandomMeal = async (): Promise<Meal[]> => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);

  //   let meals: Meal[] = await res.json();
  let meals = await res.json().then((res) => res.meals[0]);
  //   console.log(meals.strMeal);

  //   const randomMeal = meals.meals.map((i: Meal) => {
  //     return [
  //       {
  //         strMeal: i.strMeal,
  //         strMealThumb: i.strMealThumb,
  //         strCategory: i.strCategory,
  //       },
  //     ];
  //   });
  return meals;
  //   return [
  //     {
  //       strMeal: meals.meals[0].strMeal,
  //       strMealThumb: meals[0].strMealThumb,
  //       strCategory: meals[0].strCategory,
  //     },
  //   ];
  //   console.log(results, "RESULT");

  //   const meal: Meal[] = results.map((queObj: Meal) => {
  //     console.log(queObj);
  //     return {
  //       strMeal: queObj.strMeal,
  //       strCategory: queObj.strCategory,
  //     };
  //   });
  //   return results;
  //   let randommeals: any = meals;
  //   console.log(randommeals, "kkk");

  //   return randommeals;
  //   console.log(meals, ":::");
  //   let randomMeal: any = meals.map((queObj: any) => {
  //     console.log(queObj, "lllllllllllllll");
  //     // return {
  //     //     oo:queObj.
  //     // }
  //   });
  //   return randomMeal;
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
