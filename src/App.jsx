import MainTemplate from "./templates/MainTemplate.jsx";
import Grid from "@mui/material/Unstable_Grid2";
import Header from "./components/header/Header.jsx";
import {useState} from "react";
import {ContextApp} from "./context/ContextApp.js";
import AppPages from "./components/AppPages.jsx";
import DrawerActionButton from "./components/header/sidebar/DrawerActionButton.jsx";
import SideBar from "./components/header/sidebar/SideBar.jsx";
import Footer from "./components/Footer.jsx";

const App =() =>{

    const [tabValue, setTabValue] = useState(0)
    const [loading, setLoading] = useState(false)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const handleTabChange = (event, value) => {
        setTabValue(value)
    }

    return (
        <ContextApp.Provider value={{
            tabValue,
            handleTabChange,
            loading,
            setLoading,
            drawerOpen,
            setDrawerOpen
        }}>
            <MainTemplate>
                <Grid container sx={{ bgcolor:"primary.main",overflowY:"none",borderRadius:2}}>
                    <DrawerActionButton/>
                    <SideBar/>
                    <Header/>
                    <AppPages/>
                    <Footer/>
                </Grid>
            </MainTemplate>
        </ContextApp.Provider>

    )
}

export default App;
