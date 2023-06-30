import { createTheme, responsiveFontSizes  } from "@mui/material";


const myPalette = {
    primary: "#fcaf25",
    secondary: "#4900e6"
}

export const darkTheme = responsiveFontSizes(createTheme({
    typography: {
        h4:{
            color: myPalette.primary
        },
        h5:{
            color: myPalette.primary
        }
    },
    palette: {
        mode: "dark",
        primary: {
            main: myPalette.primary,
        },
        secondary: {
            main: myPalette.secondary,
        },
    }
}))

export const lightTheme = responsiveFontSizes(createTheme({
    typography: {
        h4:{
            color: "black"
        },
        h5:{
            color: "black"
        }
    },
    palette: {
        mode: 'light',
        primary: {
          main: myPalette.primary,
        },
        secondary: {
          main: myPalette.secondary,
        },
    },
}))