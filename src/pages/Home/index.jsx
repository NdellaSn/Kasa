import Banner from "../../components/Banner";
import "./Home.scss";
import ListeLocation from "../../components/ListeLocations";
function Home() {
  return (
    <main>
      <Banner texte="Chez vous, partout et ailleurs" />
      <ListeLocation/>
    </main>
  );
}

export default Home;
