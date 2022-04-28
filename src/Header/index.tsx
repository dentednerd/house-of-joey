import { Link } from 'react-router-dom';
import { IconButton, Badge } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { StyledHeader } from './Header.styles';
import { HeaderProps } from '../types';
import { useCategories } from '../api';

const Header: React.FC<HeaderProps> = ({ setIsCartOpen, getTotalItems, cartItems }) => {
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
