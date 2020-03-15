import React, { useState, useMemo } from 'react';
import { Box, Divider, Typography } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import { setSpecialityRace } from "../../store/DomainState";
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import WithLabelSelect from '../../shared/component/WithLabelSelect';
import { useRequest } from '../../shared/hook';
import UDate from '../../util/UDate';
import FilterableTable from '../../shared/component/FilterableTable';
import useStyles from './style';
import { analysis } from './data';

type Props = RouteComponentProps<{raceDate: string}>;

type State = {
  place: string;
  race: string;
  analysis: 'previousRace' | 'byPopular';
};

const initialState: State = {
  place: '0',
  race: '0',
  analysis: 'previousRace',
};

const createHandleChange = (selected: State, setSelected: React.Dispatch<React.SetStateAction<State>>) => {
  return (e: any) => {
    if (e.target.name === 'place') {
      return setSelected({ ...selected, place: e.target.value, race: '0' });
    }
    if (e.target.name === 'race') {
      return setSelected({...selected, race: e.target.value});
    }
    setSelected({ ...selected, analysis: e.target.value });
  };
};

const getRaceDate = (props: Props) => {
  return props.match.params.raceDate;
};

export default (props: Props) => {

  const classes = useStyles();
  const [selected, setSelected] = useState(initialState);
  const data = useSelector((state: RootState) => state.domain.specialityRace);
  const handleChange = useMemo(() => createHandleChange(selected, setSelected), [selected, setSelected]);

  useRequest(`/json/speciality/${getRaceDate(props)}.json`, setSpecialityRace);

  return (
    <>
      <Box mt={2} mb={2}>
        <Typography variant="h6" component="h2">
          特別レース分析({UDate.fromYYYYMMDD(getRaceDate(props))})
        </Typography>
      </Box>
      <Divider />
      <Box mt={2} mb={2}>
        <WithLabelSelect
          label="開催場"
          name="place"
          value={selected.place}
          items={data.selectors.length ? data.selectors.map((x, i) => ({label: x.label, value: String(i)})) : [{ label: '', value: '0' }]}
          onChange={handleChange} />
        <WithLabelSelect
          label="レース名"
          name="race"
          value={selected.race}
          items={data.selectors[+selected.place]
            ?.children.map((race, i) => ({label: race.label, value: String(i)})) || [{ label: '', value: '0' }]}
          onChange={handleChange} />
        <WithLabelSelect
          label="分析種別"
          name="analysis"
          value={selected.analysis}
          items={Object.entries(analysis).map(([k, v]) => ({ label: v.label, value: k }))}
          onChange={handleChange} />
      </Box>
      <Divider />
      <FilterableTable 
        classes={classes}
        title={analysis[selected.analysis].label}
        columns={analysis[selected.analysis].columns}
        records={data.selectors[+selected.place]?.children[+selected.race]?.children || []} />
    </>
  );
};
