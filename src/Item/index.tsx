import Button from '@mui/material/Button';
import { ItemProps } from '../types';
import { Wrapper } from './Item.styles';

const Item: React.FC<ItemProps> = ({ item, addToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price.toFixed(2)}</h3>
    </div>
    <Button onClick={() => addToCart(item)}>Add to cart</Button>
  </Wrapper>
);

export default Item;
