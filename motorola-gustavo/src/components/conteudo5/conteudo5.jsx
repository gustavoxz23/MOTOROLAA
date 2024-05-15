import style from "../conteudo5/conteudo5.module.css";
import fonE from "../../assets/img/fone-carrosel1.png"


const Conteudo5= () =>{
    return (
        <section className={style.section5}>
            <article className={style.article5}>
            <img src={fonE} alt="" />
            <div className={style.conteoTextoud5}>
                <h2>Fone de Ouvido Bluetooth Motorola Moto Buds 105 
Preto</h2>
                <p className={style.pric1}>D̵̵̵̶̵̵̵e̵̵̵̶̵̵̵:̵̵̵̶̵̵̵ ̵̵̵̶̵̵̵R̵̵̵̶̵̵̵$̵̵̵̶̵̵̵2̵̵̵̶̵̵̵.̵̵̵̶̵̵̵7̵̵̵̶̵̵̵9̵̵̵̶̵̵̵9̵̵̵̶̵̵̵</p>
                <p className={style.pXt}>Por R$ 189,05 à vista via PIX ou 1x no cartão
ou até 2x de R$ 99,50 sem juros</p>
                <button>COMPRAR</button>
            </div>

            </article>
        </section>
    );
};

export default Conteudo5;
