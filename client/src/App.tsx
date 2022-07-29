// lib
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// src
import Navbar from "./components/Navbar";
import RouteRequiresLogin from "./components/RouteRequiresLogin";
import BookTour from "./pages/BookTour";
import LandingPage from "./pages/LandingPage";
import MyTours from "./pages/MyTours";
import TourDetail from "./pages/TourDetail";
import UpdateBooking from "./pages/UpdateBooking";
import Auth0Service from "./auth/Auth0Service";

function App() {
  return (
    <>
      <Router>
        <Auth0Service>
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
        </Auth0Service>
      </Router>
    </>
  );
}

export default App;
