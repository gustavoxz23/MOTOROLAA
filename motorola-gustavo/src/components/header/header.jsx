import style from "../header/header.module.css";
import Logoo from "../../assets/img/logoo.png"

const Header = () => {
  return (
  <header className={style.Header}>
    <div className={style.HeaderWrapper}>

        <div className={style.logo}>
          <img src={Logoo} alt="" />
          </div>
        <nav className={style.nav}>
          <a href="#">Início</a>
          <a href="#">Sobre</a>
          <a href="#">Comprar</a>
          <button>Login</button>
        </nav>
    </div>
  </header>
  );
};

export default Header;