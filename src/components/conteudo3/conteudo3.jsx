import style from "../../components/conteudo3/conteudo3.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import celular1 from "../../assets/img/z.celular1-carrosel.png"
import celular2 from "../../assets/img/z-celular2-carrosel.png"
import celular3 from "../../assets/img/z-celular3-carrosel.png"
import celular4 from "../../assets/img/z-celular4-carrosel.png"
import celular6 from "../../assets/img/z-celular6-carrosel.png"

const Conteudo3 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
    return (
    <div className={style.Conteudo3}>
      <h1> PRODUTOS</h1>
      <Carousel responsive={responsive}>
        <div className={style.card}>
          <img src={celular1} alt="" />
          <h2>Kit moto g84 5G + moto buds 135 
16GB RAM Boost | 256GB | Viva Magenta - Vegan Leather</h2>
          <p className={style.price}> D̶e̶:̶ ̶R̶$̶2̶.̶1̶9̶9̶,̶0̶0̶</p>
          <p className={style.pppp}>Por R$ 1.599,31 à vista via PIX ou 1x no cartão
ou até 12x de R$ 149,91 sem juros</p>
          <p>
            <button>Comprar</button>
          </p>
        </div>
        <div className={style.carrosel2}>
          <img src={celular2} alt="" />
          <h2>moto g34 5G 256 GB 
16GB RAM Boost | Verde - Vegan Leather</h2>
          <p className={style.price}> D̶e̶:̶ ̶R̶$̶ ̶1̶.̶6̶9̶9̶,̶0̶0̶ </p>
          <p className={style.pppp}>Por R$ 1.079,10 à vista via PIX ou 1x no cartão
ou até 12x de R$ 99,91 sem juros</p>
          <p>
            <button>Comprar</button>
          </p>
        </div>
        <div className={style.carrosel3}>
          <img src={celular3} alt="" />
          <h2>moto g24 
8GB RAM Boost | 128GB | Grafite</h2>
          <p className={style.price}>D̶e̶:̶ ̶R̶$̶9̶9̶9̶,̶0̶0̶</p>
          <p className={style.pppp}>Por R$ 749,00 à vista via PIX ou 1x no cartão
ou até 10x de R$ 83,22 sem juros</p>
<button>Comprar</button>
        </div>
        <div className={style.carrosel4}>
          <img src={celular4} alt="" />
          <h2>moto g53 5G 
128 GB - Grafite</h2>

          <p>Este produto está está indisponível :( </p>
          <p>Compare esse produto</p>
        </div>
        <div className={celular6}>
          <img src={celular6} alt="" />
          <h2>motorola edge 50 fusion 5G 
16GB RAM Boost | 256GB | Blue Teal</h2>
          <p className={style.price}>D̶e̶:̶ ̶R̶$̶8̶.̶0̶0̶0̶</p>
          <p className={style.pppp}>Por R$ 2.699,10 à vista via PIX ou 1x no cartão
ou até 12x de R$ 249,91 sem juros</p>
<button>Comprar</button>
        </div>
      </Carousel>;
    </div>
    );
};

export default Conteudo3;