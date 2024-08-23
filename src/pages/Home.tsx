import { CardComponentApi } from "../components/CardComponentApi"
import Footer from "../components/Footer"
import { ItemContainer } from "../components/ItemContainer"
import Mycarousel from "../components/Mycarousel"
import Mynavbar from "../components/Mynavbar"
import { UseEffectApi } from "../hooks/UseEffectApi"
import '../pages/Head.css'


export const Home=()=>{
    return <>
    <Mynavbar/>
    <Mycarousel/>
    <center style={{margin:'10px'}}><h1>New arrivals</h1></center>< CardComponentApi/>
    <Footer/>
    </>
}