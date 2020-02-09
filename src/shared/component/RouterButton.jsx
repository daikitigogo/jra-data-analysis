import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default (props) => {

  const { link, children, ...buttonProps } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <Link to={link} ref={ref} {...itemProps} />),
    [link],
  );

  return (
    <Button {...buttonProps} component={renderLink}>
      {children}
    </Button>
  );
}
