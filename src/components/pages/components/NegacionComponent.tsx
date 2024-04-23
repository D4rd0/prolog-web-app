export const NegacionComponent = () => {
  return <div style={{color:'black'}}>
    <h1>
      Negación
    </h1>
    <p>La negaci&oacute;n se utiliza para expresar la negaci&oacute;n l&oacute;gica de un hecho o una condici&oacute;n. Sin embargo, la negaci&oacute;n en Prolog funciona de manera diferente a la negaci&oacute;n cl&aacute;sica de la l&oacute;gica de predicados debido al paradigma de programaci&oacute;n l&oacute;gica que sigue Prolog.</p>
<p>La negaci&oacute;n se implementa principalmente a trav&eacute;s del predicado <em>not</em>. Este predicado se utiliza para expresar la negaci&oacute;n l&oacute;gica de una consulta, es decir, para verificar si una cierta condici&oacute;n no se cumple, por lo que es importante tener en cuenta que no es una negaci&oacute;n l&oacute;gica cl&aacute;sica, sino que representa la "negaci&oacute;n por fallo".</p>
<p>Por ejemplo, supongamos que queremos verificar si no hay un hecho hijo(juan, _) que est&eacute; presente en la base de conocimiento. Podr&iacute;amos hacerlo de la siguiente manera:</p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; no_hijo_de_juan :- not hijo(juan, _).</strong></p>
<p>Aqu&iacute;, not hijo(juan, _) devolver&aacute; verdadero si no hay un hecho hijo(juan, _) en la base de conocimiento.</p>
  </div>;
};
