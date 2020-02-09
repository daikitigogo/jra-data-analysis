import React, { useState } from 'react';
import { List, Box, ListItemIcon, ListItemText, Collapse } from '@material-ui/core';
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import { IconProps } from '@mdi/react/dist/IconProps';
import MdiIcon from './MdiIcon';
import ListItemLink from "./ListItemLink.jsx";

export interface LoopedListItemProps {
  text: string;
  icon: IconProps;
  pl?: number;
  children?: LoopedListItemProps[];
  link?: string;
};

const LoopedListItem: React.FC<LoopedListItemProps> = (props) => {
  
  const pl = props.pl === undefined ? 2 : props.pl;
  const [open, setOpen] = useState(false);
  const handleClick = () => props.children && setOpen(!open);

  return (
    <Box pl={pl}>
      <ListItemLink onClick={handleClick} link={props.link}>
        <ListItemIcon>
          <MdiIcon {...props.icon} />
        </ListItemIcon>
        <ListItemText primary={props.text} />
        {props.children && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemLink>
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
export default LoopedListItem;
