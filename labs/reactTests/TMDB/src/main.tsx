// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import CustomThemeProvider from '../components/ui/Theme.tsx';

// React 18.0.0+ standard for starting React
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CustomThemeProvider>
            <App />
        </CustomThemeProvider>
    </React.StrictMode>
);
