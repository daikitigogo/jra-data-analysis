import React from 'react';
import { Hidden, Drawer, makeStyles, Theme } from '@material-ui/core';

interface ResponsiveDrawerProps<T> {
  open: boolean;
  onClose: () => void;
  children: any;
  useStyles: (theme: Theme) => {
    drawer: any;
    paper: any;
  };
};

const ResponsiveDrawer = <T extends {}>(props: ResponsiveDrawerProps<T>) => {

  const classes = makeStyles(props.useStyles)();

  return (
    <nav className={classes.paper}>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          open={props.open}
          onClose={props.onClose}
          classes={{
            paper: classes.drawer,
          }}
        >
          {props.children}
          Hello Temporary!
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.paper,
          }}
          variant="permanent"
          open
        >
          {props.children}
          Hello Permanent!
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default ResponsiveDrawer;
