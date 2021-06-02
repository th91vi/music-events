const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", options);
};

export default formatDate;
