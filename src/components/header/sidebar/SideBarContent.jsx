import {Box, Divider, Tab, Tabs, Typography} from "@mui/material";
import {TabsInfo} from "../../../constants/TabsInfo";
import {useContext} from "react";
import {TabsProps} from "../TabsProps.js";
import {ContextApp} from "../../../context/ContextApp.js";
import {useTranslation} from "react-i18next";
import LangBtn from "../../LangBtn.jsx";

const SideBarContent = () =>{

    const {tabValue, handleTabChange, setDrawerOpen} = useContext(ContextApp)

    const tabs = TabsInfo()

    const {i18n} = useTranslation()

    return(
        <Box sx={{mt:2,textAlign:"center"}}>
            <LangBtn width={120}/>
            <Divider variant="middle" sx={{backgroundColor:"secondary.light",mt:3}}/>
            <Tabs value={tabValue} onChange={handleTabChange}
                  textColor="secondary" orientation="vertical"
                  indicatorColor="secondary"
                  aria-label="secondary tabs example">
                {
                    tabs.map((t,index)=>(
                        <Tab sx={{mt:2}} key={index} onClick={()=>setDrawerOpen(false)} {...TabsProps(index)}
                             label={
                            <Typography sx={{
                                fontSize:{
                                    xl:"1.2rem",
                                    lg:"1.2rem",
                                    md:"1.2rem",
                                    sm:"1rem",
                                    xs:"1rem"
                                },
                                mt:{
                                    xl:"1.2rem",
                                    lg:"1.2rem",
                                    md:"1.2rem",
                                    sm:"1rem",
                                    xs:"1rem"
                                }
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

        </Box>
    )
}

export default SideBarContent