export interface IRestaurant {
  id: number;
  name: string;
  dishes: [];
}

export interface IDish {
  id: number;
  name: string;
  price: number;
  description: string;
  quantityInCart: number;
}
