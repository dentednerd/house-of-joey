import { useState } from 'react';
import { useQuery } from 'react-query';

// Components
import Item from './Item/Item';
import Cart from './Cart/Cart';
import Header from './Header';
import {
  Drawer,
  LinearProgress,
  Grid
} from '@mui/material';

// API
import { getProducts } from './api';

// Styles
import { Wrapper } from './App.styles';

// Types
export type CartItemType = {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount: number,
}

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) => (
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1}
            : item
        ))
      }

      return [...prev, { ...clickedItem, amount: 1 }];
    })
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [ ...acc, { ...item, amount: item.amount - 1 }]
        } else {
          return [ ...acc, item ]
        }
      }, [] as CartItemType[])
    ))
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <Wrapper>
      <Header
        setIsCartOpen={setIsCartOpen} getTotalItems={getTotalItems}
        cartItems={cartItems}
      />
      <Drawer anchor="right" open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>

      <main>
        <Grid container spacing={3}>
          {data?.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </main>
    </Wrapper>
  );
}

export default App;
