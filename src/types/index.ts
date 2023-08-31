export interface ProductItem {
  id: string;
  img: number;
  title: string;
  price: number;
  isFavorite: boolean;
  quantity?: number | undefined;
}

export interface MenuElementItem {
  img: number;
  title: string;
}
