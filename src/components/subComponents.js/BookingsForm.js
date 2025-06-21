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
 * @param {React.Dispatch<React.SetStateAction<string[]>>} dispatchTimes - The function to update the availableTimes state.
 * @param {Function} handleSubmit - The function to handle form submission.
 * @param {Function} submitForm - The function to handle the submission of the form to the API.
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
  dispatchTimes,
  handleSubmit,
  submitForm,
}) => {
  return (
    <div className="booking-form">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          dispatchTimes({ date: e.target.value });
        }}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
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
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value))}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit" className="submit-btn" onClick={handleSubmit}>
        Make Your reservation
      </button>
    </div>
  );
};
