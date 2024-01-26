import "./Apropos.scss";
import Banner from "../../components/Banner";
import kalen from "../../assets/images/kalen.jpeg";
import Collapse from "../../components/Collapse";

function Apropos() {
  return (
    <main>
      <Banner cover={kalen}></Banner>
      <div className="collapses">
        <Collapse
          title="Fiabilité"
          contenu={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>}
        />
        <Collapse
          title="Respect"
          contenu={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
        />
        <Collapse
          title="Service"
          contenu={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
        />
        <Collapse
          title="Sécurité"
          contenu={<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}
        />
      </div>
    </main>
  );
}

export default Apropos;
