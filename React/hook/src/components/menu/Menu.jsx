import React from "react";
import image from "../../assets/most.png";
import avatar from "../../assets/avatar.png";

const Menu = () => {
  
  return (
    <section className="py-4">
      <div className="container mx-auto grid grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:gap-2 max-[600px]:grid-cols-1 mt-5 gap-6">
        {Array(6)
          .fill("")
          .map((_, inx) => (
            <div key={inx} className=" flex flex-col bg-white">
              <div>
                <img className="w-full" src={image} alt="" />
              </div>
              <div className="flex flex-col flex-1">
                <div className="p-3.5 flex-1">
                  <h3>Still Standing Tall</h3>
                  <p className="text-[13px] mt-1.5 text-[#7A7A7A]">
                    Life begins at the end of your comfort zone.
                  </p>
                </div>
                <div className="flex gap-2.5 p-3 border-t border-gray-200 items-center">
                  <img src={avatar} alt="" />
                  <p className="flex-1 text-xs">William Wong</p>
                  <span className="text-xs">9/25/2015</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Menu;
