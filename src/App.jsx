import "./App.css";
import Header from "./components/header/header";
import Conteudo1 from "./components/conteudo1/conteudo1";
import Conteudo2 from "./components/conteudo2/conteudo2";
import Conteudo3 from "./components/conteudo3/conteudo3";
import Conteudo4 from "./components/conteudo4/conteudo4";
import Conteudo5 from "./components/conteudo5/conteudo5";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Header />
      <Conteudo1/>
      <Conteudo2/>
      <Conteudo3/>
      <Conteudo4/>
      <Conteudo5/>
      <Footer/>
    </>
  );
}

export default App;