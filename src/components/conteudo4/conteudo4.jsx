import style from "../../components/conteudo4/conteudo4.module.css";
import som1 from "../../assets/img/som1-removebg-preview.png"

const Conteudo4 = () => {
    return (
        <section className={style.section4}>
          <article className={style.article4}>
            <img src={som1} alt="" />
            <div className={style.conteoTextoud4}>
        <h2>Caixa de som bluetooth ROKR800 Motorola 
Preto</h2>
<p className={style.price}>D̵e̵ ̵:̵ ̵R̵$̵ ̵1̵.̵4̵9̵9̵,̵0̵0̵</p>
          <p className={style.ppp}>Por R$ 1.234,05 à vista via PIX ou 1x no cartão
ou até 12x de R$ 108,25 sem juros</p>
        <button>COMPRAR</button>
        </div> 
        </article>
        </section>
    );
};

export default Conteudo4;