"use client";
import React from "react";

export default function AddCategoryForm({
  newCategory,
  setNewCategory,
  categories,
  setCategories,
  setShowAddCategory,
}) {
  const handleAddCategory = async (e) => {
    e.preventDefault();
    const trimmed = newCategory.trim();
    if (!trimmed) return;

    if (categories.includes(trimmed)) {
      alert("Category already exists!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmed }),
      });

      const data = await res.json();
      if (res.ok) {
        setCategories([...categories, data.category.name]);
        setNewCategory("");
        setShowAddCategory(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/80  flex justify-center items-center z-50"
      onClick={() => setShowAddCategory(false)}
    >
      <div
        className=" bg-white/20 border border-white/40 px-8 py-4 rounded-lg shadow-lg w-60 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="font-[400] text-white text-lg text-center mb-5">Add Category</h4>

        <form onSubmit={handleAddCategory} className="flex flex-col gap-3">
          <input
            type="text"
            required
            placeholder="Name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="w-full px-3 py-1 border rounded-full text-sm text-white placeholder:text-gray-200"
          />
          <button
            type="submit"
            className="w-full py-1 bg-[#F03328] text-white rounded-full text-sm"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
