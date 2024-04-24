import React, { useEffect, useState } from 'react';

export const ClausulasComponent = () => {

  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('./src/components/pages/components/ClausulasComponent.html')
      .then(response => response.text())
      .then(data => setHtmlContent(data))
      .catch(error => console.error('Error fetching HTML:', error));
  }, []);

  return <div style={{color:'black'}}>
    <h1>
      Cláusulas
    </h1>
    <p>Una cl&aacute;usula es la unidad b&aacute;sica de construcci&oacute;n en un programa Prolog. Una cl&aacute;usula puede ser un hecho, una regla o una consulta, y su estructura est&aacute; determinada por la sintaxis del lenguaje.</p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; h :- q1, q2, &hellip;, qm.</strong></p>
<p>donde <em>h</em> es la <strong>cabeza</strong> de la cl&aacute;usula (un &aacute;tomo) y q<sub>1</sub>, q<sub>2</sub>, &hellip;, q<sub>n</sub> es el <strong>cuerpo</strong> (una secuencia de literales).</p>
<p>Existen tres tipos distintos de cl&aacute;usulas:</p>
<ul>
<li>Una cl&aacute;usula que tiene cabeza y no tiene cuerpo se llama <strong>hecho</strong>.</li>
<li>Una cl&aacute;usula que tiene cabeza y tiene cuerpo se llama <strong>regla</strong>.</li>
<li>Una cl&aacute;usula que no tiene cabeza y tiene cuerpo se llama <strong>consulta</strong>.</li>
</ul>
<p>Un ejemplo de cl&aacute;usula es el siguiente:</p>

<div dangerouslySetInnerHTML={{ __html: htmlContent }} />

<p>Esta cl&aacute;usula reescrita al lenguaje natural se leer&iacute;a de la siguiente manera:</p>
<p><em>"A come a B si A es carn&iacute;voro y B es herb&iacute;voro y A es m&aacute;s fuerte que B."</em></p>
  </div>;
};
