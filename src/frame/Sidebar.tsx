import React from 'react';
import LoopedListItem, { LoopedListItemProps } from '../shared/component/LoopedListItem';
import { Divider, List, makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setSidebar } from '../store/DomainState';
import { setSidebarOpen } from '../store/UIState';
import ResponsiveDrawer from '../shared/component/ResponsiveDrawer';
import { useRequest } from '../shared/hook/CustomHooks';
import { sidebarWidth, breakpoint } from '../constants';

const useStyles = makeStyles(theme => ({
  toolbar: {
    ...theme.mixins.toolbar
  },
  drawer: {
    [theme.breakpoints.up(breakpoint.point)]: {
      width: sidebarWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: sidebarWidth,
  }
}));

export default () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const [sidebar, sidebarOpen] = useSelector((state: RootState) => [state.domain.sidebar, state.ui.sidebarOpen]);
  useRequest('/json/menu.json', setSidebar);
  
  const handleClose = () => dispatch(setSidebarOpen());

  return (
    <ResponsiveDrawer open={sidebarOpen} onClose={handleClose} classes={classes}>
      <div className={classes.toolbar} />
      <Divider />
      <List
        component="nav"
        disablePadding
      >
        {sidebar.items.map((item: LoopedListItemProps) => <LoopedListItem key={item.text} pl={0} {...item} />)}
      </List>
    </ResponsiveDrawer>
  );
};
