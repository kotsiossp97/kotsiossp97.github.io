import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import "@/App.css";
import Footer from "@/components/Footer";
import Links from "@/static/Links";
import { useStateContext } from "@/context/ApplicationContext";
import Navbar from "@/components/Navbar";
import MainContent from "@/components/MainContent";
import UnderDevSwitch from "@/components/UnderDevSwitch";

function App() {
  const { getMuiTheme, activeLink } = useStateContext();

  const isUnderDev = Links[activeLink].underDev;

  return (
    <ThemeProvider theme={getMuiTheme()}>
      <CssBaseline />

      <Box display={"flex"} flexDirection={"column"} height={"100%"}>
        <Navbar />

        <MainContent>
          <UnderDevSwitch
            isUnderDev={isUnderDev}
            component={Links[activeLink].pageComponent}
          />
        </MainContent>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
