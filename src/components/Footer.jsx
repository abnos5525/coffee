import {Box, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {GitHub, Instagram, LinkedIn, Twitter} from "@mui/icons-material";

const Footer = () =>{
    return(
        <Box component="footer" sx={{bgcolor:"secondary.main",height:100,width:"100%",pb:4}}>
            <Grid container>
                <Grid xs={8} sx={{mt:3,mx:"auto"}}>
                    <Box component="div"
                         sx={{
                             bgcolor: "#fff",
                             display: "flex",
                             justifyContent: "center",
                             alignItems: "center",
                             width: 40,
                             height: 40,
                             borderRadius:2,
                             float:"left",
                             mx:1
                         }}>
                        <Instagram sx={{ color: "secondary.main", fontSize: 40,cursor:"pointer" }} />
                    </Box>

                    <Box component="div"
                         sx={{
                             bgcolor: "#fff",
                             display: "flex",
                             justifyContent: "center",
                             alignItems: "center",
                             width: 40,
                             height: 40,
                             borderRadius:2,
                             float:"left",
                             mx:1
                         }}>
                        <GitHub sx={{ color: "secondary.main", fontSize: 40,cursor:"pointer" }} />
                    </Box>

                    <Box component="div"
                         sx={{
                             bgcolor: "#fff",
                             display: "flex",
                             justifyContent: "center",
                             alignItems: "center",
                             width: 40,
                             height: 40,
                             borderRadius:2,
                             float:"left",
                             mx:1
                         }}>
                        <LinkedIn sx={{ color: "secondary.main", fontSize: 40,cursor:"pointer" }} />
                    </Box>

                    <Box component="div"
                         sx={{
                             bgcolor: "#fff",
                             display: "flex",
                             justifyContent: "center",
                             alignItems: "center",
                             width: 40,
                             height: 40,
                             borderRadius:2,
                             float:"left",
                             mx:1
                         }}>
                        <Twitter sx={{ color: "secondary.main", fontSize: 40,cursor:"pointer" }} />
                    </Box>

                </Grid>

                <Grid xs={2}>
                    <Typography sx={{
                        textAlign:"center",
                        fontSize:{
                            sm:25,
                            md:30
                        },
                        mx:1,
                        mt:3,
                        color:"#fff"
                    }}>
                        Ducino
                    </Typography>
                </Grid>
            </Grid>

        </Box>
    )
}

export default Footer