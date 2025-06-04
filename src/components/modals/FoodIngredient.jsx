import React from "react";

function FoodIngredient({ ingredient }) {
  return (
    <div className="p-2 rounded shadow border border-gray-200">
      <span className="">
        {ingredient.name.charAt(0).toUpperCase() + ingredient.name.substring(1)}{" "}
        {`${ingredient.measures.metric.amount} ${ingredient.measures.metric.unitShort}`}
      </span>
    </div>
  );
}

export default FoodIngredient;
