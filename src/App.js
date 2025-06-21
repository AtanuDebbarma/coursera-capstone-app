import "./styles/App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import { BookingProvider } from "./Context/BookingContext";

/**
 * App is the root component of the application. It sets up the routing for
 * the app and wraps the entire app in a BookingProvider context.
 *
 * The BookingProvider context stores the current booking state and provides
 * functions to update the state.
 *
 * The app renders a header, a routes component, and a footer. The routes
 * component renders one of three pages depending on the current route: the
 * home page, the booking page, or the confirmed booking page.
 */
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
