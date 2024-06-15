import React, { useEffect, useState } from 'react';

export const ListasComponent = () => {

  

  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('./src/components/pages/components/ListasComponent.html')
      .then(response => response.text())
      .then(data => setHtmlContent(data))
      .catch(error => console.error('Error fetching HTML:', error));
  }, []);

  return <div style={{ color: 'black', fontSize: '18px' }}>
    <h1>
      Listas
    </h1>
    <p>
    En Prolog, una lista es una estructura de datos fundamental que permite almacenar una secuencia ordenada de elementos. Se representa como una secuencia de elementos separados por comas y encerrados entre corchetes [ ]. 
  
    Las listas están formadas recursivamente por una cabeza, que es el primer elemento de la lista y una cola, que es una lista del resto de elementos. Por ejemplo, para la lista [1, 2, 3], la cabeza es 1 y la cola es [2, 3]. Así, la lista [1,2,3] podría representarse también como [1 | [2,3]].
    </p>

    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

    <p>
    Los elementos de una lista pueden ser cualquier término válido en Prolog, incluyendo átomos, números, variables, otras listas, o incluso estructuras complejas. 
 
    Las listas son una herramienta muy útil en Prolog y se utilizan ampliamente en la manipulación de datos, la representación de estructuras de datos y la implementación de algoritmos.
    </p>
  
  </div>;
};
