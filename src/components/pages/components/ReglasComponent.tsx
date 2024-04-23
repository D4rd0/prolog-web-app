export const ReglasComponent = () => {
  return <div style={{color:'black'}}>
    <h1>
      Reglas
    </h1>
    <p>Una regla en Prolog es una construcci&oacute;n l&oacute;gica que establece una relaci&oacute;n entre diferentes predicados mediante condiciones o antecedentes.</p>
<p>La sintaxis de una regla es la siguiente:</p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;h :- q<sub>1</sub>, q<sub>2</sub>, &hellip;, q<sub>n</sub></strong></p>
<p>donde h es un &aacute;tomo y q<sub>1</sub>, q<sub>2</sub>, &hellip;, q<sub>n </sub>son literales. Una regla representa la implicaci&oacute;n</p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;q<sub>1</sub>, q<sub>2</sub>, &hellip;, q<sub>n -&gt; </sub>h</strong></p>
<p>Las reglas permiten definir relaciones m&aacute;s complejas y derivar nuevas afirmaciones a partir de informaci&oacute;n existente en la base de conocimiento.</p>
<p>Al ejecutar una consulta en Prolog, el motor de inferencia utiliza estas reglas para determinar si se cumplen las condiciones necesarias y, en su caso, deducir nuevos hechos para responder a la consulta realizada.</p>
<p>En Prolog, la secuencia q<sub>1</sub>, q<sub>2</sub>, &hellip;, q<sub>n </sub>representa la <strong>conjunci&oacute;n</strong> q<sub>1</sub>, q<sub>2</sub>, &hellip;, q<sub>n</sub>. Por ejemplo:</p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;% Una persona es propietaria de un gato si es humana y tiene un gato</strong></p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;es_propietario_de_gato(X) :- humano(X), tiene_gato(X).</strong></p>
<p>Adem&aacute;s, con el objeto de proporcionar cl&aacute;usulas m&aacute;s compactas, Prolog tambi&eacute;n nos permite representar disyunciones empleando el operador &acute;<strong>;</strong>&acute;. Por ejemplo:</p>
<p>En Prolog, una regla puede ser <strong>recursiva</strong> si se llama a s&iacute; misma, ya sea de manera directa (<strong><em>p</em></strong> llama a <strong><em>p</em></strong>) o mediante predicados intermedios (<strong><em>p</em></strong> llama a <strong><em>q</em></strong> y <strong><em>q</em></strong> llama a <strong><em>p</em></strong>). Por tanto, la recursividad en Prolog se basa en la idea de dividir un problema en subproblemas m&aacute;s peque&ntilde;os y resolverlos de manera incremental.</p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; % Una persona tiene una mascota si es humana y tiene un gato o un perro.</strong></p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;tiene_mascota(X) :- humano(X), (tiene_gato(X) ; tiene_perro(X)).</strong></p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; % Este ejemplo se puede reescribir con dos cl&aacute;usulas de la siguiente manera:</strong></p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;tiene_mascota(X) :- humano(X), tiene_gato(X).</strong></p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;tiene_mascota(X) :- humano(X), tiene_perro(X).</strong></p>
<p>Aqu&iacute; hay un ejemplo pr&aacute;ctico de una regla recursiva en Prolog para el c&aacute;lculo del factorial:</p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;factorial(0, 1).</strong></p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;factorial(N, Soluci&oacute;n<sub>1</sub>) :-</strong></p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;N &gt; 0, N<sub>1</sub> is N - 1,factorial(N<sub>1</sub>, Solucion<sub>2</sub>), Soluci&oacute;n<sub>1</sub> is N * Soluci&oacute;n<sub>2</sub>.</strong></p>
<p>Al realizar consultas como <strong>factorial(5, F)</strong>, Prolog utilizar&aacute; la definici&oacute;n recursiva y obtendr&aacute; el factorial de 5 de forma incremental.</p>
  </div>;
};
