"use client";

import React from "react";

export default function AddFoodForm({
  categories,
  foodForm,
  setFoodForm,
  setDishesData,
  setShowAddFood,
  loading,
  setLoading,
  IMGBB_API_KEY,
}) {
  const [categoryOpen, setCategoryOpen] = React.useState(false);

  // Reset the form
  const resetForm = () =>
    setFoodForm({ name: "", category: "", price: "", rating: "", img: null });

  const handleAddFood = async (e) => {
    e.preventDefault();
    if (
      !foodForm.name ||
      !foodForm.category ||
      !foodForm.price ||
      !foodForm.rating ||
      !foodForm.img
    ) {
      alert("Please fill in all fields!");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", foodForm.img);

      const imgbbRes = await fetch(
        `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const imgbbData = await imgbbRes.json();
      if (!imgbbData.success) throw new Error("Image upload failed");

      const imgURL = imgbbData.data.url;

      const foodData = {
        name: foodForm.name,
        category: foodForm.category,
        price: Number(foodForm.price),
        rating: Number(foodForm.rating),
        img: imgURL,
      };

      const res = await fetch("https://restaurant-assessment-server.vercel.app/api/foods", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(foodData),
      });

      const data = await res.json();
      if (res.ok) {
        setDishesData((prev) => [...prev, data]);
        resetForm();
        setShowAddFood(false);
      } else {
        alert("Server error: " + data.message);
      }
    } catch (err) {
      alert("Image upload error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
      onClick={() => {
        setShowAddFood(false);
        resetForm(); 
      }}
    >
      <div
        className="bg-white/20 border border-white/40 px-6 py-6 rounded-lg shadow-lg w-80 relative transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="font-[400] text-white text-lg text-center mb-4">Add Food</h4>

        <form onSubmit={handleAddFood} className="flex flex-col gap-3 transition-all duration-300">
          {/* Food Name */}
          <input
            type="text"
            placeholder="Food Name"
            value={foodForm.name || ""}
            onChange={(e) => setFoodForm({ ...foodForm, name: e.target.value })}
            className="w-full px-3 py-2 border border-white/40 bg-transparent rounded-full text-sm text-white placeholder:text-gray-200 transition-all duration-300"
          />

          {/* Category Selector */}
          <div className="relative flex flex-col gap-3 transition-all duration-300">
            <button
              type="button"
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="w-full px-3 py-2 border border-white/40 bg-transparent rounded-full text-sm text-white text-left flex justify-between items-center"
            >
              {foodForm.category || "Select Category"}
            </button>

            <div
              className={`flex flex-col my-[-6px] gap-1 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out`}
              style={{
                maxHeight: categoryOpen ? "300px" : "0px",
                opacity: categoryOpen ? 1 : 0,
              }}
            >
              {categories
                .filter((c) => c !== "All")
                .map((cat, i) => (
                  <p
                    key={i}
                    onClick={() => {
                      setFoodForm({ ...foodForm, category: cat });
                      setCategoryOpen(false);
                    }}
                    className="px-3 text-sm text-white cursor-pointer hover:bg-white/30 rounded transition-colors duration-200"
                  >
                    {cat}
                  </p>
                ))}
            </div>
          </div>

          {/* Price */}
          <input
            type="number"
            placeholder="Price"
            value={foodForm.price || ""}
            onChange={(e) => setFoodForm({ ...foodForm, price: e.target.value })}
            className="w-full px-3 py-2 border border-white/40 bg-transparent rounded-full text-sm text-white placeholder:text-gray-200 transition-all duration-300"
          />

          {/* Rating */}
          <input
            type="number"
            placeholder="Rating (0-5)"
            min="0"
            max="5"
            step="0.1"
            value={foodForm.rating || ""}
            onChange={(e) => setFoodForm({ ...foodForm, rating: e.target.value })}
            className="w-full px-3 py-2 border border-white/40 bg-transparent rounded-full text-sm text-white placeholder:text-gray-200 transition-all duration-300"
          />

          {/* Image */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFoodForm({ ...foodForm, img: e.target.files[0] })}
            className="w-full px-3 py-2 border border-white/40 bg-transparent rounded-full text-sm text-white transition-all duration-300"
          />

          {/* Preview */}
          {foodForm.img && (
            <img
              src={URL.createObjectURL(foodForm.img)}
              alt="Preview"
              className="w-24 h-24 object-cover rounded mt-1 p-1 border border-white/40 transition-all duration-300"
            />
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-[#F03328] text-white rounded-full text-sm font-medium transition-all duration-300"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}
