import React from "react";

function FoodItem({ food, setSelectedFoodId, setShowModal, fetchFoodRecipe }) {
  return (
    <div
      onClick={() => {
        setSelectedFoodId(food.id);
        setShowModal(true);
        fetchFoodRecipe(food.id);
      }}
      className="border border-gray-200 shadow-md p-4 rounded-lg bg-white flex flex-col gap-4"
    >
      <img src={food.image} alt="" className="rounded-md" />
      <h2 className="font-medium">{food.title}</h2>
    </div>
  );
}

export default FoodItem;
