import s from "./Main.module.scss"
import ano from "../assets/AnoNovo.png"


const Main = () => {
    return (

        <main className={s.container}>
            <img src={ano} alt="Ano novo" />
            <section className={s.box}>
                <h3>Boas Festas!!!</h3>
                <h2>Felicidades!!!</h2>
                <p>
                    Em 2025, vamos juntos programar, Com mais código limpo e muito para alcançar! Que o ano novo traga só funções de felicidade,E que a paz seja nossa variável de realidade!Sem bugs, sem falhas, com muito amor,Vamos debugar os problemas com ardor!Que a vida seja sempre o output de alegria,o Vai Na Web te deseja um Ano Novo, que seja pura harmonia!
                </p>

            </section>

        </main>

    )
}
export default Main;