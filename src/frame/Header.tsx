import React from 'react';
import { AppBar, Toolbar, IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from "react-redux";
import { setSidebarOpen } from '../store/UIState';
import { appTitle } from "../constants";
import RouterLink from "../shared/component/RouterLink";
import { sidebarWidth, breakpoint } from '../constants';

const useStyles = makeStyles(theme => ({
  appbar: {
    [theme.breakpoints.up(breakpoint.point)]: {
      width: `calc(100% - ${sidebarWidth}px)`,
      marginLeft: sidebarWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(breakpoint.point)]: {
      display: 'none',
    },
  },
}));

export default () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClick = () => dispatch(setSidebarOpen());

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
