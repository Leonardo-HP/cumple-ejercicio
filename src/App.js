
import "./styles.css";
import { useState } from "react";

function App() {
  const signos = [
    {
      key: "rata",
      years: [1936, 1948, 1960, 1972, 1996, 2020],
      imagen: "https://i.postimg.cc/DJGkXs2y/mouse.png",
      description:
        " Personas llenas de vitalidad, curiosas y brillantes a nivel intelectual. Su naturaleza es sociable, suelen ser personas divertidas y simpáticas con madera de líder.",
    },
    {
      key: "buey",
      years: [1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021],
      imagen: "https://i.postimg.cc/q6dfXRRc/ox.png",
      description:
        " Las personas de este signo suelen ser personas inteligentes, confiables, humildes y con mucha determinación. Se trata de personas con mucha bondad que dan gran importancia a la familia y al trabajo.",
    },
    {
      key: "tigre",
      years: [1938, 1950, 1962, 1974, 1986, 1998, 2010],
      imagen: "https://i.postimg.cc/gXj7dpZF/tiger-1.png",
      description:
        "Se trata de personas valientes, activas, amables, benevolentes y con un carácter muy apto para liderar.",
    },
    {
      key: "conejo",
      years: [1939, 1951, 1963, 1975, 1987, 1999, 2011],
      imagen: "https://i.postimg.cc/LJypK2CR/rabbit.png",
      description:
        "personas muy sinceras con todo lo que hacen. Ellos son buenos y honestos y solo esperan que los demás también lo sean. Son tranquilos, confiados, atentos a los detalles y fuertes.",
    },
    {
      key: "dragon",
      years: [1940, 1952, 1964, 1976, 1988, 2000, 2012],
      imagen: "https://i.postimg.cc/ZCSZ6fvk/dragon.png",
      description:
        "Su principal rasgo es la responsabilidad, pero además, los del signo del dragón son fuertes e independientes, con mucho valor, tenaces, inteligentes, entusiastas, confiados y luchadores. Eso sí, anhelan vivir con amor. ",
    },
    {
      key: "serpiente",
      years: [1941, 1953, 1965, 1977, 1989, 2001, 2013],
      imagen: "https://i.postimg.cc/w1YnNnSL/snake.png",
      description:
        " Se trata de personas muy intuitivas, con una mente profunda y compleja que cuando aman, lo hacen de forma sincera. Tienen mucho sentido del humor, son calmados y suelen ser planificadores.",
    },
    {
      key: "caballo",
      years: [1942, 1954, 1966, 1978, 1990, 2002, 2014],
      imagen: "https://i.postimg.cc/rDykPK9Q/horse.png",
      description:
        "A nivel de personalidad, se trata de personas que, como el caballo, necesitan tener espacio para sí mismas. Son espíritus libres capaces de perseguir sus sueños sin descanso. Son estudiosos y atléticos y unos acérrimos buscadores de la felicidad. Eso sí, muchas veces se enfadan rápido, aunque también olvidan sus discusiones o afrentas al momento y en ocasiones no son capaces de ver sus propios defectos.",
    },
    {
      key: "cabra",
      years: [1943, 1955, 1967, 1979, 1991, 2003, 2015],
      imagen: "https://i.postimg.cc/9rY2bGyD/goat.png",
      description:
        "Se trata de personas empáticas que siempre piensan en los demás aunque esto les suponga un perjuicio a ellas. Son perseverantes, generosos, fuertes, resistentes, motivados y muy tolerantes, algo que les permite tener muchos amigos",
    },
    {
      key: "mono",
      years: [1944, 1956, 1968, 1980, 1992, 2004, 2016],
      imagen: "https://i.postimg.cc/yJtCxnCb/monkey.png",
      description:
        "Se trata de personas empáticas que siempre piensan en los demás aunque esto les suponga un perjuicio a ellas. Son perseverantes, generosos, fuertes, resistentes, motivados y muy tolerantes, algo que les permite tener muchos amigos ",
    },
    {
      key: "gallo",
      years: [1945, 1957, 1969, 1981, 1993, 2005, 2017],
      imagen: "https://i.postimg.cc/WqmB9vFB/rooster.png",
      description:
        "Son personas de apariencia dura y fuerte pero que en el fondo, como todos los demás, necesitan del amor y afecto de quienes les rodean. Se trata de un perfil de persona seria, discreta y perfeccionista con un gran sentido de la familia. Suelen ser activos, divertidos, sociales y activos. Eso sí, les gusta ganar, se meten mucho en discusiones, se desesperan si los demás no les escuchan y son muy orgullosos. ",
    },
    {
      key: "perro",
      years: [1946, 1958, 1970, 1982, 1994, 2006, 2018],
      imagen: "https://i.postimg.cc/4nts7Cdb/dog.png",
      description:
        "Se trata de personas muy afectuosas, pues este es su rasgo principal y el que los une con los perros. Son, como el mejor amigo del hombre, leales, afables, afectuosos, sinceros y prudentes. Aunque son personas aparentemente calmadas, muchas veces llevan la preocupación en su interior.",
    },
    {
      key: "cerdo",
      years: [1947, 1959, 1971, 1983, 1995, 2007, 2019],
      imagen: "https://i.postimg.cc/3ydH3VVG/pig.png",
      description:
        "Se trata de personas honestas, valientes, enérgicas y entusiastas. No son derrochadoras pero les gusta disfrutar de la vida y aunque siempre se mantienen muy realistas, la realidad es que suelen tener muy buena suerte en su vida personal y sus proyectos.",
    },
    {
      key: "Mentiroso",
      years: [""],
      imagen: "https://i.postimg.cc/XXw6NwHs/zodiac.png",
      description: "",
    },
  ];

  //declaramos las variables y su manejador de estado con un hook

  //el primer parametro de la constante es el estado

  //el segundo parametro "setN" es el que modificador del estado de nuestra variable

  //despues el parametro de use State es el estado actual con el que empieza la constante en este caso esta vacio

  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [locacion, setLocacion] = useState("");
  const [info, setInfo] = useState("");
  const [yearZodiaco, setYearZodiaco] = useState("");
  const [edad, setEdad] = useState(null);
  const [saludo, setSaludo] = useState("");
  const [signo, setSigno] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcionZodiaco, setDescripcionZodiaco] = useState("");
  const [zodiaco, setZodiaco] = useState("");
  const [nombrePelicula, setNombrePelicula] = useState("");



  const [imagenZodiaco, setImagenZodiaco] = useState(
    <img
      alt="imagen zodiaco"
      src="https://i.postimg.cc/XXw6NwHs/zodiac.png"
    ></img>
  );



  //esta es la cracion del componente imagen zodiazco pero depende del valor que se le va a otorgar dependiendo del loop que nos da el src de
  const ImagenZodiacoComponente = () => {
   
    return imagenZodiaco;
  };

  const Zodiaco = () => {
    return zodiaco;
  };
  const DescripcionZodiaco = () => {
    return descripcionZodiaco;
  };
