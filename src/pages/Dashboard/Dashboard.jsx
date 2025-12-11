import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Sidebar from './components/Sidebar';
import EventCard from './components/EventCard';
import GroupCard from './components/GroupCard';

const Dashboard = () => {
  // Mock Data for "Top picks for you"
  const topPicks = [
    {
      id: 1,
      title: "Agentic AI Hackathon | New York /Virtual",
      date: "Fri, Dec 12",
      time: "7:30 PM IST",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2070",
      category: "ODSC AI Pune",
      rating: 4.5,
      attendees: 89,
      host: "ODSC AI Pune",
      mode: "Hybrid"
    },
    {
      id: 2,
      title: "How to Build AI Agents – Practical Hands-On Workshop by Educity",
      date: "Tue, Dec 18",
      time: "12:00 PM IST",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1965",
      category: "Educity",
      rating: null,
      attendees: 491,
      host: "NonceLabs",
      mode: "Online"
    },
    {
      id: 3,
      title: "Workshop: Are you ready to start your business?",
      date: "Thu, Dec 18",
      time: "6:00 PM SST",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2832",
      category: "Business Planner",
      rating: 4.8,
      attendees: 63,
      host: "Group Meetup",
      mode: "Online"
    },
    {
      id: 4,
      title: "AWS GenAI Builder Series - AWS AgentCore Services",
      date: "Fri, Dec 19",
      time: "7:00 PM IST",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072",
      category: "AWS GenAI",
      rating: 4.2,
      attendees: 482,
      host: "Hyderabad AI",
      mode: "Online"
    }
  ];

  // Mock Data for "From groups you're part of" - although the screenshot shows this section empty/different, 
  // I will add header and placeholder or list if checking "Groups" section.
  // The screenshot actually shows "Your groups are quiet for now" at the bottom.
  // But there is a title: "From groups you're part of"

  return (
    <div className="bg-[#f6f7f8] min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - 1 column */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>

          {/* Main Content - 3 columns */}
          <div className="lg:col-span-3">

            {/* Top Picks Section */}
            <div className="mb-10">
              <div className="flex justify-between items-end mb-6">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold">Top picks for you</h2>
                  <Sparkles className="text-cyan-500 fill-cyan-500" size={20} />
                </div>
                <a href="#" className="text-sm text-primary font-semibold hover:underline">Browse all</a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                {topPicks.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            </div>

            {/* From groups you're part of */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xl font-bold">From groups you're part of</h2>
                <div className="text-orange-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center p-12 bg-gray-50 rounded-xl text-center border-2 border-dashed border-gray-200">
                <div className="bg-purple-100 p-4 rounded-full mb-4 relative overflow-hidden">
                  {/* Abstract sleepy illustration placeholder */}
                  <div className="text-4xl">😴</div>
                  <div className="absolute top-0 right-0 p-1">
                    <span className="text-xs font-bold text-gray-500">Zzz</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">Your groups are quiet for now</h3>
                <p className="text-gray-500 text-sm max-w-md">
                  Explore fresh events and stay connected with what's happening around you.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
