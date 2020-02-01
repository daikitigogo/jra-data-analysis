import React from 'react';
import { Container, CssBaseline, makeStyles, Box } from "@material-ui/core";
import Header from "./Header";
import Sidebar from './Sidebar';
import TopPage from '../page/TopPage';

const useStyles = makeStyles(theme => ({
  toolbar: {
    ...theme.mixins.toolbar
  }
}));

const App: React.FC = () => {

  const classes = useStyles();

  return (
    <Container>
      <Box display="flex">
        <CssBaseline />
        <Header />
        <Sidebar />
        <div className={classes.toolbar} />
        <Box flexGrow={1}>
          <TopPage match={{params: {title: 'HelloWorld!'}}} />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
