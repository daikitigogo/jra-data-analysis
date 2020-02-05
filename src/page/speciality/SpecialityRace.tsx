import React from 'react';
import { Box, makeStyles, List } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
  },
  inner: {
    paddingLeft: theme.spacing(2)
  } 
}));

interface SpecialityRaceProps {
  place: string;
  date: string;
};

const SpecialityRace: React.FC<RouteComponentProps<SpecialityRaceProps>> = (props) => {

  const classes = useStyles();
  const { place, date } = props.match.params;

  return (
    <List className={classes.root} subheader={<li />}>
      {['2019年4月10日 阪神', '2018年4月10日 阪神', '2017年4月10日 阪神'].map(v => (
        <div />
      ))}
    </List>
  );
};

export default SpecialityRace;
