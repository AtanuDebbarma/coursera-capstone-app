import { validateForm } from "../utils/bookingUtils";
describe("validateForm function", () => {
  test("returns 'missing' when fields are empty", () => {
    const result = validateForm({
      date: "",
      time: "",
      guests: 0,
      occasion: "",
    });
    expect(result).toBe("missing");
  });

  test("returns 'invalidGuests' when guests < 1", () => {
    const result = validateForm({
      date: "2025-06-30",
      time: "18:00",
      guests: -1, // ✅ changed from 0 to -1
      occasion: "Birthday",
    });
    expect(result).toBe("invalidGuests");
  });

  test("returns 'invalidGuests' when guests > 10", () => {
    const result = validateForm({
      date: "2025-06-30",
      time: "18:00",
      guests: 11,
      occasion: "Anniversary",
    });
    expect(result).toBe("invalidGuests");
  });

  test("returns 'valid' when all inputs are valid", () => {
    const result = validateForm({
      date: "2025-06-30",
      time: "18:00",
      guests: 4,
      occasion: "Birthday",
    });
    expect(result).toBe("valid");
  });
});
