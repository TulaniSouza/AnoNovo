import facebook from "../assets/Facebook.png"
import instagram from "../assets/Instagram.png"
import linkedin from "../assets/Linkedin.png"
import s from "./Footer.module.scss"


const Footer = () => {
    return(
        <footer className={s.footer}>
            <img src={facebook} alt="ícone do Facebook" />
            <img src={instagram} alt="ícone do Instagram" />
            <img src={linkedin} alt="ícone do Linkedin"/>
         </footer>
    )
}
export default Footer;