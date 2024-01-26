import "./ListeLocation.scss";
import Location from "../Location";

function ListeLocation() {
  return (
    <section className="locations">
        <Location titre="titre 1"/>
        <Location titre="titre 2"/>
        <Location titre="titre 3"/>
        <Location titre="titre 4"/>
        <Location titre="titre 5"/>
        <Location titre="titre 6"/>
    </section>
  );
}
export default ListeLocation;
