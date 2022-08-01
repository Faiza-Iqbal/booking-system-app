// lib
import { Routes, Route } from "react-router-dom";

// src
import Navbar from "./components/Navbar";
import RouteRequiresLogin from "./components/RouteRequiresLogin";
import BookTour from "./pages/BookTour";
import LandingPage from "./pages/LandingPage";
import MyTours from "./pages/MyTours";
import TourDetail from "./pages/TourDetail";
import UpdateBooking from "./pages/UpdateBooking";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./store/user";
import Snack from "./components/Snack";

function App() {
  const { user } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<RouteRequiresLogin />}>
          <Route path="/my-tours" element={<MyTours />} />
          <Route path="/book-tour/:id" element={<BookTour />} />
          <Route path="/update-tour/:id" element={<UpdateBooking />} />
        </Route>
        <Route path="/tour-detail/:id" element={<TourDetail />} />
      </Routes>
      <Snack />
    </>
  );
}

export default App;
