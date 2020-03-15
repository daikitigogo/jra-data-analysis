import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

type Props = {
  label: string;
  name: string;
  value: string;
  items: {
    label: string;
    value: string;
  }[];
  onChange: (e: any) => void;
};

export default (props: Props) => {

  const defaultClasses = useSelector((state: RootState) => state.ui.defaultClasses);

  const options = props.items.map(item => (
    <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
  ));

  return (
    <FormControl>
      <InputLabel id={`${props.name}-label`}>
        {props.label}
      </InputLabel>
      <Select name={props.name} labelId={`${props.name}-label`} value={props.value} onChange={props.onChange}>
        {options}
      </Select>
    </FormControl>
  );
};
