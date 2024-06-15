import React, { useEffect, useState } from 'react';

export const IntroduccionComponent = () => {


  return <div style={{ color: 'black', fontSize: '18px' }}>
    <h1>
      Introducción a Prolog
    </h1>
    <p>Prolog, abreviatura de "Programming in Logic", es un lenguaje de programaci&oacute;n l&oacute;gico que a diferencia de los lenguajes convencionales como C++ o Java, sigue un paradigma l&oacute;gico-declarativo, donde los programas se estructuran alrededor de reglas l&oacute;gicas y relaciones.</p>
<p>Prolog se basa en investigaciones realizadas por cient&iacute;ficos de la computaci&oacute;n en Europa en los a&ntilde;os 60 y 70, especialmente en las Universidades de Marsella, Londres y Edimburgo. La primera implementaci&oacute;n se llev&oacute; a cabo en la Universidad de Marsella a principios de los a&ntilde;os 70. El desarrollo posterior en la Universidad de Edimburgo llev&oacute; a una versi&oacute;n est&aacute;ndar de facto, ahora conocida como Edinburgh Prolog.</p>
<p>La singularidad de Prolog radica en su capacidad para resolver problemas a trav&eacute;s de la l&oacute;gica y la inferencia. Al escribir programas en Prolog, los desarrolladores describen las relaciones entre entidades y establecen reglas l&oacute;gicas, permitiendo que el sistema derive soluciones a partir de consultas o preguntas planteadas.</p>
<p>Prolog tiene aplicaciones en una variedad de campos, destacando su relevancia en la Inteligencia Artificial y el procesamiento de lenguaje natural. Aunque es un lenguaje de prop&oacute;sito general, es especialmente &uacute;til en la resoluci&oacute;n de problemas simb&oacute;licos m&aacute;s que en c&aacute;lculos num&eacute;ricos.</p>
<p>Prolog es un lenguaje de programaci&oacute;n declarativo, lo que significa que es un lenguaje basado en la declaraci&oacute;n de condiciones, proposiciones, afirmaciones... En el caso de Prolog se hace la declaraci&oacute;n de hechos y reglas como se ver&aacute;n m&aacute;s adelante. Para responder a las preguntas o consultas formuladas por el programador, Prolog consulta una base de conocimiento, &eacute;sta representa el programa como tal, que se compone &uacute;nicamente de cl&aacute;usulas, que con el uso de la l&oacute;gica expresan el conocimiento deseado por el programa.</p>
<h2>Programa</h2>
<p>Un programa en Prolog es un conjunto de reglas, hechos y consultas que definen un conjunto de relaciones l&oacute;gicas entre objetos, y est&aacute; compuesto por un conjunto de cl&aacute;usulas, que pueden ser hechos o reglas, organizadas de manera que el int&eacute;rprete de Prolog pueda utilizarlas para responder consultas.</p>
<p>Los programas en Prolog se basan en el paradigma de programaci&oacute;n l&oacute;gica, donde se establecen relaciones l&oacute;gicas entre objetos en lugar de especificar instrucciones de control de flujo como en otros lenguajes de programaci&oacute;n. La ejecuci&oacute;n de un programa en Prolog implica realizar inferencias l&oacute;gicas para responder consultas basadas en las reglas y hechos definidos en el programa.</p>
<h2>Inferencia</h2>
<p>La inferencia es el proceso mediante el cual el int&eacute;rprete de Prolog deduce soluciones a partir de las reglas y hechos definidos en el programa. La inferencia en Prolog se basa en el uso de la l&oacute;gica de primer orden y el mecanismo de resoluci&oacute;n de consultas.</p>
<p>Cuando se realiza una consulta en Prolog, el int&eacute;rprete busca en la base de conocimiento de hechos y reglas para encontrar soluciones que satisfagan la consulta. Utiliza el mecanismo de unificaci&oacute;n y el algoritmo de resoluci&oacute;n para buscar coincidencias entre la consulta y las reglas definidas, con el objetivo de encontrar valores para las variables presentes en la consulta.</p>
<p>Por ejemplo, considerando el siguiente programa que define una relaci&oacute;n padre y una regla para determinar si alguien es abuelo:</p>
<p>&nbsp; &nbsp;<strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; padre(juan, maria).</strong></p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; padre(maria, ana).</strong></p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; abuelo(Abuelo, Nieto):- padre(Abuelo, Hijo), padre(Hijo, Nieto).</strong></p>
<p>Al realizar una consulta como abuelo(X, ana), el int&eacute;rprete de Prolog realizar&aacute; una inferencia utilizando la regla definida en el programa. Primero, buscar&aacute; si hay alg&uacute;n hecho que coincida con la consulta directamente, y si no lo encuentra, intentar&aacute; satisfacer la consulta aplicando la regla abuelo. En este caso, el int&eacute;rprete deducir&aacute; que "juan" es el abuelo de "ana" siguiendo la regla definida.</p>
<h2>Definici&oacute;n de predicado</h2>
<p>La definici&oacute;n de un predicado en Prolog se refiere al conjunto de cl&aacute;usulas que tienen el mismo predicado en el &aacute;tomo de la cabeza. En otras palabras, un predicado en Prolog est&aacute; compuesto por todas las reglas y hechos que comparten el mismo nombre de predicado en la parte izquierda (cabeza) de la cl&aacute;usula.</p>
<p>Por ejemplo, dado el siguiente conjunto de cl&aacute;usulas que definen el predicado hijo:</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<strong>hijo(juan, mar&iacute;a).</strong></p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;hijo(luis, ana).</strong></p>
<p>En este caso, las tres cl&aacute;usulas tienen el mismo predicado hijo en el &aacute;tomo de la cabeza, por lo que todas estas cl&aacute;usulas forman parte de la definici&oacute;n del predicado hijo.</p>
<p>Las definiciones de predicados pueden incluir tanto hechos como reglas. Por ejemplo:</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<strong>hijo(X, mar&iacute;a) :- padre(juan, X).</strong></p>
<p>En esta regla, tambi&eacute;n se est&aacute; definiendo el predicado hijo, pero utilizando una regla en lugar de un hecho. Todas las cl&aacute;usulas que tienen hijo como el &aacute;tomo de la cabeza formar&iacute;an parte de la definici&oacute;n del predicado hijo.</p>
<p>La definici&oacute;n de un predicado en Prolog es fundamental para establecer las relaciones l&oacute;gicas entre los objetos y para que el int&eacute;rprete de Prolog pueda realizar inferencias l&oacute;gicas al responder consultas.</p>
  
  </div>;
};
