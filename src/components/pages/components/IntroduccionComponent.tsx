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
  </div>;
};
