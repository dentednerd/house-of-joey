import axios from 'axios';
import { useQuery } from 'react-query';
import { CartItemType } from '../types';

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json"
  }
})

export const useProducts = (category: string) => useQuery(
  ["products", category],
  async (): Promise<CartItemType[]> => {
    let queryString = '/products';
    if (category) queryString = `/products/category/${category}`;
    const { data } = await api.get(queryString);
    return data;
  }
);

export const useCategories = () => useQuery(
  "categories",
  async (): Promise<string[]> => {
    const { data } = await api.get('/products/categories');
    return data;
  }
);
