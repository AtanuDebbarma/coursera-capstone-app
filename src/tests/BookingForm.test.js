import { render, screen } from "@testing-library/react";
import { BookingsForm } from "../components/subComponents.js/BookingsForm";

describe("HTML5 validation attributes in BookingsForm", () => {
  const props = {
    date: "",
    setDate: jest.fn(),
    time: "",
    setTime: jest.fn(),
    guests: 1,
    setGuests: jest.fn(),
    occasion: "",
    setOccasion: jest.fn(),
    availableTimes: ["18:00", "19:00"],
    handleSubmit: jest.fn(),
  };

  test("date input has required and min attributes", () => {
    render(<BookingsForm {...props} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute("min");
  });

  test("time select has required attribute", () => {
    render(<BookingsForm {...props} />);
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toHaveAttribute("required");
  });

  test("guests input has required, min and max attributes", () => {
    render(<BookingsForm {...props} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("occasion select has required attribute", () => {
    render(<BookingsForm {...props} />);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute("required");
  });
});
