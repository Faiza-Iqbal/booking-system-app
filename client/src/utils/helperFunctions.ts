// lib
import { User } from "@auth0/auth0-react";

// src
import { TourDetailType } from "../store/tourDetails/types";

export const getTourDays = (checkin?: string, checkout?: string) => {
  if (!checkin || !checkout) return `5`;

  const checkInDate = new Date(checkin);
  const checkOutDate = new Date(checkout);

  const duration = Math.round(
    (+checkOutDate - +checkInDate) / (1000 * 60 * 60 * 24)
  );

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

export const setCurrentUser = (user: User) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("user");

  if (user) return JSON.parse(user);

  return null;
};

export const removeCurrentUser = () => {
  return localStorage.removeItem("user");
};

export const setStoredTourDetail = (tour: TourDetailType) => {
  localStorage.setItem("tourDetail", JSON.stringify(tour));
};

export const getStoredTourDetail = () => {
  const tourDetail = localStorage.getItem("tourDetail");
  if (tourDetail) return JSON.parse(tourDetail);

  return null;
};

export const getDestinationName = (location: string) => {
  if (location && location.includes(", ")) {
    const splittedLocation = location?.split(", ");
    return splittedLocation[splittedLocation.length - 1];
  }

  return "--";
};
