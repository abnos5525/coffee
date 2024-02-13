import {createTheme, ThemeProvider} from "@mui/material/styles";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";
import {HelmetProvider} from "react-helmet-async";

export const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
})

export const theme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "vazir, roboto",
        allVariants:{
            color:"#484848",
            fontWeight:"bolder"
        },
    },
    palette:{
        mode:"dark",
        primary:{
            main:"#fde5b9",
            dark:"#ffd595",
        },
        secondary:{
            main:"#8F4826",
            light:"#c26133",
        },
        text:{
            primary:"#1e1e1e"
        }
    }
})

const MainTemplate = ({children}) => {
    return(
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    {children}
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MainTemplate