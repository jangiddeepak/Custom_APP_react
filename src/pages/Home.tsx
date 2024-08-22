import { CardComponentApi } from "../components/CardComponentApi"
import { ItemContainer } from "../components/ItemContainer"
import Mycarousel from "../components/Mycarousel"
import Mynavbar from "../components/Mynavbar"
import { UseEffectApi } from "../hooks/UseEffectApi"
import '../pages/Head.css'


export const Home=()=>{
    return <>
    <Mycarousel/>

    < CardComponentApi/>
    
    </>
}