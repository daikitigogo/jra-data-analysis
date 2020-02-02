import React from 'react';
import { Container, CssBaseline, Box } from "@material-ui/core";
import Header from "./Header";
import Sidebar from './Sidebar';
import useStyles from '../style/AppStyle';
import { useDispatch } from 'react-redux';
import { updateSysdate } from "../store/DomainState";

const App: React.FC = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  dispatch(updateSysdate());

  return (
    <Container className={classes.root}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <Box component="div" className={classes.content}>
        <div className={classes.toolbar} />
        Hello World!<br />
        Hello World!<br />
        Hello World!<br />
        Hello World!<br />
        Hello World!<br />
        Hello World!<br />
        Hello World!<br />
        Hello World!<br />
        Hello World!<br />
        Hello World!
      </Box>
    </Container>
  );
}

export default App;
