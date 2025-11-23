export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  oldPrice?: number;
  desc?: string;
  images?: string[];
  specs?: string[];
  techSpecs?: { name: string; items: { label: string; value: string }[] }[];
}
