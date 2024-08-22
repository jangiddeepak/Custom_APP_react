import { useEffect, useState } from "react"
import { Grid } from "@mui/material"
import Mycards from "./Mycards"
import { Menapicaller } from "../api/mensApi"



export const MenSectionApi = () => {
    let [apiMendata, setMdataApi] = useState([])
    useEffect(() => {
        (async () => {

            setMdataApi(await Menapicaller())
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


            {apiMendata.map((a: any) => {
                return <Mycards img ={a.image} title={a.title} price={ "Rs "+a.price}/>
            })}





        </Grid>

    </>
}