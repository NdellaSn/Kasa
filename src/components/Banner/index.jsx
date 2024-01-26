import "./Banner.scss";
import img_plage from "../../assets/images/plage.jpeg";


function Banner({ texte='', cover=img_plage  }) {
  return (
    <div className="banner">
      <img src={cover} alt="banner plage" />
      <div className="banner__bg"></div>
      <div className="banner__text">
        <h1>{texte}</h1>
      </div>
    </div>
  );
}
export default Banner;
