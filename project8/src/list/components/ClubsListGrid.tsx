import carRows from '../table';
import { DataGrid, GridColDef, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function CustomToolbar() {
  return (
    <GridToolbarContainer sx={{ p: 1.5, gap: 1.5, alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid', borderColor: 'divider', bgcolor: '#fafafa' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#333' }}>Список автомобилей</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <GridToolbarColumnsButton /><GridToolbarFilterButton /><GridToolbarDensitySelector /><GridToolbarExport />
        </Box>
      </Box>
      <Box sx={{ minWidth: { xs: '100%', sm: 260 } }}><GridToolbarQuickFilter /></Box>
    </GridToolbarContainer>
  );
}

function ClubsListGrid() {
  const columns: GridColDef[] = [
    { field: 'Название автомобиля', headerName: 'Название автомобиля', flex: 1 },
    { field: 'Страна', flex: 0.7 },
    { field: 'Тип', flex: 0.7 },
    { field: 'Мощность (л.с.)', flex: 0.8, type: 'number' },
    { field: 'Расход (л/100км)', flex: 0.9, type: 'number' },
    { field: 'Цена (руб)', flex: 0.8, type: 'number' },
    { field: 'Рейтинг', flex: 0.6, type: 'number' },
  ];

  return (
    <Container maxWidth="lg" sx={{ height: '700px', mt: '20px' }}>
      <DataGrid
        localeText={{ ...ruRU.components.MuiDataGrid.defaultProps.localeText, toolbarQuickFilterPlaceholder: 'Поиск автомобиля' }}
        rows={carRows}
        columns={columns}
        slots={{ toolbar: CustomToolbar }}
      />
    </Container>
  );
}

export default ClubsListGrid;