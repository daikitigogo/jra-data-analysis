export type SpecialityRaceData = {
  selectors: Array<{
    label: string;
    children: Array<{
      label: string;
      children: Array<{
        key: string;
        [key: string]: string | number;
      }>;
    }>;
  }>;
};

type Column = {
  id: string;
  label: string;
  align?: 'left' | 'right';
};

export const analysis: {
  previousRace: {
    label: string;
    columns: Array<Column>;
  };
  byPopular: {
    label: string;
    columns: Array<Column>;
  };
} = {
  previousRace: {
    label: '過去レース結果',
    columns: [
      { id: 'raceDate', label: '開催日' },
      { id: 'racePlace', label: '開催場' },
      { id: 'orderOfFinish', label: '着順', align: 'right' },
      { id: 'frameNumber', label: '枠番', align: 'right' },
      { id: 'horseNumber', label: '馬番', align: 'right' },
      { id: 'horseName', label: '馬名' },
      { id: 'jockey', label: '騎手' },
      { id: 'popular', label: '人気', align: 'right' },
      { id: 'timeOf3f', label: '上り3F', align: 'right' },
      { id: 'previousRaceName', label: '前走レース名' },
      { id: 'previousOrderOfFinish', label: '前走着順', align: 'right' },
      { id: 'previousFrameNumber', label: '前走枠番', align: 'right' },
      { id: 'previousHorseNumber', label: '前走馬番', align: 'right' },
      { id: 'previousJockey', label: '前走騎手' },
      { id: 'previousPopular', label: '前走人気', align: 'right' },
      { id: 'previousTimeOf3f', label: '前走上り3F', align: 'right' },
    ],
  },
  byPopular: {
    label: '人気別分析',
    columns: [
      { id: 'pop', label: '人気' },
      { id: 'winRate', label: '勝率' },
      { id: 'withinTwoRate', label: '連対率' },
      { id: 'placeRate', label: '複勝率' },
      { id: 'returnRate', label: '回収率' },
    ],
  }
};