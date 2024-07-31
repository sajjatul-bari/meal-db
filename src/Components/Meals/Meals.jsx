import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
  const mealsA = useLoaderData();
  const meals = mealsA.meals;
  console.log(meals);

  return (
    <div className="text-center my-10">
      <h1 className="text-4xl font-bold mb-10">Total Meals :{meals.length}</h1>
      <div className="grid grid-cols-4">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Meals;
