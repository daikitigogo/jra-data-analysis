import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Link as RouterLink } from 'react-router-dom';

export default (props) => {

  const { link, onClick, children } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={link} ref={ref} {...itemProps} />),
    [link],
  );

  if (!link) {
    return (
      <ListItem button onClick={onClick} divider>
        {children}
      </ListItem>
    );
  }

  return (
    <ListItem button onClick={onClick} divider component={renderLink}>
      {children}
    </ListItem>
  );
}
