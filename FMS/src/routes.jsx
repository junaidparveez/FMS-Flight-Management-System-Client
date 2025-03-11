// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import HomePage from "../pages/HomePage";
// import Flights from "../pages/Flights";
// import Booking from "../pages/Booking";
// import Login from "../pages/Login";
// import Content from "../pages/Content"; // Import Content Page

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/flights" element={<Flights />} />
//       <Route path="/booking" element={<Booking />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/content" element={<Content />} /> {/* Add Content Route */}
//     </Routes>
//   );
// };

// export default AppRoutes;
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Flights from "./pages/Flights";
import Booking from "./pages/Booking";
import Register from "./pages/Register";
// import Content from './pages/content';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/flights",
    element: <Flights />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/register",
    element: <Register />,
  },
//   {
//     path: "/content",
//     element: <Content />,
//   },
]);

export default appRouter;
