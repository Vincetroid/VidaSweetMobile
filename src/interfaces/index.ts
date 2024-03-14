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

export interface UserItem {
  userName: string;
  email: string;
  password: string;
}

export interface CountryPhoneCodeItem {
  code: string;
  dial_code: string;
  flag: string;
  name: string;
}

export interface AddressItem {
  id: string;
  addressName: string;
  street: string;
  exteriorNumber: string;
  interiorNumber: string;
  colonia: string;
  municipality: string;
  state: string;
  zipCode: string;
  countryPhoneCode: string;
  phoneNumber: string;
  specialIndications: string;
  isFavorite: boolean;
  fullAddress: string;
}
