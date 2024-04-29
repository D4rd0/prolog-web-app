import React, { useEffect, useState } from 'react';

export const OperadoresComponent = () => {

  const data = [
    {
      questionText: "Angular es definido como:",
      name: "q1-name",
      options: [
        { choice: "a) Framework", radioValue: "q1-a", selected: false },
        { choice: "b) librería", radioValue: "q1-b", selected: false },
        {
          choice: "c) Lenguage de programación",
          radioValue: "q1-c",
          selected: false,
        },
        {
          choice: "d) Ninguno de los anterirores",
          radioValue: "q1-d",
          selected: false,
        },
      ],
    },
    {
      questionText: "¿JavaScript es lo mismo que Java?",
      name: "q2-name",
      options: [
        { choice: "a) Si", radioValue: "q2-a", selected: false },
        { choice: "b) No", radioValue: "q2-b", selected: false },
        { choice: "c) Aveces", radioValue: "q2-c", selected: false },
        { choice: "d) Casi siempre", radioValue: "q2-d", selected: false },
      ],
    },
    {
      questionText:
        "Dado el siguiente arreglo: const arr = [10, 30, 44, 80]. ¿Cual de las siguientes opciones nos permite obtener el ultimo elemento del arreglo?",
      name: "q3-name",
      options: [
        { choice: "a) arr[1]", radioValue: "q3-a", selected: false },
        { choice: "b) arr[arr.length]", radioValue: "q3-b", selected: false },
        { choice: "c) arr[arr.length - 1]", radioValue: "q3-c", selected: false },
        { choice: "d) arr.length", radioValue: "q3-d", selected: false },
      ],
    },
    {
      questionText: "¿Es posible utilzar Redux en aplicaciones de Angular?",
      name: "q4-name",
      options: [
        { choice: "a) Si", radioValue: "q4-a", selected: false },
        { choice: "b) No", radioValue: "q4-b", selected: false },
      ],
    },
    {
      questionText: "¿Ionic esta basado en React?",
      name: "q5-name",
      options: [
        { choice: "a) Si", radioValue: "q5-a", selected: false },
        { choice: "b) No", radioValue: "q5-b", selected: false },
      ],
    },
  ];

  const [questions, setQuestions] = useState(data);
  const [total, setTotal] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const answers = ["q1-a", "q2-b", "q3-c", "q4-a", "q5-b"];

  const handleChange = ({ target }) => {
    const nextState = questions.map((question) => {
      if (question.name !== target.name) {
        return question;
      }

      return {
        ...question,
        options: question.options.map((opt) => {
          const checked = opt.radioValue === target.value;
          return {
            ...opt,
            selected: checked,
          };
        }),
        currentAnswer: target.value,
      };
    });
    setQuestions(nextState);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    let counter = 0;
    let flag = false;

    for (const [index, question] of questions.entries()) {
      if (!question.currentAnswer) {
        flag = true;
        alert("Por favor responde la pregunta #" + (index + 1));
        break;
      } else {
        if (question.currentAnswer === answers[index]) {
          ++counter;
        }
      }
    }

    if (!flag) {
      setTotal(counter);
      setSubmitted(true);
    }
  }

  return <div style={{ color: 'black', fontSize: '18px' }}>
    <h1>
      Operadores
    </h1>
    <h2>
      Operadores aritméticos
    </h2>
<p>Los operadores aritm&eacute;ticos en Prolog son cruciales para realizar operaciones matem&aacute;ticas y comparar expresiones num&eacute;ricas dentro del c&oacute;digo. Permiten realizar sumas, restas, multiplicaciones, divisiones y otras operaciones b&aacute;sicas, as&iacute; como tambi&eacute;n comparar la igualdad o desigualdad entre expresiones num&eacute;ricas. Estos operadores son esenciales para el desarrollo de algoritmos y la manipulaci&oacute;n de datos en Prolog, ya que permiten realizar c&aacute;lculos y tomar decisiones basadas en valores num&eacute;ricos.</p>
<p>A continuaci&oacute;n, se muestran los operadores aritm&eacute;ticos m&aacute;s utilizados en Prolog:</p>
<table>
<tbody>
<tr>
<td width="288">
<p><strong>Operador</strong></p>
</td>
<td width="288">
<p><strong>Significado</strong></p>
</td>
</tr>
<tr>
<td width="288">
<p>+</p>
</td>
<td width="288">
<p>Suma</p>
</td>
</tr>
<tr>
<td width="288">
<p>-</p>
</td>
<td width="288">
<p>Resta</p>
</td>
</tr>
<tr>
<td width="288">
<p>*</p>
</td>
<td width="288">
<p>Multiplicaci&oacute;n</p>
</td>
</tr>
<tr>
<td width="288">
<p>/ y //</p>
</td>
<td width="288">
<p>Divisi&oacute;n real y Divisi&oacute;n entera</p>
</td>
</tr>
<tr>
<td width="288">
<p>^ y **</p>
</td>
<td width="288">
<p>Potencia</p>
</td>
</tr>
<tr>
<td width="288">
<p>mod</p>
</td>
<td width="288">
<p>Resto de la divisi&oacute;n (m&oacute;dulo)</p>
</td>
</tr>
</tbody>
</table>
<h2>
    Operadores relacionales
</h2>
<p>Los operadores relacionales en Prolog son esenciales para comparar t&eacute;rminos y establecer condiciones en las reglas y consultas a la base de conocimiento. Permiten realizar acciones como verificar la igualdad o desigualdad de t&eacute;rminos, as&iacute; como establecer relaciones de orden entre ellos. Estos operadores son fundamentales para la l&oacute;gica de programaci&oacute;n en Prolog, ya que permiten definir restricciones y condiciones que gu&iacute;an el comportamiento del programa.</p>
<p>A continuaci&oacute;n,&nbsp;se muestran los operadores relacionales m&aacute;s comunes en Prolog:</p>
<table>
<tbody>
<tr>
<td width="288">
<p><strong>Operador</strong></p>
</td>
<td width="288">
<p><strong>Significado</strong></p>
</td>
</tr>
<tr>
<td width="288">
<p>= , is</p>
</td>
<td width="288">
<p>Unificaci&oacute;n</p>
</td>
</tr>
<tr>
<td width="288">
<p>==</p>
</td>
<td width="288">
<p>Igualdad aritm&eacute;tica</p>
</td>
</tr>
<tr>
<td width="288">
<p>\==</p>
</td>
<td width="288">
<p>Desigualdad aritm&eacute;tica</p>
</td>
</tr>
<tr>
<td width="288">
<p>&lt;&nbsp;</p>
</td>
<td width="288">
<p>Menor que</p>
</td>
</tr>
<tr>
<td width="288">
<p>=&lt;</p>
</td>
<td width="288">
<p>Menor o igual que</p>
</td>
</tr>
<tr>
<td width="288">
<p>&gt;&nbsp;</p>
</td>
<td width="288">
<p>Mayor que</p>
</td>
</tr>
<tr>
<td width="288">
<p>&gt;=</p>
</td>
<td width="288">
<p>Mayor o igual que</p>
</td>
</tr>
</tbody>
</table>
<h2>
    Operadores de listas
</h2>
<p>En Prolog, los operadores para manipular listas son fundamentales para realizar diversas operaciones sobre este tipo de estructuras de datos. Estos operadores permiten determinar la longitud de una lista, verificar la presencia de elementos, concatenar listas o invertir el orden de los elementos. Algunos de los operadores de listas est&aacute;n predefinidos aunque otros se suelen encontrar en alg&uacute;n m&oacute;dulo como <em>lists</em> en SWI-Prolog.</p>
<p>A continuaci&oacute;n,&nbsp;se muestran los operadores de listas m&aacute;s comunes en Prolog:</p>
<table width="583">
<tbody>
<tr>
<td width="234">
<p><strong>Operador</strong></p>
</td>
<td width="349">
<p><strong>Significado</strong></p>
</td>
</tr>
<tr>
<td width="234">
<p>length</p>
</td>
<td width="349">
<p>Determina la longitud de una lista</p>
</td>
</tr>
<tr>
<td width="234">
<p>member</p>
</td>
<td width="349">
<p>Verifica si un elemento est&aacute; presente en una lista</p>
</td>
</tr>
<tr>
<td width="234">
<p>append</p>
</td>
<td width="349">
<p>Concatena dos listas</p>
</td>
</tr>
<tr>
<td width="234">
<p>sort</p>
</td>
<td width="349">
<p>Ordena los elementos dentro de una lista</p>
</td>
</tr>
<tr>
<td width="234">
<p>reverse</p>
</td>
<td width="349">
<p>Invierte el orden de los elementos en una lista</p>
</td>
</tr>
<tr>
<td width="234">
<p>is_list</p>
</td>
<td width="349">
<p>Comprueba si es una lista</p>
</td>
</tr>
</tbody>
</table>
<h2>
    Otros operadores
</h2>
<p>En Prolog existen otro tipo de predicados extral&oacute;gicos que no est&aacute;n definidos dentro del marco l&oacute;gico del lenguaje, y pueden incluir por ejemplo operaciones de entrada/salida o manipulaci&oacute;n de archivos.</p>
<p>A continuaci&oacute;n,&nbsp;se muestran algunos de los operadores extral&oacute;gicos que existen en Prolog:</p>
<table width="583">
<tbody>
<tr>
<td width="234">
<p><strong>Operador</strong></p>
</td>
<td width="349">
<p><strong>Significado</strong></p>
</td>
</tr>
<tr>
<td width="234">
<p>!</p>
</td>
<td width="349">
<p>Es el operador de corte que se utiliza para controlar el <em>backtracking</em>.</p>
</td>
</tr>
<tr>
<td width="234">
<p>assert</p>
</td>
<td width="349">
<p>Se utiliza para agregar hechos a la base de conocimiento de Prolog durante la ejecuci&oacute;n del programa.</p>
</td>
</tr>
<tr>
<td width="234">
<p>retract</p>
</td>
<td width="349">
<p>Se utiliza para eliminar un hecho de la base de conocimiento.</p>
</td>
</tr>
<tr>
<td width="234">
<p>findall</p>
</td>
<td width="349">
<p>Se utiliza para recopilar todas las soluciones v&aacute;lidas de una consulta en una lista.</p>
</td>
</tr>
<tr>
<td width="234">
<p>write</p>
</td>
<td width="349">
<p>Se utiliza para imprimir un t&eacute;rmino en la salida est&aacute;ndar</p>
</td>
</tr>
<tr>
<td width="234">
<p>writeln</p>
</td>
<td width="349">
<p>Similar a <em>write</em> pero siempre agrega una nueva l&iacute;nea al final.</p>
</td>
</tr>
<tr>
<td width="234">
<p>read</p>
</td>
<td width="349">
<p>Se utiliza para leer una entrada desde la entrada est&aacute;ndar.</p>
</td>
</tr>
<tr>
<td width="234">
<p>open, close</p>
</td>
<td width="349">
<p>Se utilizan para abrir y cerrar archivos respectivamente.</p>
</td>
</tr>
</tbody>
</table>

<div className="container">
      <>
        <h1>Cuestionario</h1>
        <p>Responde a las siguientes preguntas:</p>
      </>
      <section>

        <form onSubmit={onSubmit}>
          {questions.map((question, idx) => (
            <div key={`group-${idx}`}>
              <h3>
                {idx + 1}. {question.questionText}
              </h3>
              {question.options.map((option, idx) => {
                return (
                  <div key={`option-${idx}`}>
                    <input
                      type="radio"
                      name={question.name}
                      value={option.radioValue}
                      checked={option.selected}
                      onChange={handleChange}
                    />
                    {option.choice}
                  </div>
                );
              })}
            </div>
          ))}
          {submitted && (
          <div className="result">
            <h3>
              Obtuviste {total} de {answers.length} puntos
            </h3>
          </div>
        )}
          <button className="sendInfo" onClick={onSubmit}>
            Submit
          </button>
        </form>
      </section>
    </div>

  </div>;
};
