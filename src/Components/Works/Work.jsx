import React from "react";

const Work = ({ item }) => {
  const { title, image, description, tag } = item;

  return (
    <div className="card bg-base-100 w-[350px] md:w-96 shadow-md rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <figure>
        <img src={image} alt={title} className="h-52 w-full object-cover" />
      </figure>

      {/* Text Content */}
      <div className="card-body px-5 py-4">
        {/* Tag */}
        <p className="text-orange-500 font-medium flex items-center gap-2 text-sm">
          <span></span> {tag}
        </p>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

        {/* Button */}
        <div className="mt-4">
          <button className="btn bg-[#088599] text-white w-full">
            বিস্তারিত দেখুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
