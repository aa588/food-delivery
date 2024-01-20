import React from "react";
import { categories, mealData } from "../data/data";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import { useState } from "react";

const Meal = () => {
  const [categories, setCategories] = React.useState(mealData);

  function filterCategories(string) {
    if (string !== "All") {
      setCategories(mealData.filter((item) => item.category == string));
      return;
    }
    setCategories(mealData);
  }

  return (
    <div className="mt-5">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Our Meal
      </h1>
      <div className="flex items-center justify-center my-2">
        <button
          onClick={() => filterCategories("All")}
          className="m-2 w-[100px] h-[40px] text-lg active:bg-orange-700  hover:scale-105 transition-all duration-100 hover:bg-blue-200 cursor-pointer bg-blue-300 text-black w-[80px]"
        >
          All
        </button>
        <button
          onClick={() => filterCategories("pizza")}
          className="m-2 w-[100px] h-[40px] text-lg active:bg-orange-700  hover:scale-105 transition-all duration-100 hover:bg-blue-200 cursor-pointer bg-blue-300 text-black w-[80px]"
        >
          Pizza
        </button>
        <button
          onClick={() => filterCategories("chicken")}
          className="m-2 w-[100px] h-[40px] text-lg active:bg-orange-700  hover:scale-105 transition-all duration-100 hover:bg-blue-200 cursor-pointer bg-blue-300 text-black  w-[80px]"
        >
          Chicken
        </button>
        <button
          onClick={() => filterCategories("Salad")}
          className="m-2 w-[100px] h-[40px] text-lg active:bg-orange-700  hover:scale-105 transition-all duration-100 hover:bg-blue-200 cursor-pointer bg-blue-300 text-black  w-[80px]"
        >
          Salad
        </button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 mx-4  mb-20">
        {categories.map((item) => {
          return (
            <div
              key={item.id}
              className="rounded-3xl text-black h-[200px] hover:scale-105 transition-all duration-300 cursor-pointer mb-10 relative text-white "
            >
              <img
                className="h-full w-full object-cover rounded-3xl "
                src={item.image}
              ></img>
              <div className=" bg-orange-700 w-[60px] rounded-full h-[60px] text-center flex justify-center items-center absolute bottom-0 right-0 -mb-5 border-solid border-8  border-gray-500 mx-4">
                {item.price}
              </div>
              <p className="absolute left-0 font-bold">{item.name}</p>
              <div className="mt-5">
                <p className="flex text-sm">
                  View More <ArrowSmRightIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Meal;
