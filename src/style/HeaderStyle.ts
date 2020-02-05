import { makeStyles } from '@material-ui/core';
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

export default useStyles;
