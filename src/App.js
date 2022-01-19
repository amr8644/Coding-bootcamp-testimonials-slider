import "./index.css";
import Pattern from "./images/pattern-bg.svg";
import Quotes from "./images/pattern-quotes.svg";
import NextArrow from "./images/icon-next.svg";
import PreArrow from "./images/icon-prev.svg";
import Data from "./Data.js";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);
  const { name, job, desc, img } = Data[index];

  const checkNumber = (num) => {
    if (num < 0) {
      return Data.length - 1;
    }
    if (num > Data.length - 1) {
      return 0;
    }

    return num;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <>
      <div class="w-full flex items-center sm:flex-col-reverse lg:flex-row justify-around h-full relative ">
        {/* Text */}
        <div class="lg:w-1/2 lg:h-4/6 sm:w-full sm:h-auto relative flex justify-center  lg:left-40 flex-col z-20 sm:mt-5">
          <img
            src={Quotes}
            alt=""
            class="absolute sm:top-0 sm:right-20  sm:left-20"
          />
          <p class="lg:text-4xl sm:text-lg sm:text-center lg:text-left sm:p-3 lg:p-0 text-DarkBlue ">
            {desc}
          </p>
          <br />
          <p class="text-DarkBlue font-bold sm:text-center lg:text-left">
            {name} <br />
            <span class="text-GrayishBlue font-light"> {job}</span>
          </p>
        </div>
        {/* Image */}
        <div class="lg:w-2/5 lg:h-11/12 sm:w-full sm:h-auto flex items-center justify-center  sm:p-6 ">
          <img
            src={img}
            alt={name}
            class="lg:w-11/12 lg:h-11/12 sm:w-3/4 sm:h-3/4 z-10 shadow-xl"
          />
        </div>
        {/* Pattern */}
        <div class="lg:w-1/2 lg:h-11/12 lg:right-20 sm:full sm:h-auto absolute flex items-center justify-center sm:top-0">
          <img
            src={Pattern}
            alt=""
            class="lg:w-full lg:h-full sm:w-4/5  sm:h-4/5  "
          />
          {/* Buttons */}
          <div class="absolute z-10 lg:bottom-20 sm:bottom-0">
            <button
              type="button"
              class="bg-white px-4 py-2 shadow-lg rounded-l-full cursor-pointer"
              onClick={() => prevPerson()}
            >
              <img src={PreArrow} alt="" />
            </button>
            <button
              type="button"
              class="bg-white px-4 py-2 shadow-lg rounded-r-full cursor-pointer"
              onClick={() => nextPerson()}
            >
              <img src={NextArrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
