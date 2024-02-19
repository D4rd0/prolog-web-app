export const ConsultasComponent = () => {
  return <div style={{color:'black'}}>
    <h1>
      Consultas
    </h1>
    <p>
      En Prolog, una consulta es una expresión que se utiliza para hacer preguntas sobre la base 
      de conocimientos definida en el programa. La sintaxis de una consulta es similar a la de un 
      hecho, pero se utiliza un símbolo de interrogación seguido de un guion para indicar una 
      pregunta. Por ejemplo:
    </p>
    <strong>
    <p>
      ?- gusta(juan, libro).
    </p>
    </strong>
    <p>
      En esta consulta, se está preguntando si es cierto que a Juan le gusta un libro. El sistema 
      Prolog buscará en la base de conocimientos y responderá con "sí" o "no", dependiendo de si 
      encuentra un hecho que unifique con la consulta.
    </p>
    <p>
      Las consultas permiten obtener información específica de la base de conocimientos, realizar 
      verificaciones lógicas y explorar las relaciones definidas en el programa. Es mediante las 
      consultas que se interactúa con el sistema para obtener respuestas lógicas basadas en las 
      reglas y hechos previamente establecidos.
    </p>

    <div>
      <textarea
        id="prologQuery"
        rows={6}
        cols={75}
        placeholder="Escribe tu consulta Prolog aquí"
      >
      </textarea>
      <button>Consultar</button>
      <textarea id="resultados"></textarea>
    </div>
  </div>;
};
