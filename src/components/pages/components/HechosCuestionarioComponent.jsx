import React, { useEffect, useState, useRef } from 'react';

export const HechosCuestionarioComponent = () => {
  const data = [
    {
      questionText: "¿Cuál es la definición de un hecho en Prolog según la descripción dada?",
      name: "q1-name",
      options: [
        { choice: "Una negación de un término.", radioValue: "q1-a", selected: false },
        { choice: "Una consulta que puede ser verdadera o falsa.", radioValue: "q1-b", selected: false },
        {
          choice: "Una declaración que establece una relación verdadera sin condiciones adicionales.",
          radioValue: "q1-c",
          selected: false,
        },
        {
          choice: "Una regla que establece una relación entre dos elementos.",
          radioValue: "q1-d",
          selected: false,
        },
      ],
    },
    {
      questionText: "¿Cuál es la sintaxis de un hecho en Prolog?",
      name: "q2-name",
      options: [
        { choice: "{t1, t2, …, tn}.", radioValue: "q2-a", selected: false },
        { choice: "[t1, t2, …, tn].", radioValue: "q2-b", selected: false },
        { choice: "predicado(t1, t2, …, tn).", radioValue: "q2-c", selected: false },
        { choice: "predicado(t1, t2, …, tn) :- condición.", radioValue: "q2-d", selected: false },
      ],
    },
    {
      questionText:
        "¿Cuál es el propósito principal de los hechos en Prolog?",
      name: "q3-name",
      options: [
        { choice: "Definir sublistas de listas de objetos.", radioValue: "q3-a", selected: false },
        { choice: "Establecer condiciones adicionales para las consultas.", radioValue: "q3-b", selected: false },
        { choice: "Representar información básica verdadera en el programa.", radioValue: "q3-c", selected: false },
        { choice: "Resolver problemas específicos mediante inferencias complejas.", radioValue: "q3-d", selected: false },
      ],
    },
    {
      questionText: "¿Qué tipo de información pueden representar los hechos en Prolog?",
      name: "q4-name",
      options: [
        { choice: "Listas de objetos.", radioValue: "q4-a", selected: false },
        { choice: "Operadores de listas.", radioValue: "q4-b", selected: false },
        { choice: "Tanto propiedades como relaciones.", radioValue: "q4-c", selected: false },
        { choice: "Únicamente consultas complejas.", radioValue: "q4-d", selected: false },
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
            if (counter === answers.length) {
              window.isCorrectHechosCuestionario = 2; // Todas las respuestas son correctas
            } else {
              window.isCorrectHechosCuestionario = 3;
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
export default HechosCuestionarioComponent;
