export interface IRestaurant {
  id: number;
  name: string;
  dishes: [];
  photoName: string;
}

export interface IDish {
  id: number;
  name: string;
  price: number;
  description: string;
  quantityInCart: number;
  photoName: string;
}
