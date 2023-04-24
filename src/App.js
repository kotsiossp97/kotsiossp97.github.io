import { Box, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import { useStateContext } from './context/ApplicationContext';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Links from './static/Links';

function App() {
    const { getMuiTheme, activeLink } = useStateContext();

    return (
        <ThemeProvider theme={getMuiTheme()}>
            <CssBaseline />

            <Box display="flex" flexDirection="column" height="100%">
                <Navbar />

                <MainContent>
                    <Box sx={{ height: "100%" }} alignItems="center"  display="flex" justifyContent="center" flexDirection="column">
                        <Typography variant='h2' textAlign="center">🚧 Under development... 🚧</Typography>
                        <Typography>Page: {Links[activeLink].name }</Typography>
                    </Box>

                </MainContent>

                <Footer />
            </Box>


        </ThemeProvider>
    );
}

export default App;
