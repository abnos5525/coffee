import {Button} from "@mui/material";
import {useTranslation} from "react-i18next";

const OrderBtn = ({width}) =>{

    const {t} = useTranslation()

    return(
        <Button variant="contained"
                sx={{
                    bgcolor:"secondary.main",
                    ":hover":{
                        bgcolor:"secondary.light"
                    },
                    color:"#fff",
                    width: width
                }}>
            {t("order")}
        </Button>
    )
}

export default OrderBtn