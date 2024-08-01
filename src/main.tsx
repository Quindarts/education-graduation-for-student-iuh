import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './providers/ReactQuery';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MUIThemeProvider from './providers/MUIThemeProvider';
import { SnackbarProvider } from 'notistack';
import { Zoom } from '@mui/material';
import { themeSnackbar } from './theme/ThemeSnackbar';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MUIThemeProvider>
      <BrowserRouter>
        <SnackbarProvider
          maxSnack={5}
          TransitionComponent={Zoom}
          Components={themeSnackbar}
          autoHideDuration={2000}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <QueryClientProvider client={queryClient}>
            <App />
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          </QueryClientProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </MUIThemeProvider>
  </React.StrictMode>,
);
