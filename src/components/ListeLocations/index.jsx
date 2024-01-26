import "./ListeLocation.scss";
import Card from "../Card";
import locationData from "../../data/listLogement.json";

function ListeLocation() {
  return (
    <section className="locations">
      {locationData.map((logement) => (
        <Card
          key={logement.id}
          titre={logement.title}
          cover={logement.cover}
        />
      ))}
    </section>
  );
}
export default ListeLocation;
