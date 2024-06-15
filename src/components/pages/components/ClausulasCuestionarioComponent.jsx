import React, { useEffect, useState, useRef } from 'react';

export const ClausulasCuestionarioComponent = () => {
  const data = [
    {
      questionText: "Según la estructura presentada, ¿cómo se define la cabeza de una cláusula en Prolog?",
      name: "q1-name",
      options: [
        { choice: "a) Como una secuencia de literales.", radioValue: "q1-a", selected: false },
        { choice: "b) Como un hecho.", radioValue: "q1-b", selected: false },
        {
          choice: "c) Como una consulta.",
          radioValue: "q1-c",
          selected: false,
        },
        {
          choice: "d) Como un átomo.",
          radioValue: "q1-d",
          selected: false,
        },
      ],
    },
    {
      questionText: "¿Qué tipo de cláusula se denomina como hecho en Prolog?",
      name: "q2-name",
      options: [
        { choice: "a) Aquella que tiene cabeza y no tiene cuerpo.", radioValue: "q2-a", selected: false },
        { choice: "b) Aquella que tiene cabeza y tiene cuerpo.", radioValue: "q2-b", selected: false },
        { choice: "c) Aquella que no tiene cabeza y tiene cuerpo.", radioValue: "q2-c", selected: false },
        { choice: "d) Aquella que contiene solo variables.", radioValue: "q2-d", selected: false },
      ],
    },
    {
      questionText:
        "¿Cómo se llama el tipo de cláusula que tiene cabeza y cuerpo en Prolog?",
      name: "q3-name",
      options: [
        { choice: "a) Hecho.", radioValue: "q3-a", selected: false },
        { choice: "b) Regla.", radioValue: "q3-b", selected: false },
        { choice: "c) Consulta.", radioValue: "q3-c", selected: false },
        { choice: "d) Literal.", radioValue: "q3-d", selected: false },
      ],
    },
    {
      questionText: "¿Cuál es el propósito de una cláusula de tipo consulta en Prolog?",
      name: "q4-name",
      options: [
        { choice: "a) Definir relaciones entre objetos.", radioValue: "q4-a", selected: false },
        { choice: "b) Representar información fija en el programa.", radioValue: "q4-b", selected: false },
        { choice: "c) Responder preguntas o consultas planteadas al programa.", radioValue: "q4-c", selected: false },
        { choice: "d) Establecer reglas lógicas entre términos.", radioValue: "q4-d", selected: false },
      ],
    },
  ];

  const [questions, setQuestions] = useState(data);
  const [total, setTotal] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const answers = ["q1-d", "q2-a", "q3-b", "q4-c"];

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
            if (counter === answers.length) {
              window.isCorrectClausulasCuestionario = 2; // Todas las respuestas son correctas
            } else {
              window.isCorrectClausulasCuestionario = 3;
            }

      }
    }

  return <div style={{ color: 'black', fontSize: '18px' }}>
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
    </div>
};
export default ClausulasCuestionarioComponent;
