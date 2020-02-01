import React, { useState } from 'react';
import { List, ListItem, Box, ListItemIcon, ListItemText, Collapse } from '@material-ui/core';
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import { IconProps } from '@mdi/react/dist/IconProps';
import MdiIcon from './MdiIcon';

export interface LoopedListItemProps {
  text: string;
  icon: IconProps;
  pl?: number;
  children?: LoopedListItemProps[];
  link?: string;
};

export const LoopedListItem: React.FC<LoopedListItemProps> = (props) => {
  
  const pl = props.pl === undefined ? 2 : props.pl;
  const [open, setOpen] = useState(false);
  const handleClick = () => props.children && setOpen(!open);

  return (
    <Box pl={pl}>
      <ListItem button onClick={handleClick} divider>
        <ListItemIcon>
          <MdiIcon />
        </ListItemIcon>
        <ListItemText primary={props.text} />
        {props.children && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {
        props.children &&
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {props.children.map(child => <LoopedListItem key={child.text} {...child} />)}
          </List>
        </Collapse>
      }
    </Box>
  );
};
