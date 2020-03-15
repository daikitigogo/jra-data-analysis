import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(2)
  },
  formControl: {
    marginRight: theme.spacing(2),
    minWidth: 150
  },
  container: {
    height: '65vh'
  },
  th: {
  },
  title: {
    flex: '1 1 100%',
    color: theme.palette.primary.main
  },
  test: {
    '& > div': {
      width: 300
    }
  }
}));
