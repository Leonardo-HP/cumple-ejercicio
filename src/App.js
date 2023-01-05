
import "./App.css";
import { useState, useEffect } from "react";

const fechas = [
  { key: "rata", years: [1936, 1948, 1960, 1972, 1996, 2020] },
  { key: "buey", years: [1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021] },
  { key: "tigre", years: [1938, 1950, 1962, 1974, 1986, 1998, 2010] },
  { key: "conejo", years: [1939, 1951, 1963, 1975, 1987, 1999, 2011] },
  { key: "dragon", years: [1940, 1952, 1964, 1976, 1988, 2000, 2012] },
  { key: "serpiente", years: [1941, 1953, 1965, 1977, 1989, 2001, 2013] },
  { key: "caballo", years: [1942, 1954, 1966, 1978, 1990, 2002, 2014] },
  { key: "cabra", years: [1943, 1955, 1967, 1979, 1991, 2003, 2015] },
  { key: "mono", years: [1944, 1956, 1968, 1980, 1992, 2004, 2016] },
  { key: "gallo", years: [1945, 1957, 1969, 1981, 1993, 2005, 2017] },
  { key: "perro", years: [1946, 1958, 1970, 1982, 1994, 2006, 2018] },
  { key: "cerdo", years: [1947, 1959, 1971, 1983, 1995, 2007, 2019] }
];

const signos = {
  rata: {
    imagen: "https://i.postimg.cc/DJGkXs2y/mouse.png",
    description:
      " Personas llenas de vitalidad, curiosas y brillantes a nivel intelectual. Su naturaleza es sociable, suelen ser personas divertidas y simpáticas con madera de líder."
  },
  buey: {
    imagen: "https://i.postimg.cc/q6dfXRRc/ox.png",
    description:
      " Las personas de este signo suelen ser personas inteligentes, confiables, humildes y con mucha determinación. Se trata de personas con mucha bondad que dan gran importancia a la familia y al trabajo."
  },
  tigre: {
    imagen: "https://i.postimg.cc/gXj7dpZF/tiger-1.png",
    description:
      "Se trata de personas valientes, activas, amables, benevolentes y con un carácter muy apto para liderar."
  },
  conejo: {
    imagen: "https://i.postimg.cc/LJypK2CR/rabbit.png",
    description:
      "personas muy sinceras con todo lo que hacen. Ellos son buenos y honestos y solo esperan que los demás también lo sean. Son tranquilos, confiados, atentos a los detalles y fuertes."
  },
  dragon: {
    imagen: "https://i.postimg.cc/ZCSZ6fvk/dragon.png",
    description:
      "Su principal rasgo es la responsabilidad, pero además, los del signo del dragón son fuertes e independientes, con mucho valor, tenaces, inteligentes, entusiastas, confiados y luchadores. Eso sí, anhelan vivir con amor. "
  },
  serpiente: {
    imagen: "https://i.postimg.cc/w1YnNnSL/snake.png",
    description:
      " Se trata de personas muy intuitivas, con una mente profunda y compleja que cuando aman, lo hacen de forma sincera. Tienen mucho sentido del humor, son calmados y suelen ser planificadores."
  },
  caballo: {
    imagen: "https://i.postimg.cc/rDykPK9Q/horse.png",
    description:
      "A nivel de personalidad, se trata de personas que, como el caballo, necesitan tener espacio para sí mismas. Son espíritus libres capaces de perseguir sus sueños sin descanso. Son estudiosos y atléticos y unos acérrimos buscadores de la felicidad. Eso sí, muchas veces se enfadan rápido, aunque también olvidan sus discusiones o afrentas al momento y en ocasiones no son capaces de ver sus propios defectos."
  },
  cabra: {
    imagen: "https://i.postimg.cc/9rY2bGyD/goat.png",
    description:
      "Se trata de personas empáticas que siempre piensan en los demás aunque esto les suponga un perjuicio a ellas. Son perseverantes, generosos, fuertes, resistentes, motivados y muy tolerantes, algo que les permite tener muchos amigos"
  },
  mono: {
    imagen: "https://i.postimg.cc/yJtCxnCb/monkey.png",
    description:
      "Se trata de personas empáticas que siempre piensan en los demás aunque esto les suponga un perjuicio a ellas. Son perseverantes, generosos, fuertes, resistentes, motivados y muy tolerantes, algo que les permite tener muchos amigos "
  },
  gallo: {
    imagen: "https://i.postimg.cc/WqmB9vFB/rooster.png",
    description:
      "Son personas de apariencia dura y fuerte pero que en el fondo, como todos los demás, necesitan del amor y afecto de quienes les rodean. Se trata de un perfil de persona seria, discreta y perfeccionista con un gran sentido de la familia. Suelen ser activos, divertidos, sociales y activos. Eso sí, les gusta ganar, se meten mucho en discusiones, se desesperan si los demás no les escuchan y son muy orgullosos. "
  },
  perro: {
    imagen: "https://i.postimg.cc/4nts7Cdb/dog.png",
    description:
      "Se trata de personas muy afectuosas, pues este es su rasgo principal y el que los une con los perros. Son, como el mejor amigo del hombre, leales, afables, afectuosos, sinceros y prudentes. Aunque son personas aparentemente calmadas, muchas veces llevan la preocupación en su interior."
  },
  cerdo: {
    imagen: "https://i.postimg.cc/3ydH3VVG/pig.png",
    description:
      "Se trata de personas honestas, valientes, enérgicas y entusiastas. No son derrochadoras pero les gusta disfrutar de la vida y aunque siempre se mantienen muy realistas, la realidad es que suelen tener muy buena suerte en su vida personal y sus proyectos."
  },
  default: {
    years: [""],
    imagen: "https://i.postimg.cc/XXw6NwHs/zodiac.png",
    description: ""
  }
};

