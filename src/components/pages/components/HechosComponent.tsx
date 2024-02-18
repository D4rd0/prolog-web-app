export const HechosComponent = () => {
  return <div style={{color:'black'}}>
    <h1>
      Hechos
    </h1>
    <p>
      En Prolog, un hecho es una afirmación simple que establece una relación directa entre un 
      predicado y sus argumentos, y se considera verdadero sin ninguna condición adicional. 
    </p>
    <p>
      Los hechos son la forma más básica de representar información en Prolog y consisten en la 
      declaración de un predicado para ciertos términos.  
    </p>
    <p>
      La sintaxis de un hecho es la siguiente:
    </p>
    <strong>
    <p>
      predicado(argumentos).
    </p>
    </strong>
    <p>
      Donde el predicado es un átomo que describe una propiedad o relación, y los argumentos son 
      términos específicos asociados con esa afirmación, como constantes, variables o estructuras 
      más complejas. Estos hechos proporcionan la base sobre la cual se construyen reglas y consultas 
      en programas Prolog.
    </p>
    <p>
      Los hechos se dividen en 2 tipos:
    </p>
    <h2>
      Propiedades
    </h2>
    <p>
      Las propiedades se caracterizan por llevar un solo argumento y de esta manera expresan una 
      propiedad de los objetos. Por ejemplo:
    </p>
    <strong>
    <p>
      color(azul).
    </p>
    <p>
      planeta(marte).
    </p>
    </strong>
    <h2>
      Relaciones
    </h2>
    <p>
      Las relaciones se caracterizan por llevar más de un argumento y de esta manera expresan la
      relación entre varios objetos. Por ejemplo:
    </p>
    <strong>
    <p>
      padre(antonio, luis).
    </p>
    <p>
      edad(jose, 30).
    </p>
    </strong>
  </div>;
};
