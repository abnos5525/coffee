import Grid from "@mui/material/Unstable_Grid2";

const TabPanel = (props) =>{
    const { children, value, index, ...other } = props;
    return(
        <Grid xs={12} sx={{height:"auto"}}
             role="tabpanel"
             hidden={value !== index}
             id={`simple-tabpanel-${index}`}
             aria-labelledby={`simple-tab-${index}`}
             {...other}>
            {value === index && (
                    <>{children}</>
            )}
        </Grid>
    )
}

export default TabPanel