import React from 'react';
import { Hidden, Drawer } from '@material-ui/core';
import { breakpoint } from "../../constants";

interface ResponsiveDrawerProps<T> {
  open: boolean;
  onClose: () => void;
  children: any;
  classes: {
    drawer: string;
    drawerPaper: string;
  };
};

const ResponsiveDrawer = <T extends {}>(props: ResponsiveDrawerProps<T>) => {

  const classes = props.classes;

  return (
    <nav className={classes.drawer}>
      <Hidden {...breakpoint.upAttr} implementation="css">
        <Drawer
          variant="temporary"
          open={props.open}
          onClose={props.onClose}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true
          }}
        >
          {props.children}
        </Drawer>
      </Hidden>
      <Hidden {...breakpoint.downAttr} implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {props.children}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default ResponsiveDrawer;
