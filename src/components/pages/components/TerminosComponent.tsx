import React, { useEffect, useState } from 'react';

export const TerminosComponent = () => {

  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('./src/components/pages/components/TerminosComponent.html')
      .then(response => response.text())
      .then(data => setHtmlContent(data))
      .catch(error => console.error('Error fetching HTML:', error));
  }, []);

  return <div style={{color:'black'}}>
    <h1>
      Términos
    </h1>
    <p>Los t&eacute;rminos en Prolog son la unidad b&aacute;sica de construcci&oacute;n utilizada para representar datos y expresiones en el programa. A su vez, los t&eacute;rminos pueden estar formados por &aacute;tomos, variables y estructuras.</p>
<ul>
<li><strong>&Aacute;tomo:</strong> En Prolog, un &aacute;tomo es un t&eacute;rmino que representa un nombre simb&oacute;lico o constante. Los &aacute;tomos son b&aacute;sicamente identificadores sin argumentos y pueden consistir en letras, d&iacute;gitos y subrayados. Los &aacute;tomos en Prolog deben empezar en min&uacute;scula. Por ejemplo, cebra o verde son &aacute;tomos.</li>
</ul>
<ul>
<li><strong>Literal:</strong> Es una expresi&oacute;n at&oacute;mica o compuesta que puede ser verdadera o falsa. Un literal puede ser un &aacute;tomo, un n&uacute;mero, una estructura compuesta o una variable. Por ejemplo, hombre(juan) es un literal donde "hombre" es un &aacute;tomo y "juan" es una constante.</li>
</ul>
<ul>
<li><strong>Variable: </strong>Las variables en Prolog deben empezar en may&uacute;scula o con&nbsp;<strong>&lsquo;_&rsquo;</strong>.</li>
</ul>
<p>&nbsp; &nbsp; &nbsp; &nbsp;Una&nbsp;<strong>variable an&oacute;nima</strong>&nbsp;se representa por el identificador&nbsp;<strong><em>&lsquo;_&rsquo;</em></strong>&nbsp;y se usa com&uacute;nmente cuando no necesitamos hacer referencia a esa variable espec&iacute;fica.</p>
<ul>
<li><strong>Estructura: </strong>Es la forma en que se definen t&eacute;rminos m&aacute;s complejos. Su sintaxis es la siguiente:</li>
</ul>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&aacute;tomo(t<sub>1</sub>, t<sub>2</sub>, ..., t<sub>n</sub>).</strong></p>
<p>Donde el &aacute;tomo recibe el nombre de <strong>functor</strong> y t<sub>1</sub>, t<sub>2, </sub>&hellip;, t<sub>n</sub> son a su vez t&eacute;rminos.</p>
<p>Por ejemplo, para la estructura persona(juan, 25, ingeniero), "persona" es el functor, y sus t&eacute;rminos son "juan", "25", y "ingeniero". Esta estructura podr&iacute;a representar informaci&oacute;n sobre una persona, donde "juan" es el nombre, "25" es la edad, y "ingeniero" es su profesi&oacute;n.</p>

<div dangerouslySetInnerHTML={{ __html: htmlContent }} />

</div>;
};
