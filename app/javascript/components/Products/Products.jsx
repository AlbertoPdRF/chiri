import React, { useState, useEffect, Fragment } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import { getProducts } from '../../logic/api';
import { groupProducts } from '../../logic/utils';

import ProductCard from '../ProductCard/ProductCard';
import ErrorSnackbar from '../ErrorSnackbar/ErrorSnackbar';

import Style from '../Style/Style';

const Products = () => {
  const style = Style();

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then((products) => setProducts(groupProducts(products)))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Fragment>
      {loading && <LinearProgress />}
      <div className={style.root}>
        <Grid container direction="column" alignItems="center" spacing={2}>
          {/*<Grid item>
            <Typography variant="h2" component="h1">
              Carta
            </Typography>
          </Grid>*/}
          <Grid item>
            {products
              ?.sort((a, b) => -b.category.localeCompare(a.category))
              .map((productsGroup) => (
                <ExpansionPanel key={productsGroup.category}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    {productsGroup.category}
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Grid container justify="center" spacing={2}>
                      {productsGroup.products
                        //.sort((a, b) => -b.name.localeCompare(a.name))
                        .map((product) => (
                          <Grid item key={product.id} md={4} sm={6} xs={12}>
                            <ProductCard product={product} />
                          </Grid>
                        ))}
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              ))}
          </Grid>
        </Grid>
      </div>
      {error && <ErrorSnackbar error={error} />}
    </Fragment>
  );
};

export default Products;