const NombrePelicula =()=>{
  return nombrePelicula
}


  //para leer el valor de cada variable usamos el primer parametro ej. nombre y para modificatrlo podemos usar el setNombre agregandole
  //la modificacion del valor " <button onClick={() => setNombre(nombre = "Leonardo")}>""

  //esta funcion componente que nuestro boton submit va a realizar cuando hagamos click en submit
  const handleSubmit = async(e) => {
    e.preventDefault();

    //desde aqui podemos modificar el comportamiento de nuestros modificadores de estado en este caso actualizamos el set info
    //para imprimirlo despues

    //set info esta modificando el valor de info y lo esta cambiando por la informacion otorgada dentro de su modificador
    setInfo(
      `Hola ${nombre} tu fecha de nacimiento es ${fecha} y naciste en ${locacion}.`
    );

    let cumple = new Date(fecha);

    let monthDiff = Date.now() - cumple.getTime();

    // formateamos a date
    let edadFormatoDate = new Date(monthDiff);

    // el año dependiendo de la edad en formato date
    let year = edadFormatoDate.getUTCFullYear();

    // la edad en valor absoluto menos el valor de cuando empieza en formato universal
    let edad = year - 1970;

    // el año que tomaremos para comparar con los valores de zodiaco
    let yearZodiaco = new Date().getFullYear() - edad;

    // definimos year zodiaco con la misma definicion que se resuelve despues
    setEdad(edad);
    setYearZodiaco(yearZodiaco);

    if (edad) {
      if (edad >= 5 && edad <= 90) {
        if (nombre) {
          setSaludo(`Hola ${nombre}, tienes ${edad} años. ¿cómo estás? `);
        } else {
          setSaludo(`Hola, tienes ${edad} años. ¿cómo estás? `);
        }

        // ciclo for para iterar dentro del objeto de objetos
        for (let item of signos) {
          if (item.years.includes(yearZodiaco)) {
            // asignacion de valorres
            setSigno(item.key);
            console.log(signo);

            setImagen(item.imagen);
            console.log(imagen);

            setDescripcionZodiaco(item.description);
            console.log(descripcionZodiaco);

            // aqui termina de iterar
            break;
          }
        }

        if (yearZodiaco) {
          setZodiaco(`Tu signo zodiacal es ${signo}`);
          setImagenZodiaco(<img alt={signo} src={imagen}></img>);


          const respuesta = await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=70b958dc189d24fadf58a95a841be354&language=es-mx&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_year=" + yearZodiaco + "&vote_count.gte=700&vote_average.gte=6")).json();
 let nombrePeliculaAPI = respuesta.results[0].title;

setNombrePelicula (`¿Sabías que la película más popular en tu año de nacimiento fue ${nombrePeliculaAPI}?`

)

        } else {
          setZodiaco("");
        }
      } else {
        setSaludo("Tus mentiras hacen llorar al niño Dios");
        setDescripcionZodiaco("");
        setImagenZodiaco("https://i.postimg.cc/XXw6NwHs/zodiac.png");
        setZodiaco("");
      }
    } else {
      if (nombre) {
        setSaludo(`Hola ${nombre}, por favor ingresa tu edad`);
      } else {
        setSaludo("Por favor ingresa tu edad");
        setDescripcionZodiaco("");
        imagenZodiaco("https://i.postimg.cc/XXw6NwHs/zodiac.png");
        setZodiaco("");
      }
    }

    console.log(yearZodiaco);
    console.log(edad);
    console.log(signo)
  };
  


