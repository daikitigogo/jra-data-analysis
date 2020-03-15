import React from 'react';
import LoopedListItem, { Props as LoopedListItemProps } from '../shared/component/LoopedListItem';
import CloseIcon from '@material-ui/icons/Close';
import { Divider, List, makeStyles, IconButton } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setSidebar } from '../store/DomainState';
import { setSidebarOpen } from '../store/UIState';
import ResponsiveDrawer from '../shared/component/ResponsiveDrawer';
import { useRequest } from '../shared/hook';
import { sidebarWidth, breakpoint } from '../constants';

const useStyles = makeStyles(theme => ({
  toolbar: {
    ...theme.mixins.toolbar,
    marginRight: theme.spacing(0.5),
    display: 'flex',
    justifyContent: 'flex-end',
  },
  drawer: {
    [theme.breakpoints.up(breakpoint.point)]: {
      width: sidebarWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: sidebarWidth,
  },
  closeIcon: {
    [theme.breakpoints.up(breakpoint.point)]: {
      display: 'none',
    },
    color: theme.palette.primary.main,
  },
}));

export default () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const [sidebar, sidebarOpen] = useSelector((state: RootState) => [state.domain.sidebar, state.ui.sidebarOpen]);
  useRequest('/json/menu.json', setSidebar);
  
  const handleClose = () => dispatch(setSidebarOpen());
  const handleLinkClick = (props: LoopedListItemProps) => props.link && dispatch(setSidebarOpen());

  return (
    <ResponsiveDrawer open={sidebarOpen} onClose={handleClose} classes={classes}>
      <div className={classes.toolbar}>
        <IconButton edge="start" className={classes.closeIcon} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />
      <List
        component="nav"
        disablePadding
      >
        {sidebar.items.map((item: LoopedListItemProps) => <LoopedListItem key={item.text} pl={0} onClick={handleLinkClick} {...item} />)}
      </List>
    </ResponsiveDrawer>
  );
};
