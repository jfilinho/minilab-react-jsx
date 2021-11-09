import "bootstrap/dist/css/bootstrap.min.css";
import Nome from "./Greeting";
import Image from "../assets/images/puppy.jpg";
import tasks from "../components/ToDoList"; 
import { FormCheck } from "react-bootstrap";
import MeuCard from "./Profile";

// Não se esqueça de importar os componentes!

function App() {
  return (
    <div className="container mt-5 mb-5 col-6">
      {/* Não se esqueça de invocar seus componentes aqui! */}
      <small>Interpolação de variáveis</small>
    <div className="nome">
      <h1>Olá, {Nome}</h1>
      </div>
          <hr />
      <small>Imagens</small>
    <div>
     <img src={Image} style={{width: "400px"}}/>
      </div>

    <div>
        <p>{MeuCard()}</p>

    </div>
      <hr />

     
      <small>Renderização de listas</small>
      <ul>
        <FormCheck>
        {tasks.map((task) => {
          return  <li>{task}</li>;
        })}
        </FormCheck>
      </ul>
      
      <hr />

      <small>Renderização condicional</small>
     
       <hr />
    </div>
  );
}

export default App;
