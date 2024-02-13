import {Button} from "@mui/material";
import {TranslateOutlined} from "@mui/icons-material";
import {useTranslation} from "react-i18next";

const LangBtn = ({width}) =>{

    const {i18n} = useTranslation()

    const onChangeLang = () =>{
        if(i18n.language === "en")
            i18n.changeLanguage("fa")
        else
            i18n.changeLanguage("en")
    }

    return(
        <Button variant="contained" onClick={onChangeLang}
                sx={{
                    bgcolor:"secondary.main",
                    ":hover":{
                        bgcolor:"secondary.light"
                    },
                    color:"#fff",
                    width: width
                }}>
            <TranslateOutlined/>
        </Button>
    )
}

export default LangBtn