import { useLoaderData } from "react-router-dom";
import MealDetailsHere from "../MealDetailsHere/MealDetailsHere";

const MealDetails = () => {
  const mealD = useLoaderData();

  const mealsDetails = mealD.meals;

  return (
    <div>
      {mealsDetails.map((mealdata, idx) => (
        <MealDetailsHere key={idx} mealdata={mealdata}></MealDetailsHere>
      ))}
    </div>
  );
};

export default MealDetails;
