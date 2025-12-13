import React from 'react';
import { Users, Box, TrendingUp, Clock } from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const AdminDashboard = () => {
  const membershipData = [
    { name: 'Downtown Club', members: 4000 },
    { name: 'Uptown Club', members: 3000 },
    { name: 'Lakeside Club', members: 2000 },
    { name: 'Mountain Club', members: 2780 },
    { name: 'City Club', members: 1890 },
    { name: 'Beach Club', members: 2390 },
    { name: 'Valley Club', members: 3490 },
  ];

  // Stats Data
  const stats = [
    {
      title: 'Total User',
      value: '40,689',
      trendColor: 'text-green-500',
      icon: <Users size={24} className="text-purple-600" />,
      iconBg: 'bg-purple-100',
    },
    {
      title: 'Total Memberships',
      value: '10293',
      trendColor: 'text-green-500',
      icon: <Box size={24} className="text-yellow-600" />,
      iconBg: 'bg-yellow-100',
    },
    {
      title: 'Total Events',
      value: '$89,000',
      trendColor: 'text-red-500',
      icon: <TrendingUp size={24} className="text-green-600" />,
      iconBg: 'bg-green-100',
    },
    {
      title: 'Total Payments Amount',
      value: '2040',
      trendColor: 'text-green-500',
      icon: <Clock size={24} className="text-orange-600" />,
      iconBg: 'bg-orange-100',
    },
  ];

  const deals = [
    {
      product: 'Apple Watch',
      img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=100&q=80',
      location: '6096 Marjolaine Landing',
      datetime: '12.09.2019 - 12.53 PM',
      piece: 423,
      amount: '$34,295',
      status: 'Delivered',
      statusClass: 'badge-success text-white',
    },
  ];

  return (
    <div className="min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="card bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="card-body p-6 flex flex-col items-start justify-between">
              <div className={`p-4 rounded-2xl ${stat.iconBg}`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">{stat.title}</p>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Memberships per Club Chart */}
      <div className="card bg-white shadow-sm mb-8 w-full">
        <div className="card-body p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800">
              Memberships per Club
            </h3>
          </div>

          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={membershipData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                />
                <Tooltip
                  cursor={{ fill: '#f3f4f6' }}
                  contentStyle={{
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  }}
                />
                <Legend />
                <Bar
                  dataKey="members"
                  fill="#3659e3"
                  name="Active Members"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Deals Details Table */}
      <div className="card bg-white shadow-sm">
        <div className="card-body p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">Deals Details</h3>
            <select className="select select-bordered select-sm w-32 bg-gray-50 text-gray-600">
              <option>October</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* Head */}
              <thead className="bg-gray-100/50 text-gray-600 rounded-lg">
                <tr>
                  <th className="py-4">Product Name</th>
                  <th>Location</th>
                  <th>Date - Time</th>
                  <th>Piece</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Row */}
                {deals.map((deal, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 border-b border-gray-100"
                  >
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-10 h-10">
                            <img src={deal.img} alt={deal.product} />
                          </div>
                        </div>
                        <div className="font-semibold text-gray-700">
                          {deal.product}
                        </div>
                      </div>
                    </td>
                    <td className="text-gray-600">{deal.location}</td>
                    <td className="text-gray-600">{deal.datetime}</td>
                    <td className="text-gray-600">{deal.piece}</td>
                    <td className="text-gray-600">{deal.amount}</td>
                    <td>
                      <div
                        className={`badge ${deal.statusClass} border-none py-3 px-4`}
                      >
                        {deal.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
