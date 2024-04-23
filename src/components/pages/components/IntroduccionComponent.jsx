export const IntroduccionComponent = () => {
  return <div style={{color:'black'}}>
    <h1>
      Introducción a Prolog
    </h1>
    <p>
    Prolog, abreviatura de "Programming in Logic", es un lenguaje de programación lógico 
    que a diferencia de los lenguajes convencionales como C++ o Java, sigue un paradigma 
    lógico-declarativo, donde los programas se estructuran alrededor de reglas lógicas y 
    relaciones.
    </p>
    <p>
    Prolog se basa en investigaciones realizadas por científicos de la computación en Europa 
    en los años 60 y 70, especialmente en las Universidades de Marsella, Londres y Edimburgo. 
    La primera implementación se llevó a cabo en la Universidad de Marsella a principios de los 
    años 70. El desarrollo posterior en la Universidad de Edimburgo llevó a una versión estándar 
    de facto, ahora conocida como Edinburgh Prolog.
    </p>
    <p>
    La singularidad de Prolog radica en su capacidad para resolver problemas a través de la lógica 
    y la inferencia. Al escribir programas en Prolog, los desarrolladores describen las relaciones 
    entre entidades y establecen reglas lógicas, permitiendo que el sistema derive soluciones a 
    partir de consultas o preguntas planteadas.
    </p>
    <p>
    Prolog tiene aplicaciones en una variedad de campos, destacando su relevancia en la Inteligencia 
    Artificial y el procesamiento de lenguaje natural. Aunque es un lenguaje de propósito general, 
    es especialmente útil en la resolución de problemas simbólicos más que en cálculos numéricos.
    </p>
    <p>
    Prolog es un lenguaje de programación declarativo, lo que significa que es un lenguaje basado en la declaración de condiciones, proposiciones, afirmaciones... En el caso de Prolog se hace la declaración de hechos y reglas como se verán más adelante.
    Para responder a las preguntas o consultas formuladas por el programador, Prolog consulta una base de conocimiento, ésta representa el programa como tal, que se compone únicamente de cláusulas, que con el uso de la lógica expresan el conocimiento deseado por el programa.
    </p>
    <h2>
      Programa
    </h2>
    <p>
    Un programa en Prolog es un conjunto de reglas, hechos y consultas que definen un conjunto de 
    relaciones lógicas entre objetos, y está compuesto por un conjunto de cláusulas, que pueden ser 
    hechos o reglas, organizadas de manera que el intérprete de Prolog pueda utilizarlas para 
    responder consultas.
    </p>
    <p>
    Los programas en Prolog se basan en el paradigma de programación lógica, donde se establecen 
    relaciones lógicas entre objetos en lugar de especificar instrucciones de control de flujo 
    como en otros lenguajes de programación. La ejecución de un programa en Prolog implica realizar 
    inferencias lógicas para responder consultas basadas en las reglas y hechos definidos en el 
    programa.
    </p>
    <h2>
      Inferencia
    </h2>
    <p>
    La inferencia es el proceso mediante el cual el intérprete de Prolog deduce soluciones a 
    partir de las reglas y hechos definidos en el programa. La inferencia en Prolog se basa en 
    el uso de la lógica de primer orden y el mecanismo de resolución de consultas.
    </p>
    <p>
    Cuando se realiza una consulta en Prolog, el intérprete busca en la base de conocimiento de 
    hechos y reglas para encontrar soluciones que satisfagan la consulta. Utiliza el mecanismo de 
    unificación y el algoritmo de resolución para buscar coincidencias entre la consulta y las 
    reglas definidas, con el objetivo de encontrar valores para las variables presentes en la 
    consulta.
    </p>
    <p>
    Por ejemplo, considerando el siguiente programa que define una relación padre y una regla para determinar si alguien es abuelo:
    </p>
    <strong>
    <p>
    padre(juan, maria).
    </p>
    <p>
    padre(maria, ana).
    </p>
    <p>
    abuelo(Abuelo, Nieto):- padre(Abuelo, Hijo), padre(Hijo, Nieto).
    </p>
    </strong>
    <p>
    Al realizar una consulta como abuelo(X, ana), el intérprete de Prolog realizará una inferencia 
    utilizando la regla definida en el programa. Primero, buscará si hay algún hecho que coincida 
    con la consulta directamente, y si no lo encuentra, intentará satisfacer la consulta aplicando 
    la regla abuelo. En este caso, el intérprete deducirá que "juan" es el abuelo de "ana" siguiendo 
    la regla definida.
    </p>
    <h2>
      Definición de predicado
    </h2>
    <p>
    La definición de un predicado en Prolog se refiere al conjunto de cláusulas que tienen el mismo predicado en el átomo de la cabeza. En otras palabras, un predicado en Prolog está compuesto por todas las reglas y hechos que comparten el mismo nombre de predicado en la parte izquierda (cabeza) de la cláusula.
    </p>
    <p>
    Por ejemplo, dado el siguiente conjunto de cláusulas que definen el predicado hijo:
    </p>
    <strong>
    <p>
    hijo(juan, maría).
    </p>
    <p>
    hijo(luis, ana).
    </p>
    </strong>
    <p>
    En este caso, las tres cláusulas tienen el mismo predicado hijo en el átomo de la cabeza, por lo que todas estas cláusulas forman parte de la definición del predicado hijo.
    </p>
    <p>
    Las definiciones de predicados pueden incluir tanto hechos como reglas. Por ejemplo:
    </p>
    <strong>
    <p>
    hijo(X, maría) :- padre(juan, X).
    </p>
    </strong>
    <p>
    En esta regla, también se está definiendo el predicado hijo, pero utilizando una regla en lugar de un hecho. Todas las cláusulas que tienen hijo como el átomo de la cabeza formarían parte de la definición del predicado hijo.
    </p>
    <p>
    La definición de un predicado en Prolog es fundamental para establecer las relaciones lógicas entre los objetos y para que el intérprete de Prolog pueda realizar inferencias lógicas al responder consultas.
    </p>
  </div>;
};
