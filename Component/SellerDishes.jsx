"use client";

import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import DishCard from "./DishCard";
import { useFetchCategoriesAndDishes } from "../hooks/useFetchCategoriesAndDishes";

function SellerDishes() {
  const IMGBB_API_KEY = "077d9c3c5de79bf9f91643037ed35fc4";

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [foodForm, setFoodForm] = useState({
    name: "",
    category: "",
    price: "",
    rating: "",
    img: null,
  });

  const [newCategory, setNewCategory] = useState("");
  const [showAddCategory, setShowAddCategory] = useState(false);

  // fetch categories & dishes
  const {
    categories,
    setCategories,
    dishesData,
    setDishesData,
    loading,
    setLoading
  } = useFetchCategoriesAndDishes();

  // Always include "All" at the start
  const categoriesWithAll = ["All", ...categories];

  // Filter & sort dishes
  const filteredDishes =
    selectedCategory === "All"
      ? [...dishesData]
      : dishesData.filter((dish) => dish.category === selectedCategory);

  filteredDishes.sort((a, b) => b.rating - a.rating);

  return (
    <div className="max-w-6xl mx-auto py-10 mt-6 sm:mt-12">
      {/* Static Section */}
      <div className="text-center mb-8 px-2">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#1F1F1F]">Our best Seller Dishes</h1>
        <p className="text-base sm:text-[21px] text-[#5C5C5C] max-w-3xl mx-auto mt-2">
          Our fresh garden salad is a light and refreshing option. 
          <span className="hidden sm:block">
            It features a mix of crisp lettuce, juicy tomatoe all tossed in your choice of dressing.
          </span>
        </p>
      </div>

      {/* Category Filter */}
      <CategoryFilter
        categories={categoriesWithAll} 
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
        showAddCategory={showAddCategory}
        setShowAddCategory={setShowAddCategory}
      />

      {/* Dynamic Section */}
      <div className="mt-6">
        {loading ? (
          <div className="text-center py-20 text-gray-500 text-lg">
            Loading dishes...
          </div>
        ) : filteredDishes.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-2 gap-x-3 gap-y-1 sm:gap-x-8 sm:gap-y-0">
            {filteredDishes.map((dish) => (
              <DishCard key={dish.id || dish._id} dish={dish} />
            ))}
          </div>
        ) : (
          <div className="col-span-full text-center text-gray-500 text-lg py-10">
            No dishes available right now. Please check back later or add some delicious dishes!
          </div>
        )}
      </div>
    </div>
  );
}

export default SellerDishes;
