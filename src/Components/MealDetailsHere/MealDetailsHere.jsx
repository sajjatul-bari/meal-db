import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const MealDetailsHere = ({ mealdata }) => {
  const { idMeal, strMeal, strArea, strInstructions } = mealdata;

  const navegate = useNavigate();
  const handleGoBack = () => {
    navegate(-1);
  };
  return (
    <div className="flex justify-center items-center w-full my-10 ">
      <div className="card bg-green-900 text-center text-white w-2/3">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">{idMeal}</h2>
          <h3 className="text-center text-2xl font-bold">{strMeal}</h3>
          <h3 className="text-center text-xl font-semibold">{strArea}</h3>
          <p>{strInstructions}</p>
          <div className="card-actions justify-center">
            <button onClick={handleGoBack} className="btn">
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
MealDetailsHere.propTypes = {
  mealdata: PropTypes.object.isRequired,
};
export default MealDetailsHere;
