import React from 'react';

const GroupCard = ({ image, name, members, role, unseen }) => {
    return (
        <div className="flex items-center gap-3 p-3 hover:bg-base-200 rounded-lg cursor-pointer transition-colors">
            <div className="avatar">
                <div className="w-12 h-12 rounded bg-gray-200">
                    {image && <img src={image} alt={name} />}
                </div>
            </div>
            <div className="flex-1">
                <h4 className="font-semibold text-sm">{name}</h4>
                <div className="text-xs text-gray-500 space-x-1">
                    <span className="capitalize">{role}</span>
                    <span>•</span>
                    <span>{members} members</span>
                </div>
            </div>
            {unseen && (
                <div className="badge badge-primary badge-xs"></div>
            )}
        </div>
    );
};

export default GroupCard;
