import React, { useState } from 'react';
import { Paper, Toolbar, Typography, Tooltip, IconButton, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import MdiIcon from './MdiIcon';
import FilteringDialog from './FilteringDialog';

type Props = {
  classes: {
    paper?: string;
    title?: string;
    container?: string;
    th?: string;
    formControl?: string;
  };
  title: string;
  columns: {
    id: string;
    label: string;
    align?: 'left' | 'right';
  }[];
  records: {
    key: string;
    [key: string]: string | number;
  }[];
};

export default (props: Props) => {

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Paper className={props.classes.paper}>
      <Toolbar>
        <Typography variant="h6" className={props.classes.title}>
          {props.title}
        </Typography>
        <Tooltip title="filter">
          <IconButton onClick={handleClick}>
            <MdiIcon path="filterVariant" size={0.8} />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <FilteringDialog
        classes={props.classes}
        open={open}
        onClose={handleClick}
        targets={props.columns.map(col => ({label: col.label, value: col.id}))} />
      <TableContainer className={props.classes.container}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {props.columns.map(col => (
                  <TableCell key={col.id} className={props.classes.th} align="center">
                    {col.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.records.map(record => (
                <TableRow key={record.key}>
                  {props.columns.map(col => {
                    const id = col.id as keyof (typeof record);
                    return (
                      <TableCell key={col.id} style={{whiteSpace: 'nowrap'}} align={col.align}>
                        {record[id]}
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </TableContainer>
    </Paper>
  );
};
