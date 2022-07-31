export type DataType = {
  name: string;
  email: string;
  phoneNo: string;
  numOfAdults?: string;
  numOfChilds?: string;
  paymentMethod: string;
  tourId?: string;
  userEmail?: string;
};

export type FieldsType =
  | "name"
  | "email"
  | "phoneNo"
  | "numOfAdults"
  | "numOfChilds"
  | "paymentMethod"
  | "tourId";
