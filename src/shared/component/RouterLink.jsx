import React from 'react';
import { Link } from 'react-router-dom';
import { Link as MaterialLink } from '@material-ui/core';

const RouterLink = (props) => {

  const { link, children, ...linkProps } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <Link to={link} ref={ref} {...itemProps} />),
    [link],
  );

  return (
    <MaterialLink {...linkProps} component={renderLink}>
      {children}
    </MaterialLink>
  );
}

export default RouterLink;
