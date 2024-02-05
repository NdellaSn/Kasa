import './Logement.scss'
import Slider from '../../components/Slider'
import { useNavigate, useParams } from 'react-router-dom'
import locationData from "../../data/listLogement.json";
import Tags from '../../components/Tags';
import Hosts from '../../components/Hosts';
import Rate from '../../components/Rate';
import Collapse from '../../components/Collapse';
import { useEffect } from 'react';

function Logement() {
//pour redriger vers une autre route
    const navigate = useNavigate();

//utilise le hook useParams de react router dom pour extraire l'identifiant id de la route
    const { id } = useParams();

//filtré les données qui se trouve dans le tableau locationData en utilssant l'id extrait de la route
    const [locationCurrent] = locationData.filter(
        (location) => location.id === id
    )
//si la route est indéfinie il nous renvoit vers la page 404 
    useEffect(
        () => {
            if (locationCurrent === undefined) {
                navigate("/error");
            }
        },
        [locationCurrent, navigate]
    )
// si locationCurrent est définie la foction retourne les détails du logement 
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