// bookingUtils.test.js
import { initializeTimes, updateTimes } from "../utils/bookingUtils";
import { fetchAPI } from "../capstone_main_api";

// Mock fetchAPI
jest.mock("../capstone_main_api", () => ({
  fetchAPI: jest.fn(),
}));

describe("initializeTimes", () => {
  test("returns available times from fetchAPI", () => {
    // Arrange
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValue(mockTimes);

    // Act
    const result = initializeTimes();

    // Assert
    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockTimes);
  });
});

describe("updateTimes", () => {
  test("returns available times for given date", () => {
    // Arrange
    const mockTimes = ["17:00", "18:00", "19:00"];
    const action = { type: "UPDATE", date: "2025-06-21" };
    fetchAPI.mockReturnValue(mockTimes);

    // Act
    const result = updateTimes([], action);

    // Assert
    expect(fetchAPI).toHaveBeenCalledWith(new Date("2025-06-21"));
    expect(result).toEqual(mockTimes);
  });

  test("returns current state if date is missing", () => {
    const state = ["17:00"];
    const action = {};
    const result = updateTimes(state, action);

    expect(result).toEqual(state);
    expect(fetchAPI).not.toHaveBeenCalled();
  });
});
