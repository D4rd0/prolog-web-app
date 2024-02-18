export const ReglasComponent = () => {
  return <div style={{color:'black'}}>
    <h1>
      Reglas
    </h1>
    <p>
      Una regla en Prolog es una construcción lógica que establece una relación entre diferentes 
      predicados mediante condiciones o antecedentes. 
    </p>
    <p>
      La sintaxis de una regla es la siguiente:  
    </p>
    <strong>
    <p>
      predicado(argumentos) :- condición.
    </p>
    </strong>
    <p>
      Donde el predicado en el lado izquierdo de la flecha implica el cumplimiento de la condición 
      en el lado derecho para que la regla sea aplicable. 
    </p>
    <p>
      Las reglas permiten definir relaciones más complejas y derivar nuevas afirmaciones a partir 
      de información existente en la base de conocimientos.  
    </p>
    <p>
      Al ejecutar una consulta en Prolog, el motor de inferencia utiliza estas reglas para determinar
      si se cumplen las condiciones necesarias y, en consecuencia, deducir nuevas verdades o responder 
      a la consulta realizada.
    </p>
    <p>
      En una regla se pueden separar los hechos de la condición de dos formas distintas dependiendo de 
      cómo se calcula el valor de verdad del cuerpo:
    </p>
    <h2>
      Conjunciones
    </h2>
    <p>
      Se usa una coma para separar los hechos del cuerpo de la regla. Este 'separador' se traduce como un 
      AND lógico, concatenando cada hecho con un AND. Por ejemplo:
    </p>
    <strong>
    <p>
      % X es hermano de Y si existe algún padre Z que sea padre de X e Y
      hermano(X, Y) :- padre(Z, X), padre(Z, Y).
    </p>
    </strong>
    <h2>
      Disyunciones
    </h2>
    <p>
      Se usa un punto y coma para separar los hechos del cuerpo de la regla. Este 'separador' se traduce 
      como un OR lógico, concatenando cada hecho con un OR. Por ejemplo:
    </p>
    <strong>
    <p>
      % A y B son familiares si A es padre de B o A es hijo de B o A es hermano de B
      familiar(A,B) :- padre(A,B); hijo(A,B); hermano(A,B).
    </p>
    </strong>
    <h1>
      Reglas recursivas
    </h1>
    <p>
      En Prolog, una regla recursiva es aquella que se define en términos de sí misma. Estas reglas son 
      esenciales para implementar la recursividad en la programación lógica. La recursividad en Prolog se 
      basa en la idea de dividir un problema en subproblemas más pequeños y resolverlos de manera incremental.
    </p>
    <p>
      La estructura general de una regla recursiva es la siguiente:
    </p>
    <strong>
    <p>
      predicado_base(X) :- condición_base(X).
    </p>
    <p>
      predicado_recursivo(X) :- condición_recursiva(X), predicado_recursivo(X).
    </p>
    </strong>
    <p>
      Aquí hay un ejemplo práctico de una regla recursiva en Prolog para calcular el factorial de un número:
    </p>
    <strong>
    <p>
      factorial(0, 1). 
    </p>
    <p>
      factorial(N, F) :- N{">"}0, N1 is N - 1, factorial(N1, F1), F is N * F1. 
    </p>
    </strong>
    <p>
      Al realizar consultas como factorial(5, F), Prolog utilizará la regla recursiva para calcular el 
      factorial de 5 de manera incremental. 
    </p>
  </div>;
};
