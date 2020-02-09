import React, { useState, useEffect } from 'react';
import { Icon } from '@mdi/react';
import { IconProps } from '@mdi/react/dist/IconProps';
import { useTheme } from '@material-ui/core';

export default (props: IconProps) => {

  const { path, size, color, ...other } = props;
  const theme = useTheme();

  const [iconPath, setIconPath] = useState('');
  const iconProps = {
    size: size || 1,
    color: color || theme.palette.primary.main,
    ...other,
  };

  useEffect(() => {
    import('@mdi/js').then(icons => {
      // @ts-ignore
      const value = icons[`mdi${path.charAt(0).toUpperCase() + path.slice(1)}`];
      if (!value) throw new Error(`Invalid icon path. path: ${path}`);
      setIconPath(value);
    });
  }, [path]);
  
  return (
    <Icon path={iconPath} {...iconProps} />
  )
};
