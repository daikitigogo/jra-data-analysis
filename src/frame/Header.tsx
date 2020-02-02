import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from "react-redux";
import { setSidebarOpen } from '../store/UIState';
import useStyles from '../style/HeaderStyle';
import { appTitle } from "../env";

const Header: React.FC = () => {

  const classes = useStyles();

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setSidebarOpen());
  };

  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick} className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          {appTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
