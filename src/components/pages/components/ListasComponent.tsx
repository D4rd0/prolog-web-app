export const ListasComponent = () => {
  return <div style={{color:'black'}}>
    <h1>
      Listas
    </h1>
    <p>
    En Prolog, una lista es una estructura de datos fundamental que permite almacenar una secuencia ordenada de elementos. Se representa como una secuencia de elementos separados por comas y encerrados entre corchetes [ ]. 
    </p>
    <p>
    Las listas están formadas recursivamente por una cabeza, que es el primer elemento de la lista y una cola, que es una lista del resto de elementos. Por ejemplo, para la lista [1, 2, 3], la cabeza es 1 y la cola es [2, 3]. Así, la lista [1,2,3] podría representarse también como [1 | [2,3]].
    </p>
    <p>
    Los elementos de una lista pueden ser cualquier término válido en Prolog, incluyendo átomos, números, variables, otras listas, o incluso estructuras complejas. 
    </p>
    <p>
    Las listas son una herramienta muy útil en Prolog y se utilizan ampliamente en la manipulación de datos, la representación de estructuras de datos y la implementación de algoritmos.
    </p>
  </div>;
};
