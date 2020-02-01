import React from 'react';
import { StarBorder } from '@material-ui/icons';
// import React, { useState, useEffect } from 'react';
// import { Icon } from '@mdi/react';
// import { IconProps } from '@mdi/react/dist/IconProps';
// import { useTheme } from '@material-ui/core';

// const MdiIcon: React.FC<IconProps> = (props) => {

//   const { path, size, color, ...other } = props;
//   const theme = useTheme();

//   const [iconPath, setIconPath] = useState('');
//   const iconProps = {
//     size: size || 1,
//     color: color || theme.palette.primary.main,
//     ...other,
//   };

//   useEffect(() => {
//     import('@mdi/js').then(icons => {
//       // @ts-ignore
//       const value = icons[`mdi${path.charAt(0).toUpperCase() + path.slice(1)}`];
//       if (!value) throw new Error(`Invalid icon path. props: ${props}`);
//       setIconPath(value);
//     });
//   });
  
//   return (
//     <Icon path={iconPath} {...iconProps} />
//   )
// };

const MdiIcon: React.FC = () => {
  return (
    <StarBorder />
  );
};

export default MdiIcon;
