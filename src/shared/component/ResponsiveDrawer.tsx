import React from 'react';
import { Hidden, Drawer } from '@material-ui/core';
import { breakpoint } from "../../constants";

type ResponsiveDrawerProps = {
  open: boolean;
  onClose: () => void;
  children: any;
  classes: {
    drawer?: string;
    drawerPaper?: string;
  };
};

export default (props: ResponsiveDrawerProps) => {

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
