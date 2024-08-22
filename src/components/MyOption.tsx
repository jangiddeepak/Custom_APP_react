import { Margin } from "@mui/icons-material"
import { Button } from "@mui/material"

export const MyOption =({name="nothing"})=>{
    return <>

    <Button variant="text" color="inherit" style={{marginLeft: '3vw',paddingTop:'1vw',fontWeight:'1000'}}>{name}</Button>

    </>
}