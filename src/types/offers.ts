import { OfferTypes } from '../const';
import { Cities, City } from './city';
import { User } from './user';

export type OfferType = typeof OfferTypes[keyof typeof OfferTypes];

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Offer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type Host = Omit<User, 'email' | 'token'>;

export type Details = {
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
}


export type OfferDetails = Omit<Offer, 'previewImage'> & Details;

export type GroupOfferByCity = {
  city: City;
  offers: Offer[];
}

export type GroupOfferByCityObject = { [key in Cities]?: GroupOfferByCity }

export type GroupOfferDetailsById = {
  [key: string]: OfferDetails;
}
