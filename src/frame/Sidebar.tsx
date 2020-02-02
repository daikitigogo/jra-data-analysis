import React, { useEffect } from 'react';
import { LoopedListItemProps, LoopedListItem } from '../shared/component/LoopedListItem';
import { Divider, List } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setSidebarMenu } from '../store/DomainState';
import { setSidebarOpen } from '../store/UIState';
import ResponsiveDrawer from '../shared/component/ResponsiveDrawer';
import useStyles from "../style/SidebarStyle";

export interface SidebarProps { };

const Sidebar: React.FC<SidebarProps> = (props) => {

  const { toolbar, ...drawerStyle } = useStyles();
  const dispatch = useDispatch();
  const sidebarMenu = useSelector((state: RootState) => state.domain.sidebarMenu);
  const sidebarOpen = useSelector((state: RootState) => state.ui.sidebarOpen);
  const sysdate = useSelector((state: RootState) => state.domain.sysdate);
  useEffect(() => {
    fetch('/json/menu.json')
      .then(rsp => rsp.json())
      .then(
        success => {
          dispatch(setSidebarMenu(success));
        },
        error => console.log(error)
    );
  }, [dispatch, sysdate]);
  
  const handleClose = () => {
    dispatch(setSidebarOpen());
  };
  return (
    <ResponsiveDrawer open={sidebarOpen} onClose={handleClose} classes={drawerStyle}>
      <div className={toolbar} />
      <Divider />
      <List
        component="nav"
        disablePadding
      >
        {sidebarMenu.items.map((item: LoopedListItemProps) => <LoopedListItem key={item.text} pl={0} {...item} />)}
      </List>
    </ResponsiveDrawer>
  );
};

export default Sidebar;
