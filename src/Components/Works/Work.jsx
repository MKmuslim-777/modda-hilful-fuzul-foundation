import React from "react";

const Work = ({ item }) => {
  const { title, image, description } = item;
  return (
    <div className="card bg-base-100 w-[350px] md:w-96 shadow-sm ">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end"></div>
        <button className="btn btn-primary">View Details</button>
      </div>
    </div>
  );
};

export default Work;
