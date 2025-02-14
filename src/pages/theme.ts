import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
          main: '#1F4529',
          light: '#E8ECD7',
          dark: '#1F4529',
          contrastText: '#EED3B1',
    },
    secondary: {
        main: '#47663B',
        light: '#EED3B1',
        dark: '#47663B',
        contrastText: '#fff',
      },
    error: {
      _main: red.A400,
      get main() {
        return this._main;
      },
      set main(value) {
        this._main = value;
      },
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
