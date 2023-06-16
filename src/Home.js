import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import Style from './Style';

import Products from './Products';

const Home = () => {
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
          <Products />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
