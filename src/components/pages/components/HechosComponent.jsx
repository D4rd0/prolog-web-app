import React, { useEffect, useState } from 'react';

export const HechosComponent = () => {

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
