import React, { useEffect, useState, useRef } from 'react';

export const NegacionCuestionarioComponent = () => {
  const data = [
    {
      questionText: "¿Qué representa la negación por fallo en Prolog?",
      name: "q1-name",
      options: [
        { choice: "a) La negación lógica clásica.", radioValue: "q1-a", selected: false },
        { choice: "b) La verificación de que una cierta condición se cumple.", radioValue: "q1-b", selected: false },
        {
          choice: "c) La verificación de que una cierta condición no se cumple.",
          radioValue: "q1-c",
          selected: false,
        },
        {
          choice: "d) La inversión del resultado de una consulta.",
          radioValue: "q1-d",
          selected: false,
        },
      ],
    },
    {
      questionText: "¿Qué devuelve el predicado not en Prolog si la condición no se cumple?",
      name: "q2-name",
      options: [
        { choice: "a) Devuelve false.", radioValue: "q2-a", selected: false },
        { choice: "b) Devuelve true.", radioValue: "q2-b", selected: false },
        { choice: "c) Devuelve el valor opuesto de la condición.", radioValue: "q2-c", selected: false },
        { choice: "d) Devuelve una lista vacía.", radioValue: "q2-d", selected: false },
      ],
    },
    {
      questionText:
        "¿Cómo se utiliza el predicado not en una consulta en Prolog?",
      name: "q3-name",
      options: [
        { choice: "a) Se coloca antes de la consulta que se desea negar.", radioValue: "q3-a", selected: false },
        { choice: "b) Se coloca después de la consulta que se desea negar.", radioValue: "q3-b", selected: false },
        { choice: "c) Se incluye como parte de la definición del hecho.", radioValue: "q3-c", selected: false },
        { choice: "d) Se utiliza como un operador dentro de una regla.", radioValue: "q3-d", selected: false },
      ],
    },
  ];

  const [questions, setQuestions] = useState(data);
  const [total, setTotal] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const answers = ["q1-c", "q2-b", "q3-a"];

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
              window.isCorrectNegacionCuestionario = 2; // Todas las respuestas son correctas
            } else {
              window.isCorrectNegacionCuestionario = 3;
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
export default NegacionCuestionarioComponent;
