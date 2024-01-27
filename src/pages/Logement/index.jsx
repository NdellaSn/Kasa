import './Logement.scss'



import './Logement.scss'
import Slider from '../../components/Slider'
import { redirect, useParams } from 'react-router-dom'
import locationData from "../../data/listLogement.json";

function Logement(){
    const { id } = useParams();
    
    const [locationCurrent] = locationData.filter(
        (location)=> location.id === id
    )

return(
    locationCurrent && <main className='logement'> 
        <Slider pictures={locationCurrent.pictures}></Slider>
    </main>
)
}

export default Logement