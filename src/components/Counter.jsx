import React, { useState, useEffect, useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { BackgroundContext } from "./BackgroundContext";

const Counter = ({ num, text }) => {
  const [count, setCount] = useState(0);
  const [plus, setPlus] = useState(false);

  const {isDark} = useContext(BackgroundContext)

  useEffect(() => {
    if (count >= num) return;
    const increment = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= num - 1) {
          clearInterval(increment);
        }
        return prevCount + 1;
      });

      text === "Completed projects" && setPlus(true);
      text === "Years of experience" && setPlus(true);
    }, 500);

    return () => {
      clearInterval(increment);
    };
  }, [num]);

  return (
    <div
      className={
        isDark
          ? "text-[#6d6969] absolute mt-5 lg:mt-10"
          : "text-gray-700 absolute mt-5 lg:mt-10"
      }
    >
      {plus ? (
        <p className="text-3xl md:text-6xl flex justify-center font-bold">
          {count} <FaPlus className="text-lg md:text-2xl font-bold" />
        </p>
      ) : (
        <p className="text-3xl md:text-6xl font-bold">{count}</p>
      )}
    </div>
  );
};

export default Counter;
