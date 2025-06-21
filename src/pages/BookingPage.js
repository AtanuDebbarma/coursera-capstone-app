import { Bookings } from "../components/subComponents.js/Bookings";
import { useState, useReducer, useEffect } from "react";
import {
  updateTimes,
  initializeTimes,
  validateForm,
} from "../utils/bookingUtils.js";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../capstone_main_api.js";
import { useBooking } from "../BookingContext.js";

/**
 * BookingPage is a component that manages the state and logic for booking a table.
 * It utilizes React hooks for state management and effects, and integrates with
 * an API for submitting booking data. The component renders the Bookings form
 * and handles form submission, updating available times, and page navigation upon
 * successful booking.
 *
 * @return {React.JSX.Element} The rendered booking page component.
 */
const BookingPage = () => {
  const navigate = useNavigate();
  const { setBookingData } = useBooking();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const [availableTimes, dispatchTimes] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  // Submit form function that handles API submission and navigation
  const submitForm = async (formData) => {
    const isSubmitted = await submitAPI(formData); // assuming it's a Promise
    if (isSubmitted) {
      navigate("/confirmed-booking");
    }
  };

  /**
   * Handles form submission, performing basic form validation and saving
   * form data in the BookingContext. If the form is valid, it submits the
   * data to the API and navigates to the confirmed booking page upon
   * successful submission.
   *
   * @param {React.FormEvent<HTMLFormElement>} e The form event object.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validateForm({
      date,
      time,
      guests,
      occasion,
    });
    if (validation === "missing") {
      alert("Please fill in all fields before submitting.");
      console.error("Form validation failed: missing fields");
      return;
    }
    if (validation === "invalidGuests") {
      alert("Please enter a valid number of guests (1-10).");
      console.error("Form validation failed: invalid number of guests");
      return;
    }
    if (validation === "valid") {
      const formData = {
        date,
        time,
        guests,
        occasion,
      };
      console.log("Form submitted:", formData);
      setBookingData(formData); // ✅ Save in context

      // Submit to API and navigate if successful
      submitForm(formData);
    }
  };

  useEffect(() => {
    if (date) {
      dispatchTimes({ date });
    }
  }, [date]);

  useEffect(() => {
    console.log("Available times updated:", availableTimes);
  }, [availableTimes]);

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
