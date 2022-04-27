import { Link } from 'react-router-dom';

// Components
import { IconButton, Badge } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

// Styles
import { StyledHeader } from './Header.styles';

// Types
import { CartItemType } from '../types';

// API

import { useCategories } from '../api';

type Props = {
  setIsCartOpen: (isCartOpen: boolean) => void;
  getTotalItems: (items: CartItemType[]) => number;
  cartItems: CartItemType[]
}

const Header: React.FC<Props> = ({ setIsCartOpen, getTotalItems, cartItems }) => {
  const { data } = useCategories();

  return (
    <StyledHeader>
      <Link to="/">
        <h1>House of Joey</h1>
      </Link>
      {data?.map((category) => (
        <Link key={category} to={`/${category}`}>{category}</Link>
      ))}
      <IconButton onClick={() => setIsCartOpen(true)}>
        <Badge
          badgeContent={getTotalItems(cartItems)} color="error"
        >
          <AddShoppingCart color="primary" fontSize="large" />
        </Badge>
      </IconButton>
    </StyledHeader>
  )
}

export default Header;
