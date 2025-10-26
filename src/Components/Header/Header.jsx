import React from "react";
import bannerImg from "../../assets/banner.png";

const Header = () => {
  return (
    <div
      className="relative h-[70vh] w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      {/* Blur Layer */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      {/* Text Content */}
      <div className="relative text-center text-white z-10 md:w-11/12">
        <h1 className="text-4xl md:text-8xl font-bold mb-3 drop-shadow-lg md:mx-0 mx-2.5">
          মোড্ডা <span className="text-red-400">হিলফুল ফুজুল</span> ফাউন্ডেশন
        </h1>
        <p className="text-lg md:text-3xl opacity-90 mt-8">
          মানবতার সেবায়, একসাথে এগিয়ে চলি 🌿
        </p>

        <button
          className="relative my-10 py-3 px-8 text-white md:text-2xl font-semibold rounded-xl 
  bg-gradient-to-r from-[#088599] to-[#0aa4b5]
  shadow-lg shadow-[#088599]/40 border-none 
  transition-all duration-500 ease-in-out 
  hover:scale-105 hover:shadow-xl hover:shadow-[#0aa4b5]/60 
  hover:from-[#0aa4b5] hover:to-[#088599] 
  before:absolute before:inset-0 before:rounded-full before:blur-md before:bg-[#0aa4b5]/20 before:opacity-0 hover:before:opacity-100"
        >
          দান করুন
        </button>
      </div>
    </div>
  );
};

export default Header;
