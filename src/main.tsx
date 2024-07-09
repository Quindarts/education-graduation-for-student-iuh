import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './providers/ReactQuery';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MUIThemeProvider from './providers/MUIThemeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <MUIThemeProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
   </MUIThemeProvider>
  </React.StrictMode>,
);
