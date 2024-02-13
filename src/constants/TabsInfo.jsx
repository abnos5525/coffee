import {CoffeeRounded, HomeRounded, InfoRounded} from "@mui/icons-material";
import {useTranslation} from "react-i18next";

export const TabsInfo = () =>{

    const {t} = useTranslation()

    const tabsInfo = [
        {label: t('header.home') ,icon: <HomeRounded sx={{verticalAlign:"middle",mx:1}} />},
        {label:t('header.products'),icon: <CoffeeRounded sx={{verticalAlign:"middle",mx:1}} />},
        {label:t('header.aboutUs'),icon: <InfoRounded sx={{verticalAlign:"middle",mx:1}} />},
    ]
    return tabsInfo
}