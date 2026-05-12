export interface Destination {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
  rating: number;
  days: number;
  description: string;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}