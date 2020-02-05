import React from 'react';
import { Container, CssBaseline, Box } from "@material-ui/core";
import Header from "./Header";
import Sidebar from './Sidebar';
import useStyles from '../style/AppStyle';
import { useDispatch } from 'react-redux';
import { updateSysdate } from "../store/DomainState";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopPage from '../page/TopPage';
import SpecialityRace from '../page/speciality/SpecialityRace';

const App: React.FC = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  dispatch(updateSysdate());

  return (
    <Container maxWidth={false} className={classes.root}>
      <Router>
        <CssBaseline />
        <Header />
        <Sidebar />
        <Box component="div" className={classes.content}>
          <div className={classes.toolbar} />
          <Route path="/" component={TopPage} exact />
          <Route path="/speciality/:place/:date" component={SpecialityRace} exact />
        </Box>
      </Router>
    </Container>
  );
}

export default App;
