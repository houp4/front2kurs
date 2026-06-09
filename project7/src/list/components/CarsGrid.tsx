import cars from "../../data";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';

function CarsGrid() {
  const rows: GridRowsProp = cars;
  const columns: GridColDef[] = [
    { field: 'Модель', headerName: 'Модель', flex: 1 },
    { field: 'Тип', headerName: 'Тип кузова', flex: 0.8 },
    { field: 'Страна', headerName: 'Страна', flex: 0.7 },
    { field: 'Привод', headerName: 'Привод', flex: 0.6 },
    { field: 'Мощность', headerName: 'Мощность (л.с.)', flex: 0.7 },
    { field: 'Расход', headerName: 'Расход (л/100км)', flex: 0.7 },
    { 
      field: 'Цена', 
      headerName: 'Цена (руб)', 
      flex: 0.8,
      valueFormatter: (value: number) => {
        if (value === undefined || value === null) return '';
        return value.toLocaleString('ru-RU') + ' ₽';
      }
    },
    { field: 'Рейтинг', headerName: 'Рейтинг', flex: 0.6 },
  ];

  return (
    <Container maxWidth="xl" sx={{ height: '700px', mt: '20px' }}>
      <DataGrid
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        rows={rows}
        columns={columns}
        showToolbar={true}
      />
    </Container>
  );
}

export default CarsGrid;