import React, { useState } from 'react';
import { Box, makeStyles, Divider, Typography, TableContainer, Table, TableHead, TableRow, TableCell } from '@material-ui/core';
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

const columns = [
  { id: 'raceDate', label: '開催日', style: {} },
  { id: 'racePlace', label: '開催場', style: {} },
  { id: 'orderOfFinish', label: '着順', style: {} },
  { id: 'frameNumber', label: '枠番', style: {} },
  { id: 'horseNumber', label: '馬番', style: {} },
  { id: 'horseName', label: '馬名', style: {} },
  { id: 'jockey', label: '騎手', style: {} },
  { id: 'popular', label: '人気', style: {} },
  { id: 'odds', label: '単勝オッズ', style: {} },
  { id: 'timeOf3f', label: '上り3F', style: {} },
  { id: 'orderOf3f', label: '上り順位', style: {} },
  { id: 'previousRaceName', label: '前走レース名', style: {} },
  { id: 'previousOrderOfFinish', label: '前走着順', style: {} },
  { id: 'previousFrameNumber', label: '前走枠番', style: {} },
  { id: 'previousHorseNumber', label: '前走馬番', style: {} },
  { id: 'previousJockey', label: '前走騎手', style: {} },
  { id: 'previousPopular', label: '前走人気', style: {} },
  { id: 'previousOdds', label: '前走単勝オッズ', style: {} },
  { id: 'previousTimeOf3f', label: '前走上り3F', style: {} },
  { id: 'previousOrderOf3f', label: '前走上り順位', style: {} },
];

export interface SpecialityRaceData {
  selectors: Array<{
    place: string;
    races:string[];
  }>;
  records: Array<{
    raceName: string;
    raceDate: string;
    racePlace: string;
    orderOfFinish: number;
    frameNumber: number;
    horseNumber: number;
    horseName: string;
    jockey: string;
    popular: number;
    odds: number;
    timeOf3f: number;
    orderOf3f: number;
    previousRaceName: string;
    previousOrderOfFinish: number;
    previousFrameNumber: number;
    previousHorseNumber: number;
    previousJockey: string;
    previousPopular: number;
    previousOdds: number;
    previousTimeOf3f: number;
    previousOrderOf3f: number;
  }>;
};

export default (props: RouteComponentProps<{ raceDate: string }>) => {

  const classes = useStyles();
  const raceDate = props.match.params.raceDate;
  const [selected, setSelected] = useState({ place: '', race: '' });
  const data = useSelector((state: RootState) => state.domain.specialityRace);
  console.log(data);

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
          items={data.selectors.map(x => ({label: x.place, value:x.place}))}
          onChange={handleChange} />
        <WithLabelSelect
          classes={classes}
          label="レース名"
          name="race"
          value={selected.race}
          items={data.selectors.find(x => x.place === selected.place)
            ?.races.map(race => ({label: race, value:race})) || []}
          onChange={handleChange} />
      </Box>
      <Divider />
      <Box>
        <TableContainer className={classes.tableContainer}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {columns.map(col => (
                    <TableCell key={col.id} style={col.style}>
                      {col.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
            </Table>
        </TableContainer>
      </Box>
    </>
  );
};
