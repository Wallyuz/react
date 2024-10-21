import { Fragment, React } from "react";

function App(){
  return(
    // utilizar fragment para retornar mais de um elemento
    // <> </> é a mesma coisa que um fragment
    <>

    {/* // Components em React */}
    <h3>Aqui sera a pagina Home</h3>

    </>
  );
}
// default aceita outro nome para importar, posso utulizar qualquer nome
// export default App;
// export aceita exatamento o nome que foi definido
export {App};