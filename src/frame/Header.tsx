import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from "react-redux";
import { setSidebarOpen } from '../store/UIState';
import useStyles from '../style/HeaderStyle';
import { appTitle } from "../constants";
import RouterLink from "../shared/component/RouterLink";

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
        <RouterLink link="/" variant="h6" color="inherit" underline="none">
          {appTitle}
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
