import './Logement.scss'



import './Logement.scss'
import Slider from '../../components/Slider'
import { useParams } from 'react-router-dom'
import locationData from "../../data/listLogement.json";
import Tags from '../../components/Tags';
import Hosts from '../../components/Hosts';
import Rate from '../../components/Rate';
import Collapse from '../../components/Collapse';

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
                    <Tags listeTags={locationCurrent.tags} />
                </div>
                <div className='logement__host__and__rate'>
                    <Hosts name={locationCurrent.host.name} picture={locationCurrent.host.picture} />
                    <Rate rating={locationCurrent.rating} />
                </div>
            </div>

            <div className='logement__description__equipement'>
                <Collapse title='Description' contenu={<p>{locationCurrent.description}</p>} />
                <Collapse title='Equipements' contenu={locationCurrent.equipments.map(
                    (equipement) => <p>{equipement}</p>
                )} />
            </div>

        </main>
    )
}

export default Logement