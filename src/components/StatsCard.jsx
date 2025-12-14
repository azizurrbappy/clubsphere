import React from 'react';

const StatsCard = ({ title, value, icon: Icon, colorClass, bgClass }) => {
  return (
    <div className="card bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <div className="card-body p-6">
        <div className="flex flex-col-reverse">
          <div>
            <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
            <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
          </div>
          <div
            className={`p-3 rounded-2xl ${bgClass} ${colorClass} w-fit mb-2`}
          >
            <Icon size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
