export const TerminosComponent = () => {
  return <div style={{color:'black'}}>
    <h1>
      Términos
    </h1>
    <span>
      Los términos en Prolog son los componentes que conforman el lenguaje, 
      y en este caso los únicos elementos que componen un programa son átomos,
      variables y estructuras.
    </span>
    <h2>
      Átomos
    </h2>
    <span>
      En Prolog, un átomo es un término que representa un nombre simbólico o constante. 
      Los átomos son básicamente identificadores sin argumentos y pueden consistir en letras, 
      dígitos y subrayados. Los átomos en Prolog deben empezar en minúscula. 
    </span>
    <p>
      Aquí hay un ejemplo de cómo se definen los átomos en Prolog:
    </p>
    <span>
    <strong>
    <p>
      animal(cebra).
    </p>
    <p>
      color(verde).
    </p>
    </strong>
    </span>
    <h2>
      Variables
    </h2>
    <span>
      Las variables en Prolog deben empezar en mayúscula o con ‘_’.
      Una variable anónima se representa por el nombre ‘_’ con la cual 
      en cada instancia de esta variable se refiere a una variable distinta.
    </span>
    <p>
      A continuación se muestran algunos ejemplos de variables en Prolog:
    </p>
    <span>
    <strong>
    <p>
      variable(Variable).
    </p>
    <p>
      variable(_).
    </p>
    <p>
      variable(_var).
    </p>
    </strong>
    </span>
    <h2>
      Estructuras
    </h2>
    <p>
      Estos son términos compuestos por otros términos, donde 
      la sintaxis que se tiene es la siguiente:
    </p>
    <strong>
    <p>
      nombre_atomo(termino1, termino2, ..., terminoN).
    </p>
    </strong>
    <p>
      Donde esos términos del 1 al N, se les llama argumentos. 
      Además, al nombre del átomo también se le llama predicado.
    </p>
    <p>
      Aquí hay un ejemplo de cómo se definen las estructuras en Prolog:
    </p>
    <strong>
    <p>
      tiene_patas(elefante, 4).
    </p>
    <p>
      edad(luis, 30).
    </p>
    </strong>
  </div>;
};
