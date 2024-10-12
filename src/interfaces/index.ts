// TODO: Import correctly
import { Timestamp } from 'firebase/firestore';

export interface ProductItem {
  docId: string;
  img: string;
  title: string;
  price: number;
  stock: number;
  isFavorite?: boolean; // esta a lo mejor se va a otra tabla
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
  names: string;
  surnames: string;
  email: string;
  password?: string;
}

export interface OrderItem {
  orderId: string;
  userId: string;
  address_id: string;
  createTimestamp: Timestamp;
  updateTimestamp?: Timestamp;
  deliverySchedule: Date; // Por ahora así en Date, puede que sea otro de acuerdo a ScheduleScreen. Cabe mencionar que quizá los tiempos y horarios se puedan pasar a una tabla diferente pero me gusta por aqui ahora. Suena hermoso el hecho de que en tu orden viene le fecha de entrega.
  // Ver después que otros datos podrían estar aqui
}

export interface CountryPhoneCodeItem {
  code: string;
  dial_code: string;
  flag: string;
  name: string;
}

export interface AddressItem {
  docId: string;
  addressName: string;
  street: string;
  exteriorNumber: string;
  interiorNumber?: string;
  colonia: string;
  municipality: string;
  state: string;
  zipCode: string;
  countryPhoneCode: string;
  phoneNumber: string;
  specialIndications: string;
  isCurrent: boolean;
  isEdit?: boolean;
  fullAddress: string;
  // createTimestamp: Date;
  // updateTimestamp?: Date;
  createTimestamp: Timestamp;
  updateTimestamp?: Timestamp;
  // createTimestamp?: Timestamp;
  // updateTimestamp?: Timestamp;
}

export interface AddressValidatorItem {
  addressName: string;
  street: string;
  exteriorNumber: string;
  interiorNumber?: string;
  colonia: string;
  municipality: string;
  state: string;
  zipCode: string;
  countryPhoneCode: string;
  phoneNumber: string;
  specialIndications: string;
}

export interface ChangePasswordItem {
  currentPassword?: string;
  newPassword?: string;
  confirmNewPassword?: string;
}
