import "../../styles/Bookings.css";
import { BookingsForm } from "./BookingsForm";

/**
 * The Bookings component renders a form for booking a table at Little Lemon.
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
 * @return {React.JSX.Element} A JSX element representing the booking page.
 */
export const Bookings = ({
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
    <div className="booking-page">
      <div className="booking-hero">
        <div className="booking-hero-content">
          <h1>Reserve a Table</h1>
          <h2>Little Lemon</h2>
          <p>
            Book your table at Little Lemon and enjoy an unforgettable dining
            experience with our authentic Mediterranean cuisine.
          </p>
        </div>
      </div>

      <section className="booking-section">
        <div className="booking-container">
          <div className="booking-content">
            <div className="booking-info">
              <h2>Make a Reservation</h2>
              <p>
                Please fill out the form below to reserve your table. We'll
                confirm your booking shortly after submission.
              </p>
              <div className="booking-details">
                <h3>Restaurant Information</h3>
                <p>
                  <strong>Address:</strong> 123 Mediterranean Ave, Chicago, IL
                </p>
                <p>
                  <strong>Phone:</strong> (312) 555-0123
                </p>
                <p>
                  <strong>Hours:</strong> 5:00 PM - 10:00 PM
                </p>
              </div>
            </div>

            <div className="booking-form-container">
              <BookingsForm
                date={date}
                setDate={setDate}
                time={time}
                setTime={setTime}
                guests={guests}
                setGuests={setGuests}
                occasion={occasion}
                setOccasion={setOccasion}
                availableTimes={availableTimes}
                dispatchTimes={dispatchTimes}
                handleSubmit={handleSubmit}
                submitForm={submitForm}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
