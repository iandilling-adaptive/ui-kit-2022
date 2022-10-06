import { Divider, Grid, Typography } from '@mui/material';
import * as React from 'react';

import FontMerriweatherExamples from './font-merriweather-examples';
import FontRobotoExamples from './font-roboto-examples';
import TextSample from './text-sample';
import TypeCard from './type-card';
import TypographyTop from './typography-top';
const TYPE_CARD_REGULAR_PROPS = {
  title: 'REGULAR',
  letter: 'Aa',
  fontFamily: 'Roboto',
  fontWeight: '400',
  fontStyle: 'normal',
};

const TYPE_CARD_MEDIUM_PROPS = {
  ...TYPE_CARD_REGULAR_PROPS,
  title: 'MEDIUM',
  fontWeight: '500',
};

const TYPE_CARD_LIGHT_ITALIC_PROPS = {
  ...TYPE_CARD_REGULAR_PROPS,
  title: 'LIGHT ITALIC',
  fontWeight: '300',
  fontStyle: 'italic',
};

const TYPE_CARD_REGULAR_MERRIWEATHER_PROPS = {
  ...TYPE_CARD_REGULAR_PROPS,
  fontFamily: 'Merriweather',
};

const Types: React.FunctionComponent = () => {
  return (
    <Grid container sx={{ bgcolor: '#323232', height: '100%' }}>
      <Grid item xs={12}>
        <TypographyTop title={'TYPES'} />
      </Grid>
      <Grid
        container
        sx={{ marginLeft: '1rem', marginTop: '2rem', marginBottom: '5rem' }}
        rowGap={1}
      >
        <Grid item md={5} xs={12}>
          <TextSample fontName="roboto" />
        </Grid>
        <Grid item md={2} sm={4} xs={12}>
          <TypeCard {...TYPE_CARD_REGULAR_PROPS} />
        </Grid>
        <Grid item md={2} sm={4} xs={12}>
          <TypeCard {...TYPE_CARD_MEDIUM_PROPS} />
        </Grid>
        <Grid item md={2} sm={4} xs={12}>
          <TypeCard {...TYPE_CARD_LIGHT_ITALIC_PROPS} />
        </Grid>
        <Grid item md={12} xs={12}>
          <Typography sx={{ color: '#FFFFFF' }}>Examples</Typography>
        </Grid>
        <Grid item xs={12}>
          <FontRobotoExamples />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider color={'#FFFFFF'} variant="middle" />
      </Grid>
      <Grid
        container
        sx={{ marginLeft: '1rem', marginTop: '2rem', marginBottom: '3rem' }}
        rowGap={1}
      >
        <Grid item md={5} xs={12}>
          <TextSample fontName="merriweather" />
        </Grid>
        <Grid item md={2} sm={4} xs={12}>
          <TypeCard {...TYPE_CARD_REGULAR_MERRIWEATHER_PROPS} />
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ color: '#FFFFFF' }}>Examples</Typography>
        </Grid>
        <Grid item xs={12}>
          <FontMerriweatherExamples />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Types;
