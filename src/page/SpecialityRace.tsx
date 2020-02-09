import React, { useState } from 'react';
import { Box, makeStyles, Divider, Typography, TableContainer, Table, TableHead } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import { setSpecialityRace } from "../store/DomainState";
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import WithLabelSelect from '../shared/component/WithLabelSelect';
import { useRequest } from '../shared/hook/CustomHooks';
import UDate from '../util/UDate';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  tableContainer: {
    minHeight: '100vh'
  }
}));

type SpecialityRaceProps = {
  raceDate: string;
};

interface Record {
  place: string;
  initialRace: string;
  races: {
    name: string;
    records: {
      raceDate: string;
      racePlace: string;
      orderOfFinish: number;
    }[]
  }[]
};

export default (props: RouteComponentProps<SpecialityRaceProps>) => {

  const classes = useStyles();
  const raceDate = props.match.params.raceDate;
  const [selected, setSelected] = useState({ place: '', race: '' });
  const items: Record[] = useSelector((state: RootState) => state.domain.specialityRace.items);

  useRequest(`/json/speciality/${raceDate}.json`, setSpecialityRace);

  const handleChange = (e: any) => {
    if (e.target.name === 'place') {
      return setSelected({ place: e.target.value, race: '' });
    }
    setSelected({...selected, race: e.target.value});
  };

  return (
    <>
      <Box m={1}>
        <Typography variant="h6" component="h2">
          特別レース分析({UDate.fromYYYYMMDD(raceDate)})
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <WithLabelSelect
          classes={classes}
          label="開催場"
          name="place"
          value={selected.place}
          items={items.map(item => ({label: item.place, value:item.place}))}
          onChange={handleChange} />
        <WithLabelSelect
          classes={classes}
          label="レース名"
          name="race"
          value={selected.race}
          items={items.find(item => item.place === selected.place)
            ?.races.map(race => ({label: race.name, value:race.name})) || []}
          onChange={handleChange} />
      </Box>
      <Divider />
      <Box>
        <TableContainer className={classes.tableContainer}>
            <Table stickyHeader>
              <TableHead>

              </TableHead>
            </Table>
        </TableContainer>
      </Box>
    </>
  );
};
