import React, { useEffect, useState } from 'react';

export const OperadoresComponent = () => {

  const data = [
    {
      questionText: "¿Cuál es la función principal de los operadores aritméticos en Prolog?",
      name: "q1-name",
      options: [
        { choice: "a) Realizar operaciones lógicas entre términos.", radioValue: "q1-a", selected: false },
        { choice: "b) Comparar expresiones numéricas dentro del código.", radioValue: "q1-b", selected: false },
        {
          choice: "c) Realizar operaciones matriciales.",
          radioValue: "q1-c",
          selected: false,
        },
        {
          choice: "d) Establecer relaciones de orden entre términos.",
          radioValue: "q1-d",
          selected: false,
        },
      ],
    },
    {
      questionText: "¿Cuál de los siguientes operadores se utiliza para calcular el resto de la división en Prolog?",
      name: "q2-name",
      options: [
        { choice: "a) /", radioValue: "q2-a", selected: false },
        { choice: "b) //", radioValue: "q2-b", selected: false },
        { choice: "c) mod", radioValue: "q2-c", selected: false },
        { choice: "d) %", radioValue: "q2-d", selected: false },
      ],
    },
    {
      questionText:
        "¿Cuál es la función principal de los operadores relacionales en Prolog?",
      name: "q3-name",
      options: [
        { choice: "a) Realizar operaciones aritméticas entre términos.", radioValue: "q3-a", selected: false },
        { choice: "b) Verificar la igualdad o desigualdad entre términos.", radioValue: "q3-b", selected: false },
        { choice: "c) Manipular listas de datos.", radioValue: "q3-c", selected: false },
        { choice: "d) Realizar operaciones de entrada/salida.", radioValue: "q3-d", selected: false },
      ],
    },
    {
      questionText: "¿Qué hace el operador de corte (!) en Prolog?",
      name: "q4-name",
      options: [
        { choice: "a) Agrega hechos a la base de conocimiento.", radioValue: "q4-a", selected: false },
        { choice: "b) Elimina un hecho de la base de conocimiento.", radioValue: "q4-b", selected: false },
        { choice: "c) Controla el backtracking durante la ejecución.", radioValue: "q4-c", selected: false },
        { choice: "d) Recopila todas las soluciones válidas de una consulta en una lista.", radioValue: "q4-d", selected: false },
      ],
    },
  ];

  const [questions, setQuestions] = useState(data);
  const [total, setTotal] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const answers = ["q1-b", "q2-c", "q3-b", "q4-c"];

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
          <button
            className="sendInfo"
            style={{
              backgroundColor: '#3498db',
              color: 'white',
              border: '1px solid #000000',
              fontSize: '16px',
              height: '45px',
              margin: '30px 0 0 0',
              cursor: 'pointer',
            }}
            onClick={onSubmit}
          >
            Enviar
          </button>
        </form>
      </section>
    </div>

  </div>;
};
