import { useQuery } from 'react-query';

// Components
import { IconButton, Badge } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

// Styles
import { StyledHeader } from './Header.styles';

// Types
import { CartItemType } from '../App';

// API

import { getCategories } from '../api';

type Props = {
  setIsCartOpen: (isCartOpen: boolean) => void;
  getTotalItems: (items: CartItemType[]) => number;
  cartItems: CartItemType[]
}

const Header: React.FC<Props> = ({ setIsCartOpen, getTotalItems, cartItems }) => {
  const { data } = useQuery<string[]>('categories', getCategories);

  return (
    <StyledHeader>
      <h1>House of Joey</h1>
      {data?.map((category) => (
        <p key={category}>{category}</p>
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
