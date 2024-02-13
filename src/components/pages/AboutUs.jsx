import {Avatar, Box, Skeleton, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import owner from "../../assets/owner.jpg"
import {useState} from "react";
import {useTranslation} from "react-i18next";

const AboutUs = ()=>{

    const [avatarLoaded, setAvatarLoaded] = useState(false);

    const handleAvatarLoad = () => {
        setAvatarLoaded(true);
    }

    const {t, i18n} = useTranslation()

    return(
        <Grid container style={{backgroundColor:"#fff",borderRadius:5}}>
            <Grid xs={12} sx={{my:15}}>
                <Box sx={{backgroundColor:"primary.main",width:"90%",m:"auto",p:2,borderRadius:5}}>
                    {!avatarLoaded && ( // نمایش Skeleton تا زمانی که تصویر آواتار بارگذاری نشده است
                        <Skeleton variant="circular" animation="wave"
                                  sx={{ width: 150, height: 150, m: "auto",
                                      position: "relative", top: -50 }} />
                    )}
                    <Avatar src={owner} onLoad={handleAvatarLoad} // اضافه کنید
                            sx={{ width: 150, height: 150, m: "auto", position: "relative", top: -50 }}
                            style={!avatarLoaded ? { display: 'none' } : {}} // مخفی کردن Skeleton و نمایش آواتار بعد از بارگذاری
                    />
                    <Typography variant="h5" sx={{textAlign:"center",position:"relative",top:-45}}>
                        {t("aboutUs.name")}
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: i18n.language === "en" ? "right" : "left" }}>
                        {t("aboutUs.description")}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default AboutUs