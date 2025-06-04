import React from "react";
import FoodItem from "./FoodItem";

function Foods({
  foods,
  query,
  setSelectedFoodId,
  setShowModal,
  fetchFoodRecipe,
}) {
  return (
    <section>
      <h3 className="text-gray-500 mb-2 text-sm">
        {query ? <span>Search result for: {query}</span> : "Random foods"}
      </h3>
      <div className="grid gap-2 grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {/* food card */}
        {foods.map((food) => (
          <FoodItem
            key={food.id}
            food={food}
            setSelectedFoodId={setSelectedFoodId}
            setShowModal={setShowModal}
            fetchFoodRecipe={fetchFoodRecipe}
          />
        ))}
      </div>
    </section>
  );
}

export default Foods;
