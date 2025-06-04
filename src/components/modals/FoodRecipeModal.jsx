import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faClock,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import FoodIngredient from "./FoodIngredient";

function FoodRecipeModal({ setShowModal, foodRecipe, setFoodRecipe }) {
  const isLoading = !foodRecipe || Object.keys(foodRecipe).length === 0;
  const [imgIsLoad, setImageIsLoad] = useState(false);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    // Cleanup when modal unmounts
    return () => {
      document.body.classList.add("overflow-auto");
    };
  }, []);

  return (
    <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 bg-black/50 h-screen">
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm p-4">
          {isLoading ? (
            <div className="flex items-center justify-center h-40">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-start justify-between w-full">
                <h2 className="text-xl font-semibold">{foodRecipe.title}</h2>
                <FontAwesomeIcon
                  onClick={() => {
                    setFoodRecipe({});
                    setShowModal(false);
                  }}
                  icon={faXmark}
                  className="text-2xl font-thin h-full"
                />
              </div>
              <hr className="border-gray-400 my-4" />
              <div>
                {!imgIsLoad && (
                  <img
                    src="/placeholder-image.jpg"
                    alt="Food Image"
                    className="rounded"
                    loading="lazy"
                  />
                )}
                <img
                  src={foodRecipe.image}
                  alt="Food Image"
                  className="rounded w-full object-cover"
                  loading="lazy"
                  onLoad={() => setImageIsLoad(true)}
                />
                <div className="flex items-center justify-between p-2">
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-xl text-green-800"
                    />
                    <span>{foodRecipe.readyInMinutes || 0} mins.</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faUtensils}
                      className="text-xl text-green-800"
                    />
                    {foodRecipe.servings || 0} servings
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-medium mt-4 mb-2">Ingredients</h3>
              <ul className="space-y-2">
                {foodRecipe.extendedIngredients?.map((ingredient, index) => (
                  <FoodIngredient
                    key={ingredient.id || index}
                    ingredient={ingredient}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodRecipeModal;
