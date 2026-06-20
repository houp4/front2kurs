import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import Container from '@mui/material/Container';
import SettingChart, { type tSeries } from './SettingChart';
import type { tGroup } from '../groupdata';
import { OY_MAX_POWER, OY_MIN_POWER, OY_AVG_POWER, OY_AVG_RATING } from '../groupdata';

type GroupChartProps = {
  data: tGroup;
};

function GroupChart({ data }: GroupChartProps) {
  const [series, setSeries] = React.useState<tSeries>({
    [OY_MAX_POWER]: true,
    [OY_MIN_POWER]: false,
    [OY_AVG_POWER]: false,
    [OY_AVG_RATING]: false,
  });

  const [isBar, setIsBar] = React.useState(true);

  const seriesY = Object.entries(series)
    .filter((item) => item[1] === true)
    .map((item) => ({ dataKey: item[0], label: item[0] }));

  const chartSetting = { yAxis: [{ label: 'Значение' }], height: 400 };
  const legendSlotProps = { legend: { position: { vertical: 'bottom', horizontal: 'center' } } } as const;
  const oneSeries = seriesY.length === 1;

  if (seriesY.length === 0) {
    return (
      <Container maxWidth="lg">
        <div style={{ textAlign: 'center', padding: 40, color: '#666' }}>Выберите хотя бы один показатель</div>
        <SettingChart series={series} setSeries={setSeries} isBar={isBar} setIsBar={setIsBar} />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      {isBar ? (
        <BarChart dataset={data} xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]} series={seriesY} slotProps={legendSlotProps} {...(oneSeries ? { barLabel: 'value' as const } : {})} {...chartSetting} />
      ) : (
        <LineChart dataset={data} xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]} series={seriesY} slotProps={legendSlotProps} {...chartSetting} />
      )}
      <SettingChart series={series} setSeries={setSeries} isBar={isBar} setIsBar={setIsBar} />
    </Container>
  );
}

export default GroupChart;