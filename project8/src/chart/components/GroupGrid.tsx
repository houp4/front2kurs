import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';
import type { tGroup } from '../groupdata';
import { OY_MAX_POWER, OY_MIN_POWER, OY_AVG_POWER, OY_AVG_RATING } from '../groupdata';

type GroupProps = { data: tGroup };

function GroupGrid({ data }: GroupProps) {
  const rows: GridRowsProp = data;
  const columns: GridColDef[] = [
    { field: 'Группа', headerName: 'Группа', flex: 1, filterable: true },
    { field: OY_MAX_POWER, headerName: OY_MAX_POWER, flex: 0.9, type: 'number', filterable: true },
    { field: OY_MIN_POWER, headerName: OY_MIN_POWER, flex: 0.9, type: 'number', filterable: true },
    { field: OY_AVG_POWER, headerName: OY_AVG_POWER, flex: 0.9, type: 'number', filterable: true },
    { field: OY_AVG_RATING, headerName: OY_AVG_RATING, flex: 0.9, type: 'number', filterable: true },
  ];

  return (
    <Container maxWidth="lg" sx={{ height: '700px', mt: '20px' }}>
      <DataGrid
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        rows={rows}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        slotProps={{ toolbar: { showQuickFilter: true, quickFilterProps: { debounceMs: 500 } } }}
        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
        pageSizeOptions={[10, 25, 50]}
      />
    </Container>
  );
}

export default GroupGrid;