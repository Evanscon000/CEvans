// src/components/ui/Theme.tsx
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';

const theme = createTheme({
    palette: {
        mode: 'dark', //automatically sets dark backgrounds & light text
        primary: {
            main: '#ff4040',
        },
        secondary: {
            main: '#651fff',
        },
        background: {
            default: '#121212', // background app
            paper: '#1e1e1e',   // background Cards, AppBar, etc.
        },
        text: {
            primary: '#ffffff',
            secondary: '#aaaaaa',
        },
    },
});

type ThemeProps = {
    children: ReactNode;
};

const CustomThemeProvider = ({ children }: ThemeProps) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
