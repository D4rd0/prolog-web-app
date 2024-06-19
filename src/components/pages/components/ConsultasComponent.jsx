import React, { useEffect, useState, useRef } from 'react';

export const ConsultasComponent = () => {


  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('./src/components/pages/components/ConsultasComponent.html')
      .then(response => response.text())
      .then(data => setHtmlContent(data))
      .catch(error => console.error('Error fetching HTML:', error));
  }, []);

  

  return (
    <div style={{ color: 'black', fontSize: '18px' }}>
      <h1>
        Consultas
      </h1>
      <p>En Prolog, una consulta es una cl&aacute;usula que se utiliza para hacer preguntas a la base de conocimiento definida en el programa. La sintaxis de una consulta es similar a la de una cl&aacute;usula sin cabeza, pero se utiliza un s&iacute;mbolo de interrogaci&oacute;n seguido de un guion en lugar de &lsquo;:-&rsquo;. Por ejemplo:</p>
      <p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ?- gusta(juan, libro).</strong></p>
      <p>En esta consulta, se est&aacute; preguntando si es cierto que a Juan le gusta libro. El sistema Prolog buscar&aacute; en la base de conocimiento y responder&aacute; con "true" o "false", o bien con los valores correspondientes si hubiera variables en la consulta empleando para ello un mecanismo de inferencia.</p>
      
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

      <p>Las consultas permiten obtener informaci&oacute;n espec&iacute;fica de la base de conocimiento, realizar verificaciones l&oacute;gicas y explorar las relaciones definidas en el programa. Es mediante las consultas que se interact&uacute;a con el sistema para obtener respuestas l&oacute;gicas basadas en las reglas y hechos previamente establecidos.</p>

      

    </div>
  );
};

export default ConsultasComponent;