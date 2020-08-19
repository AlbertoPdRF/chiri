import React from 'react';
// import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
// import Button from '@material-ui/core/Button';

import Style from '../Style/Style';

import Products from '../Products/Products';

const Home = () => {
  // const history = useHistory();
  const style = Style();

  return (
    <div className={style.root}>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="h1">Chiri</Typography>
        </Grid>
        <Grid item>
          <WbSunnyIcon color="primary" />
          <BeachAccessIcon color="primary" />
        </Grid>
        <Grid>
          {/*<Button
            variant="contained"
            color="primary"
            onClick={() => history.push('/products')}
          >
            Ver carta
          </Button>*/}
          <Products />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
