import style from "./Style.module.scss";

import Menu from "components/Menu/Menu";
function App() {
  return (
    <section className={style.container}>
      <Menu />
    </section>
  );
}

export default App;
