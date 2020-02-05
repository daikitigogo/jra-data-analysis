import React from 'react';
import { Typography } from '@material-ui/core';
import { appTitle } from '../constants';

const TopPage: React.FC = () => {
  return (
    <Typography variant="h2">
      {appTitle}
    </Typography>
  );
};

export default TopPage;
