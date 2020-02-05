import { makeStyles } from '@material-ui/core';
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

export default useStyles;
