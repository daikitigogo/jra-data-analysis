import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, Theme } from '@material-ui/core';
import { setDefaultClasses } from '../../store/UIState';

export const useRequest = (url: string, action: (payload: any) => void) => {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(url)
      .then(rsp => rsp.json())
      .then(
        success => dispatch(action(success)),
        error => console.error(error)
      );
  }, [url, dispatch, action]);
};

export const useDefaultStyles = () => {
  const defaultStyles = makeStyles(theme => ({
    formControl: {
      marginRight: theme.spacing(2),
      minWidth: 150,
    },
    dialogTitle: {
      color: theme.palette.primary.main,
    },
  }));
  const dispatch = useDispatch();
  dispatch(setDefaultClasses(defaultStyles()));
};
