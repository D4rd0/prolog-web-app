export const HechosComponent = () => {
  return <div style={{ color: 'black', fontSize: '18px' }}>
    <h1>
      Hechos
    </h1>
    <p>En Prolog, un hecho es una afirmaci&oacute;n o una declaraci&oacute;n que establece una relaci&oacute;n que se considera verdadera sin ninguna condici&oacute;n adicional. Los hechos son la forma m&aacute;s b&aacute;sica de representar informaci&oacute;n en Prolog. La sintaxis de un hecho es la siguiente:</p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;predicado(t<sub>1</sub>, t<sub>2</sub>, &hellip;, t<sub>n</sub>).</strong></p>
<p>donde el predicado es un &aacute;tomo que describe una propiedad o relaci&oacute;n y los argumentos t<sub>1</sub>, t<sub>2</sub>, &hellip;, t<sub>n</sub> son t&eacute;rminos. Los hechos pueden emplearse de varias formas:</p>
<ul>
<li><strong>Propiedades:&nbsp;</strong>En el contexto de la programaci&oacute;n l&oacute;gica, los objetos pueden tener propiedades que describen sus caracter&iacute;sticas. Por ejemplo:</li>
</ul>
<p>&nbsp;<strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; color(azul).</strong></p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;planeta(marte).</strong></p>
<ul>
<li><strong>Relaciones:&nbsp;</strong>Establecen conexiones l&oacute;gicas o asociaciones entre elementos. Por ejemplo:</li>
</ul>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;padre(antonio, luis).</strong></p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;edad(jose, 30).</strong></p>
<p>En conclusi&oacute;n, los hechos en Prolog son fundamentales para construir la base de conocimiento con la cual el programa puede realizar consultas y realizar inferencias l&oacute;gicas. Adem&aacute;s, estos hechos pueden combinarse con reglas y consultas para modelar situaciones m&aacute;s complejas y resolver problemas espec&iacute;ficos.</p>
</div>;
};
