import { fetchAPI } from "../capstone_main_api";

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today); // uses global API function
};

export const updateTimes = (state, action) => {
  if (!action?.date) return state;

  const newDate = new Date(action.date);
  return fetchAPI(newDate);
};
