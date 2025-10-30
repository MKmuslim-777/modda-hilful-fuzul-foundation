import React from "react";

const Text = () => {
  return (
    <div>
      <div className="w-full">
        {/* Top Bar */}
        <div className="bg-[#2c3e50]  text-white text-sm">
          <div className="flex justify-between items-center px-4 py-2 container mx-auto">
            <div className="flex flex-wrap items-center gap-2">
              <span>📍 ১২৩/ক, মানবতা সড়ক, ঢাকা-১২১২</span>
              <span>📞 +৮৮০ ০১৮৮৮ ৮৮৮৮৮৮</span>
            </div>
            <div className="flex gap-3">
              <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
                দান করুন
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                আমার একাউন্ট
              </button>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="bg-white shadow-md">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-3">
            {/* <h1 className="text-xl md:text-2xl font-bold text-[#2c3e50] mb-2 md:mb-0 text-center md:text-left">
            মোডা হিলফুল ফুজুল ফাউন্ডেশন
          </h1> */}
            <img src={logo} className="md:w-[120px] w-[45px]" alt="" />

            <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-[#2c3e50] font-medium"></nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
