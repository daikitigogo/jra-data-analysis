import { makeStyles } from '@material-ui/core';
import { sidebarWidth, breakpointUp } from '../env';

const useStyles = makeStyles(theme => ({
  toolbar: {
    ...theme.mixins.toolbar
  },
  drawer: {
    [theme.breakpoints.up(breakpointUp)]: {
      width: sidebarWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: sidebarWidth,
  }
}));

export default useStyles;
