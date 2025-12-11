import React from 'react';
import { Calendar, Users } from 'lucide-react';

const Sidebar = () => {
    // Mock data for sidebar for now
    const eventsCount = 0;
    const groupsCount = 0;

    return (
        <div className="space-y-6">
            {/* Profile / Stats */}
            <div className="bg-base-100 p-4 rounded-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                    <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content rounded-full w-12">
                            <span className="text-xl">A</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-sm">Azizur Rahman Bappy</h3>
                        <p className="text-xs text-gray-500">Komilla</p>
                    </div>
                </div>
            </div>

            {/* Your events menu */}
            <div className="bg-base-100 p-4 rounded-xl border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg">Your events</h3>
                    <a href="#" className="text-sm text-primary font-semibold">See all</a>
                </div>

                <div className="flex gap-4 mb-6">
                    <button className="btn btn-sm btn-outline flex-1 gap-2">
                        <Calendar size={16} /> Going
                    </button>
                    <button className="btn btn-sm btn-outline flex-1 gap-2">
                        Saved
                    </button>
                </div>

                <div className="text-center py-6">
                    <div className="mx-auto w-12 h-12 mb-2 flex items-center justify-center bg-gray-100 rounded-full">
                        <Calendar className="text-gray-400" size={24} />
                    </div>
                    <p className="text-gray-600 text-sm mb-4">No plans yet? Let's fix that!</p>
                    <button className="btn btn-neutral btn-sm rounded-full">Find events</button>
                </div>
            </div>

            {/* Your groups menu */}
            <div className="bg-base-100 p-4 rounded-xl border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg">Your groups</h3>
                    <a href="#" className="text-sm text-primary font-semibold">See all</a>
                </div>
                <div className="text-center py-6">
                    <div className="mx-auto w-12 h-12 mb-2 flex items-center justify-center bg-gray-100 rounded-full">
                        <Users className="text-gray-400" size={24} />
                    </div>
                    <p className="text-gray-600 text-sm mb-4">Looking for your people?</p>
                    <p className="text-xs text-gray-500 mb-4 px-4">Join a group that shares your passions and start connecting today.</p>
                    <button className="btn btn-neutral btn-sm rounded-full">Explore groups near you</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
