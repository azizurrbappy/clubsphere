import React from 'react';

const CityCard = () => {
  return (
    <div className="card bg-base-100 shadow-sm rounded-2xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt=""
        />
      </figure>
      <div className="card-body py-4">
        <h2 className="text-center text-[#232326] font-bold">Miami</h2>
      </div>
    </div>
  );
};

export default CityCard;
