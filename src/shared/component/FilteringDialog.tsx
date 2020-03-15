import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContentText, Button, DialogActions, DialogContent, TextField, IconButton, Box, FormControl, Divider, makeStyles, Typography } from '@material-ui/core';
import WithLabelSelect from './WithLabelSelect';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

type Props = {
  classes: {
    formControl?: string;
  };
  open: boolean;
  onClose: () => void;
  targets: {
    label: string;
    value: string;
  }[];
};

const createFilterItem = (targets: Array<{label: string; value: string}>, classes: any) => {
  return (props: FilterItemProps, onChange: (e: any) => void, onClick: (e: any) => void) => (
    <Box display="flex" key={props.key}>
      <IconButton onClick={onClick}>
        <ClearIcon fontSize="small" />
      </IconButton>
      <WithLabelSelect
        name="target"
        label="検索対象"
        value={props.target}
        items={targets}
        onChange={onChange} />
      <WithLabelSelect
        name="type"
        label="比較方法"
        value={props.type}
        items={[{ label: '次の条件に一致する', value: 'eq' }]}
        onChange={onChange} />
      <FormControl className={classes.formControl}>
        <TextField name="value" value={props.value} label="条件" onChange={onChange} />
      </FormControl>
    </Box>
  )
};

class FilterItemProps {
  key: string;
  target: string = '';
  type: string = '';
  value: string = '';
  constructor(key: string, source?: FilterItemProps, dest?: { name: 'target' | 'type' | 'value', next: string }) {
    this.key = key;
    if (source) {
      this.target = source.target;
      this.type = source.type;
      this.value = source.value;
    }
    if (dest) {
      this[dest.name] = dest.next;
    }
  }
};

export default (props: Props) => {

  const defaultClasses = useSelector((state: RootState) => state.ui.defaultClasses);
  const filterItem = createFilterItem(props.targets, defaultClasses);

  const [maxSeq, setMaxSeq] = useState(0);
  const [filters, setFilters] = useState([new FilterItemProps(String(0))]);

  const handleChange = (key: string) => {
    return (e: any) => {
      const name = e.target.name as 'target' | 'type' | 'value';
      const nextFilters = filters.map(f => f.key === key ? new FilterItemProps(key, f, { name, next: String(e.target.value) }) : f);
      setFilters(nextFilters);
    }
  };

  const handleCancel = () => {
    setMaxSeq(0);
    setFilters([new FilterItemProps(String(0))]);
    props.onClose();
  };

  const addFilter = () => {
    const nextSeq = maxSeq + 1;
    setMaxSeq(nextSeq);
    setFilters(filters.concat([new FilterItemProps(String(nextSeq))]));
  };

  const removeFilter = (key: string) => {
    return (e: any) => {
      const nextFilters = filters.filter(f => f.key !== key);
      setFilters(nextFilters);
    };
  };

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle disableTypography={true}>
        <Typography variant="h6" color="primary">
          絞り込み
        </Typography>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText>
          絞り込み条件を入力してください
        </DialogContentText>
        {filters.map(f => filterItem(f, handleChange(f.key), removeFilter(f.key)))}
        <Box display="flex">
          <IconButton onClick={addFilter}>
            <AddIcon fontSize="small" color="primary" />
          </IconButton>
        </Box>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button color="primary" id="cancel" onClick={handleCancel}>
          キャンセル
        </Button>
        <Button color="primary" name="ok">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};
