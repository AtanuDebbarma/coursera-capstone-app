import { render, screen } from "@testing-library/react";
import { BookingsForm } from "../components/subComponents.js/BookingsForm";

test("Renders the 'Choose date' label in BookingForm", () => {
  render(
    <BookingsForm
      date=""
      setDate={() => {}}
      time=""
      setTime={() => {}}
      guests={1}
      setGuests={() => {}}
      occasion=""
      setOccasion={() => {}}
      availableTimes={[]}
      dispatchTimes={() => {}}
      handleSubmit={() => {}}
    />
  );
  const dateLabel = screen.getByLabelText("Choose date");
  expect(dateLabel).toBeInTheDocument();
});
