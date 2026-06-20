import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GroupGrid from '../chart/components/GroupGrid';
import GroupChart from '../chart/components/GroupChart';
import { byType, byCountry, type GroupKey } from '../chart/groupdata';

const groupMap = { 'Тип': byType, 'Страна': byCountry } as const;

function Chart() {
  const [group, setGroup] = React.useState<GroupKey>('Тип');
  const [groupData, setGroupData] = React.useState(byType);

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as GroupKey;
    setGroup(value);
    setGroupData(groupMap[value]);
  };

  return (
    <div>
      <Navbar active="3" />
      <Box sx={{ width: '280px', m: '20px auto' }}>
        <FormControl fullWidth>
          <InputLabel>Группировка по оси OX</InputLabel>
          <Select value={group} label="Группировка по оси OX" onChange={handleChange}>
            <MenuItem value="Тип">Тип кузова</MenuItem>
            <MenuItem value="Страна">Страна</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <GroupChart data={groupData} />
      <GroupGrid data={groupData} />
      <Footer />
    </div>
  );
}

export default Chart;