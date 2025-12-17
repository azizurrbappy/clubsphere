import { createBrowserRouter, NavLink } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Find from '../pages/EventsClubs/Find';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import PrivetRoute from './PrivetRoute';
import SeeMembers from '../pages/Dashboard/SeeMembers/SeeMembers';
import ManageClub from '../pages/Dashboard/ManageClub/ManageClub';
import Transactions from '../pages/Dashboard/Transactions/Transactions';
import MyClubs from '../pages/Dashboard/MyClubs';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import ClubDetails from '../pages/EventsClubs/ClubDetails';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/find/:query',
        element: <Find></Find>,
      },
      {
        path: '/club/:id',
        element: <ClubDetails></ClubDetails>,
      },
    ],
  },
  {
    path: '/dashboard',
    errorElement: <ErrorPage />,
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>,
      },
      {
        path: 'manage-user',
        element: <SeeMembers></SeeMembers>,
      },
      {
        path: 'manage-clubs',
        element: <ManageClub></ManageClub>,
        errorElement: <ErrorPage />,
      },
      {
        path: 'transactions',
        element: <Transactions></Transactions>,
      },
      {
        path: 'my-clubs',
        element: <MyClubs></MyClubs>,
      },
      {
        path: 'club-details',
        element: <ClubDetails></ClubDetails>,
      },
    ],
  },
]);
