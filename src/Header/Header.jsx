import logo from "../assets/logo.png"
import s from "./Header.module.scss"

const Header = () => {
    return (
        <header className={s.container}>
            <div className={s.divisao}>
                <img src={logo} alt="Logo de ano novo" />
            </div>
            <section className={s.box}>
                <ul>
                    <li>Paz</li>
                    <li>Saúde</li>
                    <li>Alegria</li>
                </ul>
            </section>
        </header>

    )
}
export default Header;
