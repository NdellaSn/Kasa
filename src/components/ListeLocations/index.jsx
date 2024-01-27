import "./ListeLocation.scss";
import Card from "../Card";
import locationData from "../../data/listLogement.json";
import { Link } from "react-router-dom";

function ListeLocation() {
    return (
        <section className="locations">
            {locationData.map((logement) => (
                <Link key={logement.id} to={"/logement/"+logement.id}>
                    <Card
                        titre={logement.title}
                        cover={logement.cover}
                    />
                </Link>

            ))}
        </section>
    );
}
export default ListeLocation;
