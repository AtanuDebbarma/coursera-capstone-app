import "../../styles/Bookings.css";

/**
 * The BookingsForm component renders a form for booking a table at Little Lemon.
 * The component takes the following props:
 * @param {string} date - The current date selected by the user.
 * @param {React.Dispatch<React.SetStateAction<string>>} setDate - The function to update the date state.
 * @param {string} time - The current time selected by the user.
 * @param {React.Dispatch<React.SetStateAction<string>>} setTime - The function to update the time state.
 * @param {number} guests - The number of guests selected by the user.
 * @param {React.Dispatch<React.SetStateAction<number>>} setGuests - The function to update the guests state.
 * @param {string} occasion - The occasion selected by the user.
 * @param {React.Dispatch<React.SetStateAction<string>>} setOccasion - The function to update the occasion state.
 * @param {string[]} availableTimes - The available times for booking.
 * @param {Function} handleSubmit - The function to handle form submission.
 *
 * @return {React.JSX.Element} A JSX element representing the booking form.
 */
export const BookingsForm = ({
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  availableTimes,
  handleSubmit,
}) => {
  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      aria-label="Booking form for reserving a table at Little Lemon"
    >
      <fieldset>
        <legend>Book a table</legend>

        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="reservation-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={new Date().toISOString().split("T")[0]} // prevent past dates
          required
          aria-required="true"
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="reservation-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-required="true"
        >
          <option value="">Select a time</option>
          {availableTimes.map((timeSlot) => (
            <option key={timeSlot} value={timeSlot}>
              {timeSlot}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          placeholder="1"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
          required
          aria-required="true"
          aria-label="Number of guests input field"
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
          aria-required="true"
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </fieldset>

      <button
        type="submit"
        className="submit-btn"
        aria-label="On Click - Make your reservation"
      >
        Make Your Reservation
      </button>
    </form>
  );
};
