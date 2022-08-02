// lib
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";

// src
import MyTours from "./pages/MyTours";
import Snack from "./components/Snack";
import { setUser } from "./store/user";
import BookTour from "./pages/BookTour";
import Navbar from "./components/Navbar";
import TourDetail from "./pages/TourDetail";
import LandingPage from "./pages/LandingPage";
import UpdateBooking from "./pages/UpdateBooking";
import RouteRequiresLogin from "./components/RouteRequiresLogin";

function App() {
  const { user } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user, dispatch]);

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
