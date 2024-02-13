import TabPanel from "./Header/TabPanel";
import {useContext} from "react";
import {ContextApp} from "../context/ContextApp.js";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import AboutUs from "./pages/AboutUs.jsx";

const AppPages = ()=>{
    const {tabValue} = useContext(ContextApp)

    return(
        <>
            <TabPanel value={tabValue} index={0}>
                <Home/>
            </TabPanel>

            <TabPanel value={tabValue} index={1}>
                <Products/>
            </TabPanel>

            <TabPanel value={tabValue} index={2}>
                <AboutUs/>
            </TabPanel>
        </>
    )
}

export default AppPages