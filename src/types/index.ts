export type CartItemType = {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount: number,
}

export type AddRemoveCart = {
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

export type ItemProps = {
  item: CartItemType,
  addToCart: (clickedItem: CartItemType) => void;
}

export interface CartProps extends AddRemoveCart {
  cartItems: CartItemType[];
}

export interface CartItemProps extends AddRemoveCart {
  item: CartItemType;
}

export type HeaderProps = {
  setIsCartOpen: (isCartOpen: boolean) => void;
  getTotalItems: (items: CartItemType[]) => number;
  cartItems: CartItemType[]
}

export type ProductsProps = {
  addToCart: (clickedItem: CartItemType) => void;
}
