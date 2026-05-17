import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useNavigate,
} from "react-router";
import Register from "../../features/auth/components/Register";
import Authlayout from "../../layouts/Authlayout";
import Publiclayout from "../../layouts/Publiclayout";
import Dashboard from "../../layouts/Dashboard";
import { useDispatch } from "react-redux";
import { deleteUser, setUser } from "../slices/AuthSlice";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedAuth from "./ProtectedAuth";
import Home from "../../features/home/components/Home";
import CreateEntry from "../../features/entries/components/CreateEntry";
import Profile from "../../features/profile/components/Profile";
import Forget from "./Forget";
import Journal from "../../features/Journal/components/Journal";
import EntryDetails from "./EntryDetails";
import SearchRoute from "./SearchRoute";
import { axiosInstance } from "../config/axiosInstance";

const AppRouter = () => {
  let dispatch = useDispatch();
  const [toggleEdit, setToggleEdit] = useState(false);
  const [existEntryData, setExistEntryData] = useState({});

  const editEntryFn = (entry) => {
    setToggleEdit((prev) => !prev);
    setExistEntryData(entry);
  };
  let meApi = async () => {
    try {
      let { data } = await axiosInstance.get("/auth/me");
      dispatch(setUser(data?.data));
    } catch (error) {
      console.log(error);
      dispatch(deleteUser());
      <Navigate to="/" />;
    }
  };

  useEffect(() => {
    meApi();
  }, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <Publiclayout />,
        },
        {
          path: "auth",
          element: <Authlayout />,
        },
        {
          path: "forget-password",
          element: <Forget />,
        },
      ],
    },
    {
      path: "/home",
      element: <ProtectedAuth />,
      children: [
        {
          path: "",
          element: <Dashboard />,
          children: [
            {
              path: "dashboard",
              element: <Home />,
            },
            {
              path: "create",
              element: <CreateEntry />,
            },
            {
              path: "journal",
              element: (
                <Journal
                  setToggleEdit={setToggleEdit}
                  toggleEdit={toggleEdit}
                  setExistEntryData={setExistEntryData}
                  existEntryData={existEntryData}
                  editEntryFn={editEntryFn}
                />
              ),
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "entry/:id",
              element: (
                <EntryDetails
                  setToggleEdit={setToggleEdit}
                  toggleEdit={toggleEdit}
                  setExistEntryData={setExistEntryData}
                  existEntryData={existEntryData}
                  editEntryFn={editEntryFn}
                />
              ),
            },
            {
              path: "search",
              element: <SearchRoute />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
