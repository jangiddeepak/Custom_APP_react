import { useEffect, useState } from "react"
import { apicaller } from "../api/api"
import { Grid } from "@mui/material"
import Mycards from "./Mycards"



export const CardComponentApi = () => {
    let [apidata, setdataApi] = useState([])
    useEffect(() => {
        (async () => {

            setdataApi(await apicaller())
        })()

    }, [])

    return <>
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            marginTop={"50px"}
        >
            {apidata.map((a: any) => {
                return <Mycards img ={a.images} title={a.car} price={ "Rs "+a.price}/>
            })}




        </Grid>

    </>
}