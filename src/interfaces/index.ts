export interface ProductItem {
  id: string;
  img: number;
  title: string;
  price: number;
  isFavorite: boolean;
}

export interface ProductCart extends ProductItem {
  quantity?: number | undefined;
  subtotal?: number | undefined;
}

export interface MenuElementItem {
  img: number;
  title: string;
}

export interface AddressItem {
  id: string;
  fullAddress: string;
  isEditable: boolean;
  isFavorite: boolean;
}
