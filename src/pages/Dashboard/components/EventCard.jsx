import React from 'react';
import { Bookmark, Video, MapPin, Star } from 'lucide-react';

const EventCard = ({ image, title, date, time, category, attendees, host, isOnline, mode, rating }) => {
    return (
        <div className="group flex flex-col h-full bg-white rounded-xl cursor-pointer hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] transition-shadow duration-300 border border-transparent hover:border-gray-200">
            {/* Image Container - Aspect ratio approx 16:9 or similar */}
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-xl">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Bookmark Button - Top right */}
                <div className="absolute top-3 right-3">
                    <button className="btn btn-circle btn-sm h-8 w-8 min-h-0 bg-white hover:bg-white border-gray-200 shadow-sm">
                        <Bookmark size={16} className="text-gray-700" />
                    </button>
                </div>
                {/* Free/Label badge could go here if needed */}
            </div>

            {/* Content Body */}
            <div className="flex flex-col flex-1 p-4">

                {/* Date & Mode Badge Row */}
                <div className="flex items-center flex-wrap gap-2 mb-2 text-[13px] text-gray-500 font-medium">
                    <span className="text-[#875204] uppercase font-semibold">{date}</span>
                    <span className="text-gray-300 text-[10px]">•</span>
                    <span className="text-[#875204] uppercase font-semibold">{time}</span>

                    {mode && (
                        <div className="flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded text-gray-600 text-[11px] font-medium ml-auto sm:ml-0">
                            {mode === 'Online' ? <Video size={10} strokeWidth={2.5} /> : <MapPin size={10} strokeWidth={2.5} />}
                            <span>{mode}</span>
                        </div>
                    )}
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-bold text-[#212121] leading-snug mb-2 line-clamp-2 group-hover:text-[#00455D] transition-colors">
                    {title}
                </h3>

                {/* Host Info - "by HostName" */}
                <div className="text-sm text-gray-500 mb-4 flex items-center gap-1">
                    <span>by <span className="font-semibold text-gray-600">{host || category}</span></span>
                    {rating && (
                        <>
                            <span className="text-gray-300 mx-1">·</span>
                            <span className="text-sm text-gray-600 flex items-center gap-0.5 font-medium">
                                {rating} <Star size={10} className="fill-gray-600 text-gray-600" />
                            </span>
                        </>
                    )}
                </div>

                {/* Spacer */}
                <div className="mt-auto"></div>

                {/* Footer: Attendees */}
                <div className="flex items-center gap-3 pt-2">
                    {/* Avatars */}
                    <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full border border-white bg-gray-200 bg-[url('https://i.pravatar.cc/150?u=1')] bg-cover"></div>
                        <div className="w-6 h-6 rounded-full border border-white bg-gray-300 bg-[url('https://i.pravatar.cc/150?u=4')] bg-cover"></div>
                        <div className="w-6 h-6 rounded-full border border-white bg-gray-400 bg-[url('https://i.pravatar.cc/150?u=8')] bg-cover"></div>
                    </div>
                    <span className="text-sm text-gray-500 font-normal">{attendees} attendees</span>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
