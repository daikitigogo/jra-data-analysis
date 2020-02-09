import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

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
