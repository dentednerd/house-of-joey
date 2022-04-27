import { CartItemType } from '../App';

export const getProducts = async (): Promise<CartItemType[]> =>
await (await fetch('https://fakestoreapi.com/products')).json();

export const getCategories = async (): Promise<string[]> => await (await fetch('https://fakestoreapi.com/products/categories')).json();
