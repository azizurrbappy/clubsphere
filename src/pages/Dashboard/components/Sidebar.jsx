import React from 'react';
import {
  BookUser,
  CalendarDays,
  CalendarPlus2,
  ClipboardList,
  CreditCard,
  FileUser,
  Gauge,
  UserRoundPlus,
  UserRoundSearch,
  Users,
  UsersRound,
} from 'lucide-react';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router';
import useRole from '../../../hooks/useRole';

const Sidebar = () => {
  const { user } = useAuth();
  const { role } = useRole();

  return (
    <div className="space-y-6">
      {/* Profile / Stats */}
      <div className="bg-base-100 p-4 rounded-xl border border-gray-200 flex items-center gap-2">
        <div tabIndex={0} role="button" className="cursor-pointer">
          {user.photoURL ? (
            <div
              tabIndex={0}
              role="button"
              className="size-[35px] rounded-full flex justify-center items-center border border-[#ebebee]"
            >
              <img
                src={user.photoURL}
                alt="User Avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          ) : (
            <div
              className="size-[35px] rounded-full flex justify-center items-center"
              style={{
                backgroundImage:
                  'url("https://secure.meetupstatic.com/next/images/avatar/background-0.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            >
              <button className="text-center font-medium">
                {user.displayName.split(' ')[0].split('')[0]}
              </button>
            </div>
          )}
        </div>
        <div>
          <h5 className="text-sm text-[#232326] font-semibold">
            {user?.displayName}
          </h5>
          <div>
            {role.role === 'admin' && (
              <div className="badge badge-soft badge-sm badge-secondary rounded-full">
                {role?.role}
              </div>
            )}
            {role.role === 'clubManager' && (
              <div className="badge badge-soft badge-sm badge-primary rounded-full">
                {role?.role}
              </div>
            )}
            {role.role === 'member' && (
              <div className="badge badge-soft badge-sm badge-warning rounded-full">
                {role?.role}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Your events menu */}
      <div className="bg-base-100 p-4 rounded-xl border border-gray-200">
        <ul className="sidebar-links">
          <NavLink to="/dashboard">
            <li>
              <Gauge size={18} /> Dashboard
            </li>
          </NavLink>
          {role.role === 'admin' && (
            <>
              <NavLink to="/dashboard/manage-user">
                <li>
                  <Users size={18} /> Manage User
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li>
                  <ClipboardList size={18} /> Manage Club
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li>
                  <CreditCard size={18} /> View Payments
                </li>
              </NavLink>
            </>
          )}
          {role.role === 'clubManager' && (
            <>
              <NavLink to="/dashboard">
                <li>
                  <UserRoundPlus size={18} /> Create club
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li>
                  <CalendarPlus2 size={18} /> Create event
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li>
                  <UserRoundSearch size={18} /> See members
                </li>
              </NavLink>
            </>
          )}
          {role.role === 'member' && (
            <>
              <NavLink to="/dashboard">
                <li>
                  <CalendarDays size={18} /> Your events
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li>
                  <UsersRound size={18} /> Your clubs
                </li>
              </NavLink>
              <NavLink to="/dashboard">
                <li>
                  <BookUser size={18} /> Be a club Manager
                </li>
              </NavLink>
            </>
          )}
        </ul>
      </div>

      {/* Your clubs menu */}
      <div className="bg-base-100 p-4 rounded-xl border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Your clubs</h3>
          <a href="#" className="text-sm text-[#3659e3] font-semibold">
            See all
          </a>
        </div>
        <div className="text-center py-6">
          <div className="mx-auto w-12 h-12 mb-2 flex items-center justify-center bg-gray-100 rounded-full">
            <Users className="text-gray-400" size={24} />
          </div>
          <p className="text-gray-600 text-sm mb-4">Looking for your people?</p>
          <p className="text-xs text-gray-500 mb-4 px-4">
            Join a clubs that shares your passions and start connecting today.
          </p>
          <button className="btn btn-neutral btn-sm rounded-full">
            Explore clubs near you
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
