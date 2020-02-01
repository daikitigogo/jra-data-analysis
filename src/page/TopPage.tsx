import React from 'react';
import { Typography, Box } from '@material-ui/core';

export interface TopPageProps {
  match: {
    params: {
      title: string;
    }
  }
};

const TopPage: React.FC<TopPageProps> = (props) => {
  return (
    <Box>
      <Typography variant="h4">
        {props.match.params.title}
      </Typography>
    </Box>
  );
};

export default TopPage;
