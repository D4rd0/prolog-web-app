import React, { useEffect, useState, useRef } from 'react';
import './HechosComponent.css';

export const HechosComponent = () => {

  const data = [
    {
      questionText: "¿Cuál es la definición de un hecho en Prolog según la descripción dada?",
      name: "q1-name",
      options: [
        { choice: "a) Una afirmación que establece una relación verdadera con condiciones adicionales.", radioValue: "q1-a", selected: false },
        { choice: "b) Una expresión lógica que puede ser verdadera o falsa.", radioValue: "q1-b", selected: false },
        {
          choice: "c) Una declaración que establece una relación verdadera sin condiciones adicionales.",
          radioValue: "q1-c",
          selected: false,
        },
        {
          choice: "d) Una regla que establece una relación entre dos elementos.",
          radioValue: "q1-d",
          selected: false,
        },
      ],
    },
    {
      questionText: "¿Cuál es la sintaxis de un hecho en Prolog?",
      name: "q2-name",
      options: [
        { choice: "a) {t1, t2, …, tn}.", radioValue: "q2-a", selected: false },
        { choice: "b) b) [t1, t2, …, tn].", radioValue: "q2-b", selected: false },
        { choice: "c) predicado(t1, t2, …, tn).", radioValue: "q2-c", selected: false },
        { choice: "d) predicado(t1, t2, …, tn) :- condición.", radioValue: "q2-d", selected: false },
      ],
    },
    {
      questionText:
        "¿Cuál es el propósito principal de los hechos en Prolog?",
      name: "q3-name",
      options: [
        { choice: "a) Definir relaciones lógicas entre objetos.", radioValue: "q3-a", selected: false },
        { choice: "b) Establecer condiciones adicionales para las consultas.", radioValue: "q3-b", selected: false },
        { choice: "c) Representar información básica verdadera en el programa.", radioValue: "q3-c", selected: false },
        { choice: "d) Resolver problemas específicos mediante inferencias complejas.", radioValue: "q3-d", selected: false },
      ],
    },
    {
      questionText: "¿Qué tipo de información pueden representar los hechos en Prolog?",
      name: "q4-name",
      options: [
        { choice: "a) Solo propiedades de objetos.", radioValue: "q4-a", selected: false },
        { choice: "b) Solo relaciones entre elementos.", radioValue: "q4-b", selected: false },
        { choice: "c) Tanto propiedades como relaciones.", radioValue: "q4-c", selected: false },
        { choice: "d) Únicamente consultas complejas.", radioValue: "q4-d", selected: false },
      ],
    },
  ];

  const [questions, setQuestions] = useState(data);
  const [total, setTotal] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const answers = ["q1-c", "q2-c", "q3-c", "q4-c"];

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

    const firstInputBox = useRef(null);
    const secondInputBox = useRef(null);
    const [showingAnswer, setShowingAnswer] = useState(false);

    const toggleAnswer = () => {
      if (showingAnswer) {
          firstInputBox.current.innerText = '';
          secondInputBox.current.innerText = '';
          firstInputBox.current.classList.remove('correct');
          secondInputBox.current.classList.remove('correct');
      } else {
          firstInputBox.current.innerText = '<a';
          secondInputBox.current.innerText = '</a>';
          firstInputBox.current.classList.add('correct');
          secondInputBox.current.classList.add('correct');
      }
      setShowingAnswer(!showingAnswer);
  };

    const submitAnswer = () => {
        const firstBox = firstInputBox.current.innerText.trim();
        const secondBox = secondInputBox.current.innerText.trim();

        if (firstBox === '<a' && secondBox === '</a>') {
            alert('Correcto');
        } else {
            alert('Incorrecto');
        }
    };

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

<div>
            <h1>Ejercicio</h1>
            <p>Completa el código que falta:</p>
            <div>
                <span className="input-box" contentEditable="true" ref={firstInputBox}></span>
                <span>href="https://www.w3schools.com"This is a link</span>
                <span className="input-box" contentEditable="true" ref={secondInputBox}></span>
            </div>

            <div className="button">
            <button             style={{
              backgroundColor: '#3498db',
              color: 'white',
              border: '1px solid #000000',
              fontSize: '16px',
              height: '45px',
              margin: '30px 30px 0 0',
              cursor: 'pointer',
            }}onClick={submitAnswer}>Enviar respuesta</button>
              <button             style={{
              backgroundColor: '#3498db',
              color: 'white',
              border: '1px solid #000000',
              fontSize: '16px',
              height: '45px',
              margin: '30px 0 0 0',
              cursor: 'pointer',
            }}onClick={toggleAnswer}>{showingAnswer ? 'Ocultar respuesta' : 'Mostrar respuesta'}</button>

            </div>
        </div>

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
