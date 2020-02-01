import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch, useSelector } from "react-redux";
import { setSidebarOpen } from '../store/UIState';
import { RootState } from '../store';

export interface HeaderProps { };

const Header: React.FC<HeaderProps> = (props) => {

  const dispatch = useDispatch();
  const title = useSelector((state: RootState) => state.domain.title);
  const handleClick = () => {
    dispatch(setSidebarOpen());
  };

  return (
    <AppBar>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h5">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
