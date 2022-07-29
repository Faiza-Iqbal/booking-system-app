export type Tour = {
  checkin: string;
  checkout: string;
  images: string[];
  price: string;
  title: string;
  publicAddress: string;
  id: string;
  _id?: string;
};

export type FiltersParam = {
  id?: string;
  priceMin?: number;
  priceMax?: number;
  checkin?: string;
  checkout?: string;
};
