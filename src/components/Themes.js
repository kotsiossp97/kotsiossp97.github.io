import { createTheme, responsiveFontSizes  } from "@mui/material";

export const darkTheme = responsiveFontSizes(createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: '#00e64a',
        },
        secondary: {
            main: '#00ffae',
        },
    }
}))

export const lightTheme = responsiveFontSizes(createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#00e64a',
        },
        secondary: {
          main: '#00ffae',
        },
    },
}))