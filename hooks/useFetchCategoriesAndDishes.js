import { useState, useEffect } from "react";

export function useFetchCategoriesAndDishes() {
  const [categories, setCategories] = useState([]);
  const [dishesData, setDishesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const resCat = await fetch("https://restaurant-assessment-server.vercel.app/api/categories");
        const catData = await resCat.json();
        if (resCat.ok) setCategories(["All", ...catData.map(c => c.name)]);

        const resFood = await fetch("https://restaurant-assessment-server.vercel.app/api/foods");
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


  return { categories, setCategories, dishesData, setDishesData, loading, setLoading };
}
