import "./styles/App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import { BookingProvider } from "./BookingContext";

function App() {
  return (
    <BookingProvider>
      <Router>
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;
