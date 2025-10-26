import React from "react";
import useWork from "../../Hooks/useWork";
import Work from "./Work";

const Works = () => {
  const { work } = useWork();
  //   console.log(work);

  const workLimit = work.slice(0, 4);
  return (
    <div className=" container">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold text-center my-20">
          আমাদের কার্যক্রম
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-7 mx-auto">
            {workLimit.map((item) => (
              <Work key={item.id} item={item}></Work>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
