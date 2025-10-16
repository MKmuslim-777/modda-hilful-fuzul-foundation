import React from "react";
import bannerImg from "../../assets/heroImg.avif";

const Header = () => {
  return (
    <div
      className="relative h-[70vh] w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      {/* Blur Layer */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Text Content */}
      <div className="relative text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-lg">
          মোড্ডা <span className="text-red-400">হিলফুল ফুজুল</span> ফাউন্ডেশন
        </h1>
        <p className="text-lg md:text-xl opacity-90 mt-8">
          মানবতার সেবায়, একসাথে এগিয়ে চলি 🌿
        </p>

        <button className="btn my-10 border-none transition-all duration-300 ease-in-out hover:scale-106 bg-[#1f2b37] text-white">
          দান করুন
        </button>
      </div>
    </div>
  );
};

export default Header;
