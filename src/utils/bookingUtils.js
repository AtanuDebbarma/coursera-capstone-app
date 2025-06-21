export const validateForm = ({ date, time, guests, occasion }) => {
  if (!date || !time || !guests || !occasion) return "missing";
  if (guests < 1 || guests > 10) return "invalidGuests";
  return "valid";
};
