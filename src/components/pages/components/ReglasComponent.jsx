import React, { useEffect, useState, useRef } from 'react';

export const ReglasComponent = () => {

  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('./src/components/pages/components/ReglasComponent.html')
      .then(response => response.text())
      .then(data => setHtmlContent(data))
      .catch(error => console.error('Error fetching HTML:', error));
  }, []);

  const [htmlContent2, setHtmlContent2] = useState('');

  useEffect(() => {
    fetch('./src/components/pages/components/ReglasComponent2.html')
      .then(response => response.text())
      .then(data => setHtmlContent2(data))
      .catch(error => console.error('Error fetching HTML:', error));
  }, []);

  const [htmlContent3, setHtmlContent3] = useState('');

  useEffect(() => {
    fetch('./src/components/pages/components/ReglasComponent3.html')
      .then(response => response.text())
      .then(data => setHtmlContent3(data))
      .catch(error => console.error('Error fetching HTML:', error));
  }, []);



  return <div style={{ color: 'black', fontSize: '18px' }}>
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

<div dangerouslySetInnerHTML={{ __html: htmlContent }} />


<p>Adem&aacute;s, con el objeto de proporcionar cl&aacute;usulas m&aacute;s compactas, Prolog tambi&eacute;n nos permite representar <strong>disyunciones</strong> empleando el operador &acute;<strong>;</strong>&acute;. Por ejemplo:</p>

<div dangerouslySetInnerHTML={{ __html: htmlContent2 }} />

<p>En Prolog, una regla puede ser <strong>recursiva</strong> si se llama a s&iacute; misma, ya sea de manera directa (<strong><em>p</em></strong> llama a <strong><em>p</em></strong>) o mediante predicados intermedios (<strong><em>p</em></strong> llama a <strong><em>q</em></strong> y <strong><em>q</em></strong> llama a <strong><em>p</em></strong>). Por tanto, la recursividad en Prolog se basa en la idea de dividir un problema en subproblemas m&aacute;s peque&ntilde;os y resolverlos de manera incremental.</p>

<p>Aqu&iacute; hay un ejemplo pr&aacute;ctico de una regla recursiva en Prolog para el c&aacute;lculo del factorial:</p>

<div dangerouslySetInnerHTML={{ __html: htmlContent3 }} />

<p>Al realizar consultas como <strong>factorial(5, F)</strong>, Prolog utilizar&aacute; la definici&oacute;n recursiva y obtendr&aacute; el factorial de 5 de forma incremental.</p>
</div>;
};
