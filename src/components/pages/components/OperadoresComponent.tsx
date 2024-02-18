export const OperadoresComponent = () => {
  return <div style={{color:'black'}}>
    <h1>
      Operadores
    </h1>
    <h2>
      Operadores Aritméticos
    </h2>
    <p>
      Mediante estos operadores es posible efectuar operaciones aritméticas entre números ya 
      sean de tipo entero o real, no obstante se han considerado solamente los siguientes 
      operadores básicos:
    </p>

    <table>
      <thead>
        <tr>
          <th>Operador</th>
          <th>Significado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>+</td>
          <td>Suma</td>
        </tr>
        <tr>
          <td>-</td>
          <td>Resta</td>
        </tr>
        <tr>
          <td>*</td>
          <td>Multiplicación</td>
        </tr>
        <tr>
          <td>/</td>
          <td>División</td>
        </tr>
        <tr>
          <td>//</td>
          <td>División entera</td>
        </tr>
        <tr>
          <td>^ y **</td>
          <td>Potencia</td>
        </tr>
      </tbody>
    </table>
    <h2>
      Operadores Relacionales
    </h2>
    <p>
      Los operadores relacionales se utilizan para realizar comparaciones entre términos. 
      Estos operadores permiten establecer relaciones de orden entre valores y son fundamentales 
      en la lógica de programación en Prolog. Aquí hay algunos de los operadores relacionales más 
      comunes:
    </p>
    <table>
      <thead>
        <tr>
          <th>Operador</th>
          <th>Significado</th>
          <th>Ejemplos</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>is</td>
          <td>Unificación</td>
          <td>X is 8 + 2</td>
        </tr>
        <tr>
          <td>==</td>
          <td>Igualdad</td>
          <td>10 + 4 == 7 + 7</td>
        </tr>
        <tr>
          <td>\==</td>
          <td>Desigualdad</td>
          <td>10 + 2 \== 5 + 8</td>
        </tr>
        <tr>
          <td>{">"}</td>
          <td>Mayor que</td>
          <td>11 * 3 {">"} 3 ^ 2</td>
        </tr>
        <tr>
          <td>{"<"}</td>
          <td>Menor que</td>
          <td>2 ** 10 {"<"} 5 * 2</td>
        </tr>
        <tr>
          <td>{">"}=</td>
          <td>Mayor o igual que</td>
          <td>99.0 {">"}= 0</td>
        </tr>
        <tr>
          <td>={"<"}</td>
          <td>Igual o menor que</td>
          <td>-15 ={"<"} 15</td>
        </tr>
      </tbody>
    </table>
    <h2>
      Operadores de listas
    </h2>
    <p>
      Los operadores de listas son herramientas clave para manipular y trabajar con listas de 
      manera efectiva. Algunos de los operadores y predicados más comunes relacionados con listas 
      en Prolog son los siguientes:
    </p>
    <table>
      <thead>
        <tr>
          <th>Operador</th>
          <th>Significado</th>
          <th>Ejemplos</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>=</td>
          <td>Unificación</td>
          <td>[X, Y, Z] = [a, 1, 2.0]</td>
        </tr>
        <tr>
          <td>member(term, list)</td>
          <td>term ∈ list</td>
          <td>member(4.0, [c, 3, 4.0]).</td>
        </tr>
        <tr>
          <td>append(list1, list2, result)</td>
          <td>Une list1 con list2</td>
          <td>append([h, o], [l, a], X).</td>
        </tr>
        <tr>
          <td>length(list, result)</td>
          <td>Calcula la longitud de la lista</td>
          <td>length([3, 0.0, x], X).</td>
        </tr>
        <tr>
          <td>sort(list, result)</td>
          <td>Ordena la lista</td>
          <td>sort([4, a, 3], X).</td>
        </tr>
        <tr>
          <td>is_list(term)</td>
          <td>Comprueba si term es lista</td>
          <td>is_list([a, list]).</td>
        </tr>
      </tbody>
    </table>
  </div>;
};
