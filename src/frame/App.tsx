import React from 'react';
import { Container, CssBaseline, Box, makeStyles } from "@material-ui/core";
import Header from "./Header";
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopPage from '../page/TopPage';
import SpecialityRace from '../page/speciality';
import { sidebarWidth } from '../constants';
import { useDefaultStyles } from '../shared/hook';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    width: `calc(100% - ${sidebarWidth}px)`,
    padding: theme.spacing(2)
  }
}));

export default () => {

  const classes = useStyles();
  useDefaultStyles();

  return (
    <Container maxWidth={false} className={classes.root}>
      <Router>
        <CssBaseline />
        <Header />
        <Sidebar />
        <Box component="div" className={classes.content}>
          <div className={classes.toolbar} />
          <Route path="/" component={TopPage} exact />
          <Route path="/speciality/:raceDate" component={SpecialityRace} exact />
        </Box>
      </Router>
    </Container>
  );
}
