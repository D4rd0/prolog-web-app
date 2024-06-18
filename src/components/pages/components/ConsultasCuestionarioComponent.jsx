import React, { useEffect, useState, useRef } from 'react';

export const ConsultasCuestionarioComponent = () => {
  const data = [
    {
      questionText: "¿Cuál es la sintaxis de una consulta en Prolog?",
      name: "q1-name",
      options: [
        { choice: "a) h -> q1, q2, …, qn", radioValue: "q1-a", selected: false },
        { choice: "b) h :- q1, q2, …, qn", radioValue: "q1-b", selected: false },
        {
          choice: "c) ?- q1, q2, …, qn",
          radioValue: "q1-c",
          selected: false,
        },
        {
          choice: "d) !- h(q1, q2, …, qn)",
          radioValue: "q1-d",
          selected: false,
        },
      ],
    },
    {
      questionText: "¿Cuál es el propósito principal de las consultas en Prolog?",
      name: "q2-name",
      options: [
        { choice: "a) Derivar nuevas afirmaciones a partir de la información existente en la base de conocimiento.", radioValue: "q2-a", selected: false },
        { choice: "b) Establecer relaciones entre diferentes predicados mediante condiciones.", radioValue: "q2-b", selected: false },
        { choice: "c) Obtener información específica de la base de conocimiento y realizar verificaciones lógicas.", radioValue: "q2-c", selected: false },
        { choice: "d) Representar información básica del programa.", radioValue: "q2-d", selected: false },
      ],
    },
    {
      questionText:
        "¿Cómo responde Prolog a una consulta?",
      name: "q3-name",
      options: [
        { choice: "a) Devolviendo una lista de hechos que coinciden con la consulta.", radioValue: "q3-a", selected: false },
        { choice: "b) Devolviendo un valor numérico que satisface la consulta.", radioValue: "q3-b", selected: false },
        { choice: "c) Retornando true o false según si la consulta es verdadera o falsa.", radioValue: "q3-c", selected: false },
        { choice: "d) Todas las afirmaciones son ciertas.", radioValue: "q3-d", selected: false },
      ],
    },
    {
      questionText: "¿Qué tipo de información se puede obtener mediante consultas en Prolog?",
      name: "q4-name",
      options: [
        { choice: "a) Únicamente información sobre listas.", radioValue: "q4-a", selected: false },
        { choice: "b) Solo información específica sobre reglas en el programa.", radioValue: "q4-b", selected: false },
        { choice: "c) Información específica de la base de conocimiento y verificaciones lógicas.", radioValue: "q4-c", selected: false },
        { choice: "d) Información sobre la estructura interna del programa.", radioValue: "q4-d", selected: false },
      ],
    },
  ];

  const [questions, setQuestions] = useState(data);
  const [total, setTotal] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const answers = ["q1-c", "q2-c", "q3-d", "q4-c"];

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
              window.isCorrectConsultasCuestionario = 2; // Todas las respuestas son correctas
            } else {
              window.isCorrectConsultasCuestionario = 3;
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
export default ConsultasCuestionarioComponent;
