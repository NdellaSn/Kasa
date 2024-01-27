import './Logement.scss'



import './Logement.scss'
import Slider from '../../components/Slider'
import { redirect, useParams } from 'react-router-dom'
import locationData from "../../data/listLogement.json";

function Logement() {
    const { id } = useParams();

    const [locationCurrent] = locationData.filter(
        (location) => location.id === id
    )

    return (
        locationCurrent &&
        <main className='logement'>
            <Slider pictures={locationCurrent.pictures}></Slider>
            <div className='logement__details'>
                <div className='logement__lieu__and__tag' >
                    <h1 className='logement__title'>{locationCurrent.title}</h1>
                    <p className='logement__lieu'>{locationCurrent.location}</p>
                    <div className="logement__tags">
                        {
                            locationCurrent.tags.map(
                                (tag, index) => <button key={'tag-' + index} className='logement__tags__btn'> {tag}</button>
                            )
                        }
                    </div>
                </div>
                <div className='logement__host__and__rate'>
                    <div className='logement__host'>
                        <p className='logement__host_name'>{locationCurrent.host.name}</p>
                        <img className='logement__host_photo' src={locationCurrent.host.picture} alt={locationCurrent.host.name} />
                    </div>
                    <div className='logement__rate'></div>
                </div>
            </div>

        </main>
    )
}

export default Logement