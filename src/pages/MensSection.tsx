import Footer from "../components/Footer"
import { MenSectionApi } from "../components/MenSectionApi"
import Mynavbar from "../components/Mynavbar"

export const MenSection =()=>{
    return <>
    <Mynavbar/>
    <center><h1>Category :Mens</h1></center>
    <MenSectionApi/>
    <Footer/>
    </>
}