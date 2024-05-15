import style from "../conteudo1/conteudo1.module.css";
import imgCont1 from "../../assets/img/img-cont1.png";

const Conteudo1 = () => {
  return (
    <section className={style.imgCont1}>
      <div className={style.wrapperContent1}>
        <img src={imgCont1} alt="" />
        <div className={style.conteoTextoud}>
          <h2>
            motorola edge 40 neo 5G 16GB RAM Boost | 256GB | Caneel Bay - Vegan
            Leather
          </h2>
          <p className={style.price}> ̶ ̵̶̵D̵̶̵e̵̶̵:̵̶̵ ̵̶̵R̵̶̵$̵̶̵2̵̶̵.̵̶̵7̵̶̵9̵̶̵9̵̶̵</p>
          <p className={style.Mp}>
            motorola edge 40 neo 5G 16GB RAM Boost | 256GB | Caneel Bay - Vegan
            Leather
          </p>
          <button>COMPRAR</button>
        </div>
      </div>
    </section>
  );
};

export default Conteudo1;
