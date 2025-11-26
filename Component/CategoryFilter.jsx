import React, { useState, useEffect, useRef } from "react";
import AddFoodForm from "./AddFoodForm";
import AddCategoryForm from "./AddCategoryForm";

export default function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
  setDishesData,
  dishesData,
  foodForm,
  setFoodForm,
  loading,
  setLoading,
  IMGBB_API_KEY,
  newCategory,
  setNewCategory,
  setCategories,
}) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const foodRef = useRef();
  const categoryRef = useRef();

  const toggleDropdown = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (foodRef.current && !foodRef.current.contains(e.target) && openDropdown === "food") {
        setOpenDropdown(null);
      }
      if (categoryRef.current && !categoryRef.current.contains(e.target) && openDropdown === "category") {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  // Ensure "All" button is always first
  const categoriesWithAll = ["All", ...categories.filter(cat => cat !== "All")];

  return (
    <div className="sm:my-12 my-8 relative flex flex-wrap justify-between px-2 items-center gap-4">
      {/* Categories */}
      <div className="flex flex-wrap gap-2 sm:gap-8 md:gap-4">
        {categoriesWithAll.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 text-[12px] md:text-[14px] sm:px-4 sm:py-2 sm:text-[18px] rounded-full border ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "bg-white border-black text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Add Buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-8 md:gap-4">
        {/* Add Food */}
        <div className="relative" ref={foodRef}>
          <button
            onClick={() => toggleDropdown("food")}
            className="px-3 py-1 text-[12px] md:text-[14px] sm:px-4 sm:py-2 sm:text-[18px] rounded-full bg-black text-white"
          >
            Add Food
          </button>

          {openDropdown === "food" && (
            <AddFoodForm
              categories={categories}
              foodForm={foodForm}
              setFoodForm={setFoodForm}
              setDishesData={setDishesData}
              dishesData={dishesData}
              setShowAddFood={() => setOpenDropdown(null)}
              loading={loading}
              setLoading={setLoading}
              IMGBB_API_KEY={IMGBB_API_KEY}
            />
          )}
        </div>

        {/* Add Category */}
        <div className="relative" ref={categoryRef}>
          <button
            onClick={() => toggleDropdown("category")}
            className="px-3 py-1 text-[12px] md:text-[14px] sm:px-4 sm:py-2 sm:text-[18px] rounded-full bg-black text-white"
          >
            Add Category
          </button>

          {openDropdown === "category" && (
            <AddCategoryForm
              newCategory={newCategory}
              setNewCategory={setNewCategory}
              setCategories={setCategories}
              categories={categories}
              setShowAddCategory={() => setOpenDropdown(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
