import { makeStyles } from '@material-ui/core';
import { sidebarWidth, breakpointUp } from '../env';

const useStyles = makeStyles(theme => ({
  appbar: {
    [theme.breakpoints.up(breakpointUp)]: {
      width: `calc(100% - ${sidebarWidth}px)`,
      marginLeft: sidebarWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(breakpointUp)]: {
      display: 'none',
    },
  },
}));

export default useStyles;
