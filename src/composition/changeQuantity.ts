import { IDish } from "@/typescript/interfaces";

export function useChangeQuantity() {
  const addQuantity = (dish: IDish) => {
    dish.quantityInCart++;
  };
  const reduceQuantity = (dish: IDish) => {
    dish.quantityInCart--;
  };

  return { addQuantity, reduceQuantity };
}