// imagen ZodiacoProps esta trabajando en paralelo a imagen Zosfiaco
/*const ImagenZodiacoProps = (props) => {


  const signo = props.signo;
  const signosY = signos.map(({ key, imagen }) => ({ [key]: imagen }));


  const defaultImg = "https://i.postimg.cc/XXw6NwHs/zodiac.png"

  return <img src={signosY[signo] || defaultImg} alt= "imagen"></img>
  }
*/

const ImagenZodiacoProps = (props) => {

  const signosLista = signos.map(({ key, imagen }) => ({ [key]: imagen }));
  console.log(signosLista)

  const signoZ = signosLista[props.signo]  

  const imagenSignoZ = signoZ ||  signosLista[12].Mentiroso

  return <img src={imagenSignoZ}  alt= "imagen"></img>
  }


    
  return (
    <div className="App">
      <header className="App-header">
   
        <p>Unicamente imprimimos la informacion</p>

        <form onSubmit={handleSubmit}>
          <label>
            {" "}
            ¿Cuál es tu nombre?
            {/* aquieestamos usando  un evento on change para utilizar nuestro modificador para que nombre se convierta en el valor dentro de nuestro input 
        al igual que se hizo con input setNombre esta tomando la informacion dentro para modificar el nombrea*/}
            {/* aunque definir el valor es redundante por que el modificador esta definiendo la constante, por ahora lo dejamos para manejar que visualmente el codigo*/}
            <input
              type="text"
              value={nombre}
              placeholder="aqui va tu nombre"
              onChange={(e) => setNombre(e.target.value)}
            />
          </label>

          <br></br>
          <label>
            {" "}
            ¿Cuando naciste loco?
            <input
              type="date"
              value={fecha}
              placeholder="aqui va tu fecha"
              onChange={(e) => setFecha(e.target.value)}
            />
          </label>
          <br></br>

          <label>
            {" "}
            ¿Dónde naciste?
            <select
              value={locacion}
              onChange={(e) => setLocacion(e.target.value)}
            >
              <option value="">Selecciona tu ciudad</option>
              <option value="Puebla,MX">Puebla MX</option>
              <option value="NewYork,US">Nueva York US</option>
              <option value="Mumbai,IN">Mumbai IN</option>
              <option value="London,UK">Londres UK</option>
            </select>
          </label>

          <input id="boton" type="submit" value="Submit" />
        </form>

        <p>{saludo}</p>

        <Zodiaco></Zodiaco>a
        <ImagenZodiacoComponente></ImagenZodiacoComponente>
        <br></br>
        <br></br>
        <ImagenZodiacoProps></ImagenZodiacoProps>
        <br></br>
        <br />
        <DescripcionZodiaco></DescripcionZodiaco>
        <NombrePelicula></NombrePelicula>


      </header>
    </div>
  );
}

export default App;
