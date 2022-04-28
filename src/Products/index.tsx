import { useParams } from 'react-router-dom';
import Item from '../Item';
import { LinearProgress, Grid } from '@mui/material';
import { useProducts } from '../api';
import { ProductsProps } from '../types';

const Products: React.FC<ProductsProps> = ({  addToCart }) => {
  let { category = '' } = useParams();
  const { data, isLoading, error } = useProducts(category);

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <Grid container spacing={3}>
      {data?.map((item) => (
        <Grid item key={item.id} xs={12} sm={4}>
          <Item item={item} addToCart={addToCart} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
