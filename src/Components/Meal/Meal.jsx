import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const Meal = ({ meal }) => {
  const { idMeal, strMeal, strCategory, strMealThumb } = meal;
  const navegate = useNavigate();
  const handleMealDetails = () => {
    navegate(`/meals/${idMeal}`);
  };
  return (
    <div>
      <div className="card bg-base-100 w-72 shadow-xl ">
        <figure>
          <img src={strMealThumb} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strMeal}</h2>
          <p className="text-left">{strCategory}</p>
          <div className="card-actions justify-start">
            <button onClick={handleMealDetails} className="btn btn-primary">
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Meal.propTypes = {
  meal: PropTypes.object.isRequired,
};
export default Meal;
