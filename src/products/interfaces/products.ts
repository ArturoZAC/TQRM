export interface Product {
  id         : number;
  title      : string;
  price      : number;
  description: string;
  category   : string;
  image      : string;
  rating?    : Rating;
}

export type ProductLike = Omit<Product, "rating" | "id"> & Partial<Pick<Product,"id">>;

export interface Rating {
  rate : number;
  count: number;
}
