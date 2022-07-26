// lib
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// src
import Navbar from "./components/Navbar";
import BookTour from "./pages/BookTour";
import LandingPage from "./pages/LandingPage";
import MyTours from "./pages/MyTours";
import TourDetail from "./pages/TourDetail";
import Auth0ProviderWithHistory from "./auth/Auth0ProviderWithHistory";

function App() {
  return (
    <>
      <Router>
        <Auth0ProviderWithHistory>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/my-tours" element={<MyTours />} />
            <Route path="/book-tour" element={<BookTour />} />
            <Route path="/book-tour/:id" element={<BookTour />} />
            <Route path="/tour-detail/:id" element={<TourDetail />} />
          </Routes>
        </Auth0ProviderWithHistory>
      </Router>
    </>
  );
}

export default App;
