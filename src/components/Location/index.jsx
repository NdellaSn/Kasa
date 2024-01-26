import "./Location.scss";

function Location({ cover, titre }) {
  return (
    <article className="location">
      {
      cover ? (
        <img className="location__img" src={cover} alt={titre}/>
        ) : (
            <div className="location__img__placeholder"></div>
        )
      }
      <div className="location__bg"></div>
      <p className="location__titre">{titre}</p>
    </article>
  );
}
export default Location;
