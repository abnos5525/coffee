import {Fab} from "@mui/material";
import {MenuRounded} from "@mui/icons-material";
import {useContext} from "react";
import {ContextApp} from "../../../context/ContextApp.js";

const DrawerActionButton =() =>{

    const {setDrawerOpen} = useContext(ContextApp)

    return(
        <Fab onClick={()=> setDrawerOpen(true)} aria-label="Sidebar" color="secondary" size="small"
             sx={{m:2,zIndex:2,
            display:{
                xl:"none",
                lg:"none",
                md:"none",
                sm:"none",
                xs:"block"
            }}}>
            <MenuRounded sx={{verticalAlign:"middle"}}/>
        </Fab>
    )
}

export default DrawerActionButton