import style from "../footer/footer.module.css";
import logoO from "../../assets/img/logoo.png"



const Footer= () =>{
    return (
        <footer className={style.footer}>
    <div className={style.wrapperFooter}>
        <div className={style.imgContainer}>
       <img src={logoO} alt="" />
        </div>
    </div>
    <p className={style.footerP}> O nome MOTOROLA e o logotipo M estilizado são marcas registradas da Motorola Trademark Holdings, LLC.

MOTOROLA MOBILITY COMERCIO DE PRODUTOS ELETRONICOS LTDA CNPJ: 01.472.720/0003-84

Os produtos da marca Moto são projetados e fabricados pela ou para Motorola Mobility LLC, uma subsidiária da Lenovo.

Endereço: Av Chedid Jafet, 222 - Sao Paulo/SP - 04551-065

Venda e entrega

MOTOROLA MOBILITY COMERCIO DE PRODUTOS ELETRONICOS LTDA. - CNPJ: 01.472.720/0001-12

Rodovia Sp 340 - Km 128, 7 s/n - Bairro Tanquinho - Cep 13820-000 - Jaguariúna, SP

O preço válido será o da finalização da compra.
      </p>
    <div className={style.footerCopy}>
        <p><p>© 2023 Aston Martin. Todos os direitos reservados.</p></p>
      <div className={style.footerPolicy}>
        <a className={style.footerPolicyBtn} href="#">Termos de uso</a>
        <a className={style.footerPolicyBtn} href="#">Política de Privacidade</a>
    </div>
    </div>
</footer>
    );
};

export default Footer;