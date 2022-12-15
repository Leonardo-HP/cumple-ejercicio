import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {


//declaramos las variables y su manejador de estado;

//el primer parametro de la constante es el estado

//el segundo parametro "setN" es el que modificador del estado de nuestra variable

//despues el parametro de use State es el estado actual con el que empieza la constante en este caso esta vacio


const [nombre,setNombre] = useState("");
const [fecha, setFecha] = useState("");
const [locacion,setLocacion] = useState('')
const [info,setInfo] = useState("");

//para leer el valor de cada variable usamos el primer parametro ej. nombre y para modificatrlo podemos usar el setNombre agregandole 
//la modificacion del valor " <button onClick={() => setNombre(nombre = "Leonardo")}>""


const handleSubmit =(e) =>{
  e.preventDefault()

  //set info esta modificando el valor de info y lo esta cambiando por la informacion otorgada dentro de su modificador
setInfo(nombre+fecha+locacion)

}




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
    
        >
          Learn React
        </a>



  <form onSubmit={handleSubmit}>
    <label> ¿Cuál es tu nombre?
      <input type="text" value={nombre} placeholder="aqui va tu nombre" onChange={(e)=>setNombre(e.target.value)}/>
    </label>


    <label> ¿Cuando naciste?
    <input type="date" value={fecha} placeholder="aqui va tu fecha" onChange={(e)=>setFecha(e.target.value)}/>
    </label>


	 <label> ¿Dónde naciste?
	 <select  value={locacion} onSubmit={(e)=>setLocacion(e.target.value)}> 
   <option value="">Selecciona tu ciudad</option>
    <option value="Puebla,MX">Puebla MX</option>
    <option value="NewYork,US">Nueva York US</option>
		<option value="Mumbai,IN">Mumbai IN</option>
		<option value="London,UK">Londres UK</option>
     </select>
   </label>

   
  <input type="submit" value="Submit" />

</form>

<p>{info}</p>




      </header>

  




    </div>
  );
}

export default App;
