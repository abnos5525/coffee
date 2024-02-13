import Grid from "@mui/material/Unstable_Grid2";
import coffee from "../../assets/coffee.png"
import {Box, Skeleton, Slide, Typography} from "@mui/material";
import OrderBtn from "../OrderBtn.jsx";
import {
    BatteryCharging90Outlined,
    LocalFloristOutlined,
    MonitorHeartOutlined,
    ParkOutlined
} from "@mui/icons-material";
import {useContext, useEffect, useRef, useState} from "react";
import {ContextApp} from "../../context/ContextApp.js";
import Typed from "typed.js";
import {useTranslation} from "react-i18next";

const Home = () =>{

    const {setLoading,loading} = useContext(ContextApp)

    const {t, i18n} = useTranslation()

    const TEXTS_fa = ["کاپوچینو","اسپرسو","لاته","آمریکانو","نسکافه","موکا"];
    const TEXTS_en = ["Cappuccino","Espresso","Latte","Americano","Nescafe","Moka"];

    const nameRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(nameRef.current, {
            strings: i18n.language === "en" ? TEXTS_en : TEXTS_fa,
            typeSpeed: 70,
            showCursor:false,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, [i18n.language]);

    useEffect(() => {
        setLoading(true)

        return()=>{
            setLoading(false)
        }
    }, [i18n.language]);

    const badge = {
        backgroundColor:"secondary.main",
        width:80,
        height:80,
        borderRadius:50,
        margin:"auto",
        textAlign:"center",
        mt:8,
        mx:2,
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center'
    }

    const icon = {fontSize:60,color:"#fff",cursor:"pointer"}

    const [avatarLoaded, setAvatarLoaded] = useState(false);

    const handleAvatarLoad = () => {
        setAvatarLoaded(true);
    }

    const imageStyle = {
        width:{
            xl:400,
            lg:400,
            md:300,
            sm:300,
            xs:200
        },
        margin: 'auto',
        display: 'block',
        textAlign:"center"
    }

    return(
        <>
        <Grid container sx={{direction: i18n.language === "en" ? "ltr" : "rtl"}}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ order: { xs: 1, sm: 2,md:1 } }}>
                    {!avatarLoaded && ( // نمایش Skeleton تا زمانی که تصویر آواتار بارگذاری نشده است
                        <Skeleton variant="rectangular" animation="wave"
                                  sx={{...imageStyle,height:250, width:300}} />
                    )}
                        <Box src={coffee} component="img"  className="float-animation"
                             onLoad={handleAvatarLoad} style={!avatarLoaded ? { display: 'none' } : {}}
                             sx={imageStyle}
                        />
                </Grid>
            <Slide direction="down" in={loading} style={{transitionDelay: loading ? "200ms": "0"}}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{mt:5, order: { xs: 2, sm: 2,md:1 }}}>
                    <Typography variant="h4"
                                sx={{
                                    textAlign:"center",
                                    color:"secondary.main",
                                }}>
                        {t("home.title")}
                    </Typography>
                    <Typography variant="h6"
                                sx={{
                                    textAlign:"center",
                                    mt:4
                                }}>
                        {t("home.family")}
                    </Typography>
                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                        <OrderBtn width={120}/>
                    </Box>
                </Grid>
            </Slide>

        </Grid>

            <Grid container justifyContent="center">
                <Slide direction="down" in={loading} style={{transitionDelay: loading ? "400ms": "0"}}>

                    <Grid xs={12} justifyContent="center">
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center',
                            justifyContent: 'center',
                            direction: i18n.language === "fa" ? "rtl" : "ltr"
                        }}>
                                        <Typography ref={nameRef}
                                                    sx={{
                                                        textAlign:"center",
                                                        mt:2,
                                                        fontSize:{
                                                            xs:40,
                                                            md:50
                                                        },
                                                    }}>
                                        </Typography>
                                        <Typography
                                            sx={{
                                                textAlign:"center",
                                                mt:2,
                                                fontSize:{
                                                    xs:40,
                                                    md:50
                                                },
                                                mx:2,
                                            }}>
                                            {t("home.enjoy")}
                                        </Typography>
                        </Box>

                        <Typography
                                    sx={{
                                        textAlign:"center",
                                        mt:2,
                                        fontSize:{
                                            xs:i18n.language === "en" ? 20 : 35,
                                            md: i18n.language === "en" ? 25 : 45
                                        },

                                    }}>
                            {t("home.family2")}
                        </Typography>
                    </Grid>
                </Slide>
                    <Grid container sx={{mb:10}}>
                            <Grid item xs={3}>
                                <Box sx={badge}>
                                    <ParkOutlined sx={icon} className="icon"/>
                                </Box>
                                <Typography variant="h6" sx={{textAlign:"center"}}>
                                    {t("home.bottomIcons.natural")}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Box sx={badge}>
                                    <MonitorHeartOutlined sx={icon} className="icon"/>
                                </Box>
                                <Typography variant="h6" sx={{textAlign:"center"}}>
                                    {t("home.bottomIcons.healthy")}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Box sx={badge}>
                                    <BatteryCharging90Outlined sx={icon} className="icon"/>
                                </Box>
                                <Typography variant="h6" sx={{textAlign:"center"}}>
                                    {t("home.bottomIcons.energy")}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Box sx={badge}>
                                    <LocalFloristOutlined sx={icon} className="icon"/>
                                </Box>
                                <Typography variant="h6" sx={{textAlign:"center"}}>
                                    {t("home.bottomIcons.fresh")}
                                </Typography>
                            </Grid>
                    </Grid>
            </Grid>
        </>
    )
}

export default Home