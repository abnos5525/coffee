import {AppBar, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import {useContext} from "react";
import {ContextApp} from "../../context/ContextApp.js";
import {TabsInfo} from "../../constants/TabsInfo.jsx";
import Grid from "@mui/material/Unstable_Grid2";
import {TabsProps} from "./TabsProps.js";
import {useTranslation} from "react-i18next";
import LangBtn from "../LangBtn.jsx";

const Header = () =>{

    const {tabValue, handleTabChange} = useContext(ContextApp)

     const tabs = TabsInfo()

    const {i18n} = useTranslation()

    return(
        <AppBar position="static" sx={{width:"100%",height:70,zIndex:2,display:{
                xl:"block",
                lg:"block",
                md:"block",
                sm:"block",
                xs:"none",
            }, bgcolor:"primary.main",boxShadow:0
        }}>
            <Toolbar>
                <Grid xs={2}>
                    <LangBtn width={80}/>
                </Grid>
                    <Grid xs={9}>
                        <Tabs value={tabValue} onChange={handleTabChange}
                              textColor="secondary"
                              indicatorColor="secondary"
                              aria-label="secondary tabs example">
                            {
                                tabs.map((t,index)=>(
                                    <Tab key={index} sx={{ml:1}} {...TabsProps(index)} label={
                                        <Typography sx={{
                                            fontSize:{
                                                xl:"1.2rem",
                                                lg:"1.2rem",
                                                md:"1.2rem",
                                                sm:".75rem",
                                            },
                                        }}>
                                            {
                                                i18n.language === "en" ?
                                                    <>
                                                    {t.label}
                                                    {t.icon}
                                                    </>
                                                    :
                                                    <>
                                                        {t.icon}
                                                        {t.label}
                                                    </>
                                            }
                                        </Typography>
                                    } />
                                ))
                            }

                        </Tabs>
                    </Grid>
                    <Grid xs={2}>
                        <Typography sx={{
                            textAlign:"center",
                            fontSize:{
                                sm:25,
                                md:30
                            },
                            mx:1
                        }}>
                            Ducino
                        </Typography>
                    </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header