const weatherData = {
  "clear-day": {
    imagen: "https://i.postimg.cc/wTXxVTjz/clear-day.png",
    spanish: "despejado"
  },

  "clear-night": {
    imagen: "https://i.postimg.cc/Dw7vYkSX/clear-night.png",
    spanish: "despejado"
  },

  cloudy: {
    imagen: "https://i.postimg.cc/L8vHcCP0/cloudy.png",
    spanish: "nublado"
  },

  fog: {
    imagen: "https://i.postimg.cc/R0FM47QC/fog.png",
    spanish: "niebla"
  },

  "partly-cloudy-day": {
    imagen: "https://i.postimg.cc/wBG9v10X/partly-cloudy-day.png",
    spanish: "parcialmente nublado"
  },

  "partly-cloudy-night": {
    imagen: "https://i.postimg.cc/vTRMrpRD/partly-cloudy-night.png",
    spanish: "parcialmente nublado"
  },

  rain: {
    imagen: "https://i.postimg.cc/DZ4nb7Mt/rain.png",
    spanish: "lluvioso"
  },
  snow: {
    imagen: "https://i.postimg.cc/x8KQttY5/snow.png",
    spanish: "nevando"
  },
  wind: {
    imagen: "https://i.postimg.cc/KcLmGvLT/wind.png",
    spanish: "con viento"
  }
};

const LogoZodiaco = (props) => {
  const infoZodiaco = signos[props.value];

  console.log(infoZodiaco.imagen);
  console.log(infoZodiaco.description);

  return (
    <div>
      <img src={infoZodiaco.imagen} alt="imagen"></img>
      <p> {infoZodiaco.description} </p>
    </div>
  );
};

const Clima = (props) => {
  const imagenClima = props.value;

  return (
    <div>
      <img src={imagenClima.imagen} alt="imagen"></img>
    </div>
  );
};

