import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//documentacion en hooks https://reactjs.org/docs/hooks-state.html

function App() {


//declaramos las variables y su manejador de estado con un hook

//el primer parametro de la constante es el estado

//el segundo parametro "setN" es el que modificador del estado de nuestra variable

//despues el parametro de use State es el estado actual con el que empieza la constante en este caso esta vacio


const [nombre,setNombre] = useState("");
const [fecha, setFecha] = useState("");
const [locacion,setLocacion] = useState('')
const [info,setInfo] = useState("");

//para leer el valor de cada variable usamos el primer parametro ej. nombre y para modificatrlo podemos usar el setNombre agregandole 
//la modificacion del valor " <button onClick={() => setNombre(nombre = "Leonardo")}>""



//esta funcion componente que nuestro boton submit va a realizar cuando hagamos click en submit 
const handleSubmit =(e) =>{
  e.preventDefault()


  //desde aqui podemos modificar el comportamiento de nuestros modificadores de estado en este caso actualizamos el set info
  //para imprimirlo despues 

  //set info esta modificando el valor de info y lo esta cambiando por la informacion otorgada dentro de su modificador
    setInfo(`Hola ${nombre} tu fecha de nacimiento es ${fecha} y naciste en ${locacion}.`)

}




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Unicamente imprimimos la informacion
        </p>
      
      


  <form onSubmit={handleSubmit}>
    <label> ¿Cuál es tu nombre?

    {/* aquieestamos usando  un evento on change para utilizar nuestro modificador para que nombre se convierta en el valor dentro de nuestro input 
        al igual que se hizo con input setNombre esta tomando la informacion dentro para modificar el nombrea*/}

{/* aunque definir el valor es redundante por que el modificador esta definiendo la constante, por ahora lo dejamos para manejar que visualmente el codigo*/}

      <input type="text"  value={nombre} placeholder="aqui va tu nombre" onChange={(e)=>setNombre(e.target.value)}/>
    </label>

    <br></br>
    <label> ¿Cuando naciste?
    <input type="date" value={fecha} placeholder="aqui va tu fecha" onChange={(e)=>setFecha(e.target.value)}/>
    </label>
    <br></br>

	 <label> ¿Dónde naciste?
	 <select  value={locacion} onChange={(e)=>setLocacion(e.target.value)}> 
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
