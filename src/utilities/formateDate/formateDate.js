export const formateDate = (dateString) => {
  const date = new Date(dateString);

  const options = { month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
};