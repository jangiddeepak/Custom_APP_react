import { useEffect, useState } from "react"
import { apicaller } from "../api/api"
import { Grid } from "@mui/material"
import Mycards from "./Mycards"
import { Electapicaller } from "../api/electricApi"



export const ElectronicCompi = () => {
    let [electapidata, setelectdataApi] = useState([])
    useEffect(() => {
        (async () => {

            setelectdataApi(await Electapicaller())
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
            {electapidata.map((a: any) => {
                return <Mycards img ={a.images} title={a.title} price={ "Rs "+a.price}/>
            })}
            </Grid>

    </>
}