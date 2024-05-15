import style from "../../components/conteudo2/conteudo2.module.css";
import foneCont2 from "../../assets/img/fone-imgcont2.png";

const Conteudo2 = () => {
    return (
        <section className={style.section2}>
          <div className={style.wrapperContent2}>
            <img src={foneCont2} alt="" />
            <div className={style.conteoTextoud2}>
        <h2>Fone de Ouvido Bluetooth Motorola Moto XT 220 |
Branco</h2>
<p className={style.price}>D̵e̵ ̵:̵ ̵R̵$̵ ̵1̵.̵2̵0̵0̵,̵0̵0̵</p>
          <p className={style.pp}>Por R$ 312,55 à vista via PIX ou 1x no cartão
ou até 4x de R$ 82,25 sem juros</p>
        <button>COMPRAR</button>
        </div> 
        </div>
        </section>
    );
};

export default Conteudo2;