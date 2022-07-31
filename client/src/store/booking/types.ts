export type BookingType = {
  _id?: string;
  name: string;
  email: string;
  phoneNo: string;
  numOfAdults?: string;
  numOfChilds?: string;
  paymentMethod: string;
  tourId?: string | null;
  userEmail?: string;
  [key: string]: any;
};

export type UpdateBooking = {
  id?: string;
  data: BookingType;
};

export type BookingStateType = {
  booking: BookingType;
  status: string;
  error: boolean | null;
};
