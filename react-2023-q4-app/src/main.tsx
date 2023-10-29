import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import { ErrorBoundary } from '@/components';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
