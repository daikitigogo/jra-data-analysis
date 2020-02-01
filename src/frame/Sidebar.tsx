import React, { useEffect } from 'react';
import { LoopedListItemProps, LoopedListItem } from '../shared/component/LoopedListItem';
import { Drawer, Divider, List, Box } from '@material-ui/core';
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setSidebarMenu } from '../store/DomainState';
import { setSidebarOpen } from '../store/UIState';
import ResponsiveDrawer from '../shared/component/ResponsiveDrawer';

const useStyles = makeStyles(theme => ({
  toolbar: {
      ...theme.mixins.toolbar
  },
  drawerWidth: {
    width: 360
  }
}));

const childStyles = (theme: Theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 360,
      flexShrink: 0,
    }
  },
  paper: {
    width: 360,
  }
});

export interface SidebarProps { };

const Sidebar: React.FC<SidebarProps> = (props) => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const sidebarMenu = useSelector((state: RootState) => state.domain.sidebarMenu);
  const sidebarOpen = useSelector((state: RootState) => state.ui.sidebarOpen);
  useEffect(() => {
    sidebarMenu.items && fetch('/json/menu.json')
      .then(rsp => rsp.json())
      .then(
        success => {
          dispatch(setSidebarMenu(success));
        },
        error => console.log(error)
    );
  });
  
  const handleClose = () => {
    dispatch(setSidebarOpen());
  };
  return (
    <ResponsiveDrawer open={sidebarOpen} onClose={handleClose} useStyles={childStyles}>
      <div className={classes.toolbar} />
      <Divider />
      <List
        component="nav"
        className={classes.drawerWidth}
        disablePadding
      >
        {sidebarMenu.items.map((item: LoopedListItemProps) => <LoopedListItem key={item.text} pl={0} {...item} />)}
      </List>
    </ResponsiveDrawer>
  );
/*
  return (
    <Drawer
      open={sidebarOpen}
      onClose={handleClose}
    >
      <div className={classes.toolbar} />
      <Divider />
      <List
        component="nav"
        className={classes.drawerWidth}
        disablePadding
      >
        {sidebarMenu.items.map((item: LoopedListItemProps) => <LoopedListItem key={item.text} pl={0} {...item} />)}
      </List>
    </Drawer>
  );
*/
};

export default Sidebar;
