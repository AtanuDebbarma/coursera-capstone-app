import "../styles/ConfirmedBooking.css";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../BookingContext";
import { useEffect } from "react";

const ConfirmedBooking = () => {
  const { bookingData } = useBooking();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect back if no booking data
    if (!bookingData) {
      navigate("/");
    }
  }, [bookingData, navigate]);

  if (!bookingData) return null; // Prevent rendering before redirect
  return (
    <>
      {/* Confirmation Hero Section */}
      <section className="confirmation-hero">
        <div className="confirmation-hero-content">
          <h1>Little Lemon</h1>
          <h2>Booking Confirmed!</h2>
          <p>
            Thank you for choosing Little Lemon! Your table reservation has been
            successfully confirmed. We look forward to serving you an
            exceptional dining experience.
          </p>
        </div>
      </section>

      {/* Confirmation Details Section */}
      <section className="confirmation-section">
        <div className="confirmation-container">
          <div className="confirmation-content">
            {/* Success Message */}
            <div className="confirmation-message">
              <div className="success-icon">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#27ae60"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22,4 12,14.01 9,11.01"></polyline>
                </svg>
              </div>
              <h2>Your Reservation is Confirmed!</h2>
              <p>
                We've received your booking request and have successfully
                reserved your table. A confirmation email has been sent to your
                provided email address with all the details.
              </p>
              <div className="confirmation-details">
                <h3>Reservation Details</h3>
                <p>
                  <strong>Date:</strong> {bookingData.date}
                </p>
                <p>
                  <strong>Time:</strong> {bookingData.time}
                </p>
                <p>
                  <strong>Guests:</strong> {bookingData.guests}
                </p>
                <p>
                  <strong>Occasion:</strong> {bookingData.occasion}
                </p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="next-steps">
              <h3>What's Next?</h3>
              <div className="steps-grid">
                <div className="step-card">
                  <div className="step-icon">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#495e57"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <h4>Find Us</h4>
                  <p>
                    Located in the heart of Chicago, we're easy to find and
                    accessible by public transport.
                  </p>
                </div>

                <div className="step-card">
                  <div className="step-icon">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#495e57"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                  </div>
                  <h4>Arrive on Time</h4>
                  <p>
                    Please arrive 10 minutes before your reservation time to
                    ensure the best seating experience.
                  </p>
                </div>

                <div className="step-card">
                  <div className="step-icon">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#495e57"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h4>Enjoy Your Meal</h4>
                  <p>
                    Our chefs are preparing to serve you the finest
                    Mediterranean cuisine in Chicago.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="contact-info">
              <h3>Need to Make Changes?</h3>
              <p>
                If you need to modify or cancel your reservation, please contact
                us at least 2 hours in advance.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <strong>Phone:</strong> (312) 555-0123
                </div>
                <div className="contact-item">
                  <strong>Email:</strong> reservations@littlelemon.com
                </div>
                <div className="contact-item">
                  <strong>Address:</strong> 123 Citrus Avenue, Chicago, IL 60601
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="confirmation-actions">
              <button className="primary-btn" onClick={() => navigate("/")}>
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConfirmedBooking;
