import {useContext} from "react";
import { Drawer} from "@mui/material";
import SideBarContent from "./SideBarContent";
import {ContextApp} from "../../../context/ContextApp.js";

const SideBar = () =>{

    const {drawerOpen,setDrawerOpen} = useContext(ContextApp)
    return(
            <Drawer xs={1} sm={0} md={0} lg={0} xl={0}
                    sx={{
                height:"100vh",
                overflowX:"hidden",overflowY:"auto", zIndex:"2",
                "& .MuiDrawer-paper": {
                    width: 230,
                    bgcolor:"primary.main",
                },
                display:{
                    xs:"block",
                    sm:"none",
                    md:"none",
                    lg:"none",
                    xl:"none"
                }}}
                    open={drawerOpen} variant="temporary" onClose={()=> setDrawerOpen(false)}>

                <SideBarContent/>

            </Drawer>
    )
}

export default SideBar