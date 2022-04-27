import { useParams } from 'react-router-dom';

// Components
import Item from '../Item';
import { LinearProgress, Grid } from '@mui/material';

// API
import { useProducts } from '../api';

// Types
import { CartItemType } from '../types';

type Props = {
  handleAddToCart: (clickedItem: CartItemType) => void;
}

const Products: React.FC<Props> = ({  handleAddToCart }) => {
  let { category = '' } = useParams();
  const { data, isLoading, error } = useProducts(category);

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <Grid container spacing={3}>
      {data?.map((item) => (
        <Grid item key={item.id} xs={12} sm={4}>
          <Item item={item} handleAddToCart={handleAddToCart} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
