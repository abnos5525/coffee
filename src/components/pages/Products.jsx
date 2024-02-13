import {Box, Skeleton, Typography} from "@mui/material";
import Slider from "react-slick";
import {americano,lattee,espresso,cappuccino} from "../../assets/products"
import {useState} from "react";
import {useTranslation} from "react-i18next";
const Products = () =>{

    const {t} = useTranslation()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows:false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    const imageStyle = {
        m:"auto",
        borderRadius:5,
        width:{
            xl: "50%",
            lg: "50%",
            md: "70%",
            sm: "90%",
            xs: "90%"
        }
    }

    const textStyle = {
        color:"text.primary",
        my:4,
    }

    const [avatarLoaded, setAvatarLoaded] = useState(false);

    const handleAvatarLoad = () => {
        setAvatarLoaded(true);
    }

    return(
        <>
            <Typography variant="h4" sx={{textAlign:"center",my:3}}>
                {t("products.title")}
            </Typography>

            <Slider style={{marginTop:20,marginBottom:60,textAlign:"center"}} {...settings}>
                <Box>
                    {!avatarLoaded && ( // نمایش Skeleton تا زمانی که تصویر آواتار بارگذاری نشده است
                        <Skeleton variant="rectangular" animation="wave"
                                  sx={imageStyle} height={200} />
                    )}
                    <Box onLoad={handleAvatarLoad} style={!avatarLoaded ? { display: 'none' } : {}}  component="img" src={americano} sx={imageStyle}/>
                    <Typography variant="h4" sx={textStyle}>
                        {t("products.americano")}
                    </Typography>
                </Box>
                <Box>
                    {!avatarLoaded && ( // نمایش Skeleton تا زمانی که تصویر آواتار بارگذاری نشده است
                        <Skeleton variant="rectangular" animation="wave"
                                  sx={imageStyle} height={200} />
                    )}
                    <Box onLoad={handleAvatarLoad} style={!avatarLoaded ? { display: 'none' } : {}}  component="img" src={lattee}  sx={imageStyle}/>
                    <Typography variant="h4" sx={textStyle}>
                        {t("products.latte")}
                    </Typography>
                </Box>
                <Box>
                    {!avatarLoaded && ( // نمایش Skeleton تا زمانی که تصویر آواتار بارگذاری نشده است
                        <Skeleton variant="rectangular" animation="wave"
                                  sx={imageStyle} height={200} />
                    )}
                    <Box onLoad={handleAvatarLoad} style={!avatarLoaded ? { display: 'none' } : {}} component="img" src={espresso}  sx={{...imageStyle,height:"90%"}}/>
                    <Typography variant="h4" sx={textStyle}>
                        {t("products.espresso")}
                    </Typography>
                </Box>
                <Box>
                    {!avatarLoaded && ( // نمایش Skeleton تا زمانی که تصویر آواتار بارگذاری نشده است
                        <Skeleton variant="rectangular" animation="wave"
                                  sx={imageStyle} height={200} />
                    )}
                    <Box onLoad={handleAvatarLoad} style={!avatarLoaded ? { display: 'none' } : {}}  component="img" src={cappuccino}  sx={imageStyle}/>
                    <Typography variant="h4" sx={textStyle}>
                        {t("products.cappuccino")}
                    </Typography>
                </Box>
            </Slider>
        </>
    )
}

export default Products