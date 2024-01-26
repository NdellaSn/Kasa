import './Footer.scss'
import logo_blanc from "../../assets/images/logo_blanc.png";

function Footer(){
    return(
        <footer>
        <img src={logo_blanc} alt="logo footer de kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
           
        </footer>
    )
}

export default Footer