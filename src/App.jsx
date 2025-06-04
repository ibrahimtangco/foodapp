import { useEffect, useState } from "react";
import Search from "./components/Search";
import Header from "./components/Header";
import Foods from "./components/Foods";
import useDebounce from "./hooks/useDebounce";
import FoodRecipeModal from "./components/modals/FoodRecipeModal";

function App() {
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

  const [query, setQuery] = useState("");
  const [foods, setFoods] = useState([]);
  const [apiError, setApiError] = useState("");
  const debounceQuery = useDebounce(query || "food");
  const [showModal, setShowModal] = useState(false);
  const [selectedFoodId, setSelectedFoodId] = useState(null);
  const [foodRecipe, setFoodRecipe] = useState({});
  // fetch food list
  useEffect(() => {
    if (!debounceQuery) {
      return;
    }

    const url = "https://api.spoonacular.com/recipes/complexSearch";
    const resultNum = 10;

    const fetchFood = async () => {
      try {
        const response = await fetch(
          `${url}?apiKey=${apiKey}&number=${resultNum}&query=${debounceQuery}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch data");
        }

        setFoods(data.results || []); // Use data.results, fallback to empty array
        setApiError(""); // Clear previous errors on success
      } catch (error) {
        setApiError(error.message);
        setFoods([]); // Clear foods on error (optional)
      }
    };
    fetchFood();
  }, [debounceQuery]);

  // fetch food recipe
  const fetchFoodRecipe = async (id) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
      );

      const data = await response.json();

      // Handle non-2xx status codes
      if (!response.ok) {
        throw new Error(error.message || "Failed to fetch recipe");
      }

      setFoodRecipe(data);
    } catch (error) {
      console.log(error.message); // Clean error message
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 bg-gray-50/10">
        <Search query={query} setQuery={setQuery} />
        <div className="mt-6">
          {!apiError ? (
            foods.length > 0 ? (
              <Foods
                foods={foods}
                query={query}
                setSelectedFoodId={setSelectedFoodId}
                setShowModal={setShowModal}
                fetchFoodRecipe={fetchFoodRecipe}
              />
            ) : (
              <p className="text-gray-500 text-center">No result found.</p>
            )
          ) : (
            <p className="text-gray-500 text-center">{apiError}</p>
          )}
        </div>

        {/* food recipe modal */}
        {showModal && selectedFoodId && (
          <FoodRecipeModal
            foodId={selectedFoodId}
            setShowModal={setShowModal}
            foodRecipe={foodRecipe}
            setFoodRecipe={setFoodRecipe}
          />
        )}
        {/* <Loading /> */}
      </div>
    </>
  );
}

export default App;
