import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

type WithLableSelectProps = {
  classes: {
    formControl?: string;
    label?: string;
    select?: string;
  };
  label: string;
  name: string;
  value: string;
  items: {
    label: string;
    value: string;
  }[];
  onChange: (e: any) => void;
};

export default (props: WithLableSelectProps) => {

  const options = props.items.map(item => (
    <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
  ));

  return (
    <FormControl className={props.classes.formControl}>
      <InputLabel id={`${props.name}-label`} className={props.classes.label}>
        {props.label}
      </InputLabel>
      <Select name={props.name} labelId={`${props.name}-label`} value={props.value} onChange={props.onChange} className={props.classes.select}>
        {options}
      </Select>
    </FormControl>
  );
};
