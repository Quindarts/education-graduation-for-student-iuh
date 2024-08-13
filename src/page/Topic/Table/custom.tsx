import { Box } from '@mui/material';
import {
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';

export function CustomToolbar() {
  return (
    <Box>
      <GridToolbarColumnsButton sx={{ px: 2, py: 1 }} />
      <GridToolbarDensitySelector sx={{ px: 2, py: 1 }} />
    </Box>
  );
}
