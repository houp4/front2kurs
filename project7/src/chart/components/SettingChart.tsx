import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

export type tSeries = {
  'Максимальная мощность': boolean;
  'Средняя мощность': boolean;
  'Минимальная мощность': boolean;
  'Средний рейтинг': boolean;
};

type CheckboxProps = {
  series: tSeries;
  setSeries: React.Dispatch<React.SetStateAction<tSeries>>;
  isBar: boolean;
  setIsBar: React.Dispatch<React.SetStateAction<boolean>>;
};

function SettingChart({ series, setSeries, isBar, setIsBar }: CheckboxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeries({
      ...series,
      [event.target.name]: event.target.checked,
    });
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsBar(event.target.value === 'bar');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 2,
        m: '20px 0',
      }}
    >
      <FormControl>
        <FormLabel id="label-radio-group">Тип диаграммы:</FormLabel>
        <RadioGroup name="group-radio" value={isBar ? 'bar' : 'dot'} onChange={handleRadioChange}>
          <FormControlLabel value="bar" control={<Radio />} label="Гистограмма" />
          <FormControlLabel value="dot" control={<Radio />} label="Линейная" />
        </RadioGroup>
      </FormControl>

      <Divider orientation="vertical" flexItem />

      <FormControl>
        <FormLabel id="label-checkbox-group">На диаграмме показать:</FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              checked={series['Максимальная мощность']}
              onChange={handleChange}
              name="Максимальная мощность"
            />
          }
          label="максимальную мощность"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={series['Средняя мощность']}
              onChange={handleChange}
              name="Средняя мощность"
            />
          }
          label="среднюю мощность"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={series['Минимальная мощность']}
              onChange={handleChange}
              name="Минимальная мощность"
            />
          }
          label="минимальную мощность"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={series['Средний рейтинг']}
              onChange={handleChange}
              name="Средний рейтинг"
            />
          }
          label="средний рейтинг"
        />
      </FormControl>
    </Box>
  );
}

export default SettingChart;