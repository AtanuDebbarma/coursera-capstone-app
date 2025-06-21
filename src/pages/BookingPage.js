import { Bookings } from "../components/subComponents.js/Bookings";
import { useState, useReducer, useEffect } from "react";
import { validateForm } from "../utils/bookingUtils.js";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../Context/BookingContext.js";
import { useLoadRemoteAPI } from "../customHooks/useLoadRemoteAPI.js";

/**
 * BookingPage renders a form for booking a table at Little Lemon.
 * The form data is validated on submission and sent to the API
 * for booking. The page also loads available times for the
 * selected date using the fetchAPI function.
 *
 * @return {React.JSX.Element} A JSX element representing the booking page.
 */
const BookingPage = () => {
  // Load fetchAPI and submitAPI from custom remote script
  const { fetchAPI, submitAPI } = useLoadRemoteAPI();

  const navigate = useNavigate();
  const { setBookingData } = useBooking();

  // Form field states
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  // Reducer to store and update available time slots
  const timesReducer = (state, action) => {
    switch (action.type) {
      case "SET":
        return action.payload;
      default:
        return state;
    }
  };

  const [availableTimes, dispatchTimes] = useReducer(timesReducer, []);

  // Initialize available times once fetchAPI is ready (on first load)
  useEffect(() => {
    if (fetchAPI) {
      const today = new Date();
      const times = fetchAPI(today); // Safe to call after fetchAPI is loaded
      dispatchTimes({ type: "SET", payload: times });
    }
  }, [fetchAPI]);

  // Update available times whenever the date changes (and fetchAPI is ready)
  useEffect(() => {
    if (fetchAPI && date) {
      const selectedDate = new Date(date);
      const times = fetchAPI(selectedDate);
      dispatchTimes({ type: "SET", payload: times });
    }
  }, [fetchAPI, date]);

  // Handle form submission: validate, save to context, submit to API
  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validateForm({ date, time, guests, occasion }); // external validation function

    if (validation === "missing") {
      alert("Please fill in all fields before submitting.");
      console.error("Form validation failed: missing fields");
      return;
    }

    if (validation === "invalidGuests") {
      alert("Please enter a valid number of guests (1–10).");
      console.error("Form validation failed: invalid number of guests");
      return;
    }

    if (validation === "valid") {
      const formData = { date, time, guests, occasion };
      console.log("Form submitted:", formData);

      setBookingData(formData); // Save in context
      submitForm(formData); // Send to API and navigate
    }
  };

  // Send booking data to the API
  const submitForm = async (formData) => {
    if (!submitAPI) {
      console.error("❌ submitAPI is not defined yet");
      return;
    }

    const isSubmitted = await submitAPI(formData);

    if (isSubmitted) {
      navigate("/confirmed-booking"); // Navigate on success
    }
  };

  // Render the Bookings form
  return (
    <Bookings
      date={date}
      setDate={setDate}
      time={time}
      setTime={setTime}
      guests={guests}
      setGuests={setGuests}
      occasion={occasion}
      setOccasion={setOccasion}
      availableTimes={availableTimes}
      handleSubmit={handleSubmit}
    />
  );
};

export default BookingPage;
