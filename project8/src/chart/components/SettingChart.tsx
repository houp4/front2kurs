import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import { OY_MAX_POWER, OY_MIN_POWER, OY_AVG_POWER, OY_AVG_RATING } from '../groupdata';

export type tSeries = {
  [OY_MAX_POWER]: boolean;
  [OY_MIN_POWER]: boolean;
  [OY_AVG_POWER]: boolean;
  [OY_AVG_RATING]: boolean;
};

type CheckboxProps = {
  series: tSeries;
  setSeries: React.Dispatch<React.SetStateAction<tSeries>>;
  isBar: boolean;
  setIsBar: React.Dispatch<React.SetStateAction<boolean>>;
};

function SettingChart({ series, setSeries, isBar, setIsBar }: CheckboxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeries({ ...series, [event.target.name]: event.target.checked });
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsBar(event.target.value === 'bar');
  };

  return (
    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2} sx={{ m: '20px 0', justifyContent: 'center', flexWrap: 'wrap' }}>
      <FormControl>
        <FormLabel>Тип диаграммы:</FormLabel>
        <RadioGroup value={isBar ? 'bar' : 'line'} onChange={handleRadioChange}>
          <FormControlLabel value="bar" control={<Radio />} label="Гистограмма" />
          <FormControlLabel value="line" control={<Radio />} label="Линейная" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Показатели:</FormLabel>
        <FormControlLabel control={<Checkbox checked={series[OY_MAX_POWER]} onChange={handleChange} name={OY_MAX_POWER} />} label={OY_MAX_POWER} />
        <FormControlLabel control={<Checkbox checked={series[OY_MIN_POWER]} onChange={handleChange} name={OY_MIN_POWER} />} label={OY_MIN_POWER} />
        <FormControlLabel control={<Checkbox checked={series[OY_AVG_POWER]} onChange={handleChange} name={OY_AVG_POWER} />} label={OY_AVG_POWER} />
        <FormControlLabel control={<Checkbox checked={series[OY_AVG_RATING]} onChange={handleChange} name={OY_AVG_RATING} />} label={OY_AVG_RATING} />
      </FormControl>
    </Stack>
  );
}

export default SettingChart;