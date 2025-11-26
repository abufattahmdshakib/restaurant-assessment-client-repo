"use client";

import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import DishCard from "./DishCard";


function SellerDishes() {
  const IMGBB_API_KEY = "077d9c3c5de79bf9f91643037ed35fc4";

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState(["All"]);
  const [dishesData, setDishesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [foodForm, setFoodForm] = useState({
    name: "",
    category: "",
    price: "",
    rating: "",
    img: null,
  });

  const [newCategory, setNewCategory] = useState("");

  // Fetch categories & dishes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const resCat = await fetch("http://localhost:5000/api/categories");
        const catData = await resCat.json();
        if (resCat.ok) setCategories(["All", ...catData.map(c => c.name)]);

        const resFood = await fetch("http://localhost:5000/api/foods");
        const foodData = await resFood.json();
        if (resFood.ok) setDishesData(foodData);
      } catch (err) {
        console.error("Network error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter & sort dishes
  let filteredDishes =
    selectedCategory === "All"
      ? [...dishesData]
      : dishesData.filter((dish) => dish.category === selectedCategory);

  filteredDishes.sort((a, b) => b.rating - a.rating);
  if (selectedCategory === "All") filteredDishes = filteredDishes.slice(0, 6);

  return (
    <div className="max-w-6xl mx-auto py-10 ">
      <div className="text-center mb-8 px-2">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#1F1F1F]">Our best Seller Dishes</h1>
        <p className="text-base sm:text-[21px] text-[#5C5C5C] max-w-3xl mx-auto mt-2">
          Our fresh garden salad is a light and refreshing option. <span className="hidden sm:block">It features a mix of crisp lettuce, juicy tomatoe all tossed in your choice of dressing.</span>
        </p>
      </div>

      <CategoryFilter
        categories={categories}
        setCategories={setCategories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        dishesData={dishesData}
        setDishesData={setDishesData}
        foodForm={foodForm}
        setFoodForm={setFoodForm}
        loading={loading}
        setLoading={setLoading}
        IMGBB_API_KEY={IMGBB_API_KEY}
        newCategory={newCategory}
        setNewCategory={setNewCategory}
      />

      {loading ? (
        <div className="text-center py-20 text-gray-500 text-lg">
          Loading dishes...
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 px-2 gap-3 sm:gap-8">
          {filteredDishes.length > 0 ? (
            filteredDishes.map((dish) => (
              <DishCard key={dish.id || dish._id} dish={dish} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-lg py-10">
              No dishes available right now. Please check back later or add some delicious dishes!
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SellerDishes;
