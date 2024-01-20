import React from "react";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Featured = () => {
  const sliders = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function nextImage() {
    let nextImage = currentIndex + 1;
    nextImage > 2 ? (nextImage = 0) : (nextImage = nextImage);
    setCurrentIndex(nextImage);
  }

  function previousImage() {
    let nextImage = currentIndex - 1;
    nextImage < 0 ? (nextImage = 2) : (nextImage = nextImage);
    setCurrentIndex(nextImage);
  }

  return (
    <div className=" h-[500px] w-full py-4 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover -duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      <div
        onClick={previousImage}
        className=" hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 cursor-pointer bg-orange-700"
      >
        <BsChevronCompactLeft size={25} />
      </div>
      <div
        onClick={nextImage}
        className="absolute hidden  group-hover:block top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 cursor-pointer bg-orange-700"
      >
        <BsChevronCompactRight size={25} />
      </div>

      <div className="flex items-center justify-center p-2">
        {sliders.map((slider, id) => (
          <RxDotFilled
            key={id}
            className="cursor-pointer"
            onClick={() => setCurrentIndex(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
