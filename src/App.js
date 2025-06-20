import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";


function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
