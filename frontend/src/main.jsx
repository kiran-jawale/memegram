import Reacr from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Home, Feed, Profile, Board } from "./pages";
import { Layout } from "./pages/layout";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import navObj from "./constants.js";
import { PostProvider, usePostContext } from "./contexts/postContext.js";

const navRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path={navObj.profile.path} element={<Profile />} />
      <Route path={navObj.feed.path} element={<Feed />} />
      <Route path={navObj.board.path} element={<Board />} />
      {/* Will be added later */}
    </Route>
  )
);

React.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostProvider>
      <RouterProvider router={navRouter} />
    </PostProvider>
  </React.StrictMode>
);
