import React from 'react';
import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const ProductCard = (props) => {
  const { product } = props;

  return (
    <Card>
      {/*<CardMedia
        component="img"
        alt={product.name}
        image=""
        title={product.name}
      />*/}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {product.description}
        </Typography>
        <Typography variant="body1">{`${product.price / 100} €`}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
