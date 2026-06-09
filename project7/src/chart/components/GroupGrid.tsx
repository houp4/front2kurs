import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';
import type { tGroup } from '../groupdata';

type GroupProps = {
  data: tGroup;
};

function GroupGrid({ data }: GroupProps) {
  const rows: GridRowsProp = data;
  const columns: GridColDef[] = [
    { field: 'Группа', headerName: 'Категория', flex: 1 },
    { field: 'Минимальная мощность', headerName: 'Мин. мощность (л.с.)', flex: 0.8 },
    { field: 'Максимальная мощность', headerName: 'Макс. мощность (л.с.)', flex: 0.8 },
    { field: 'Средняя мощность', headerName: 'Ср. мощность (л.с.)', flex: 0.8 },
    { field: 'Средний рейтинг', headerName: 'Ср. рейтинг', flex: 0.6 },
  ];

  return (
    <Container maxWidth="lg" sx={{ height: '500px', mt: '20px' }}>
      <DataGrid
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        rows={rows}
        columns={columns}
      />
    </Container>
  );
}

export default GroupGrid;