export default function App() {
  const [nombre, setNombre] = useState("");

  const [fecha, setFecha] = useState("");

  const [ciudad, setCiudad] = useState("");

  const [saludo, setSaludo] = useState("");

  const [zodiaco, setZodiaco] = useState("default");

  const [edad, setEdad] = useState("");

  const [nombrePeli, setNombrePeli] = useState("");

  const [poster, setPoster] = useState("");

  const [morning, setMorning] = useState("");

  const [noon, setNoon] = useState("");

  const [afternoon, setAfternoon] = useState("");

  const [infoClima, setInfoClima] = useState("");

  const [imagenClima, setImagenClima] = useState("");

  let morningHour = "09:00:00";
  let noonHour = "12:00:00";
  let afternoonHour = "21:00:00";

  const handleSubmit = (e) => {
    e.preventDefault();

    setFecha(
      new Date().getFullYear() -
        (new Date(Date.now() - new Date(fecha).getTime()).getUTCFullYear() -
          1969)
    );
    console.log(fecha);

    setEdad(
      new Date(Date.now() - new Date(fecha).getTime()).getUTCFullYear() - 1970
    );
  };

  useEffect(() => {
    if (fecha && edad && saludo) console.log({ fecha, edad, saludo });
    const x = fechas.find((a) => a.years.includes(fecha));
    if (x) setZodiaco(x.key);

    if (edad)
      setSaludo(
        edad <= 5 || edad >= 90
          ? "Tus mentiras hacen llorar al niño Dios"
          : nombre.length > 0
          ? `Hola ${nombre}, tienes ${edad} años. ¿cómo estás? `
          : `Hola, tienes ${edad} años. ¿cómo estás? `
      );

    console.log({ x, fecha });

    async function fetchData() {
      if (edad >= 5 && edad <= 90) {
        const respuestaPeli = await (
          await fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=70b958dc189d24fadf58a95a841be354&language=es-mx&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_year=" +
              fecha +
              "&vote_count.gte=700&vote_average.gte=6"
          )
        ).json();

        if (fecha) setNombrePeli(respuestaPeli.results[0].title);
        if (fecha)
          setPoster(
            `https://image.tmdb.org/t/p/w300${respuestaPeli.results[0].poster_path}`
          );
      }
      if (ciudad) {
        const respuestaWeather = await (
          await fetch(
            "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
              ciudad +
              "/" +
              fecha +
              "T13:00:00?key=G2NW6FCPG3ZX5W86P2QRA7SLB"
          )
        ).json();

        let dias = respuestaWeather.days[0].hours;

        const morningResult = dias.find((a) =>
          a.datetime.includes(morningHour)
        );
        const noonResult = dias.find((a) => a.datetime.includes(noonHour));

        const afternoonResult = dias.find((a) =>
          a.datetime.includes(afternoonHour)
        );

        setMorning(weatherData[morningResult.icon]);
        setNoon(weatherData[noonResult.icon]);
        setAfternoon(weatherData[afternoonResult.icon]);

        setInfoClima(
          { morning } === { noon } && { noon } === { afternoon }
            ? ` todo el día fue  ${morning.spanish}`
            : { morning } === { noon } && { noon } !== { afternoon }
            ? ` de la mañana a la tarde el día fue  ${morning.spanish}  pero la noche fue  ${afternoon.spanish}`
            : { morning } !== { noon } && { noon } === { afternoon }
            ? ` el día empezó ${morning.spanish} , pero de la tarde a la noche el día fue ${afternoon.spanish}`
            : { morning } !== { noon } && { noon } !== { afternoon }
            ? ` el día empezó ${morning.spanish} luego se puso  ${noon.spanish}  y termino  ${afternoon.spanish}`
            : null
        );

        setImagenClima(noon);

        console.log(`declarado ${infoClima}`);

        console.log({ imagenClima });
      }
    }
    fetchData();
  }, [
    fecha,
    edad,
    saludo,
    nombre,
    ciudad,
    nombrePeli.poster_path,
    nombrePeli.title,
    poster,
    nombrePeli,
    afternoonHour,
    noonHour,
    morningHour,
    morning,
    afternoon,
    noon,
    infoClima,
    imagenClima
  ]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Bienvenido</h1>
        <label>
          ¿Cuál es tu nombre?
          <input
            type="text"
            value={nombre}
            placeholder="aqui va tu nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
          <br></br>
        </label>{" "}
        Por favor introduce tu fecha de nacimiento
        <label>
          <input
            type="date"
            value={fecha}
            placeholder="aqui va tu fecha"
            onChange={(e) => setFecha(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          ¿Dónde naciste?
          <select value={ciudad} onChange={(e) => setCiudad(e.target.value)}>
            <option value="">Selecciona tu ciudad</option>
            <option value="Puebla,MX">Puebla MX</option>
            <option value="NewYork,US">Nueva York US</option>
            <option value="Mumbai,IN">Mumbai IN</option>
            <option value="London,UK">Londres UK</option>
          </select>
        </label>
        <input id="boton" type="submit" value="Submit" />
        {Boolean(saludo.length) ? <p> {saludo} </p> : null}
        <LogoZodiaco value={zodiaco}></LogoZodiaco>
        {Boolean(saludo.length) ? <img src={poster} alt="imagen"></img> : null}
        {Boolean(saludo.length) ? (
          <p>
            {" "}
            Sabías que la película más famosa en el año en que naciste fue{" "}
            {nombrePeli} ?{" "}
          </p>
        ) : null}
        {Boolean(saludo.length) ? (
          <>
            <Clima value={noon}></Clima>
            <p>{infoClima}</p>
          </>
        ) : null}
      </form>
    </div>
  );
}