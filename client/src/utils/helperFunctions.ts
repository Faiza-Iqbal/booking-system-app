export const getTourDays = (checkin: string, checkout: string) => {
  const checkIn = new Date(checkin);
  const checkOut = new Date(checkout);
  return "";
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
