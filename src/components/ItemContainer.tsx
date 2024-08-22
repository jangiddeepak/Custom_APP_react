import { Grid } from "@mui/material"
import Mycards from "./Mycards"




export const ItemContainer = () => {
    return <>

        <Grid 
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            marginTop={"100px"}
        >
         <Mycards/>

      
        </Grid>  
        </>
}