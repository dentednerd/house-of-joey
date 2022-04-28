import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Products from './Products';
import Cart from './Cart';
import Header from './Header';
import { Drawer } from '@mui/material';

// Styles
import { Wrapper } from './App.styles';

// Types
import { CartItemType } from './types';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);


  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount, 0);

  const addToCart = (clickedItem: CartItemType) => {
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

  return (
    <Wrapper>
      <Header
        setIsCartOpen={setIsCartOpen}
        getTotalItems={getTotalItems}
        cartItems={cartItems}
      />
      <Drawer anchor="right" open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>

      <main>
        <Routes>
          <Route path="/" element={<Products  addToCart={addToCart} />} />
          <Route path="/:category" element={< Products addToCart={addToCart} />} />
        </Routes>
      </main>
    </Wrapper>
  );
}

export default App;
