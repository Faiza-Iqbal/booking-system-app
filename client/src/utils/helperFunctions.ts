export const getTourDays = (
  checkin: string | undefined,
  checkout: string | undefined
) => {
  if (!checkin || !checkout) return;
  const checkInDate = new Date(checkin);
  const checkOutDate = new Date(checkout);
  const duration = Math.round(
    (+checkOutDate - +checkInDate) / (1000 * 60 * 60 * 24)
  );
  console.log("duration", duration);

  return duration;
};

export const goToRoute = (url: string, param?: string | number) => {
  let pageUrl = url;
  if (param) pageUrl = `${url}/${param}`;
  return pageUrl;
};

export const getMonthFromDateObj = (date: Date) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayMonthFormat = {
    stringFormat: `${date.getDate()} ${monthNames[date.getMonth()]}`,
    objectFormat: date,
  };
  return dayMonthFormat;
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};
