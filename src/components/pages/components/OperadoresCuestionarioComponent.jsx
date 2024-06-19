import React, { useEffect, useState, useRef } from 'react';

export const ListasCuestionarioComponent = () => {
  const data = [
    {
      questionText: "¿Cuál es la función principal de los operadores aritméticos en Prolog?",
      name: "q1-name",
      options: [
        { choice: "Realizar operaciones lógicas entre términos.", radioValue: "q1-a", selected: false },
        { choice: "Realizar operaciones aritméticas entre términos.", radioValue: "q1-b", selected: false },
        {
          choice: "Realizar operaciones entre listas.",
          radioValue: "q1-c",
          selected: false,
        },
        {
          choice: "Establecer relaciones de orden entre términos.",
          radioValue: "q1-d",
          selected: false,
        },
      ],
    },
    {
      questionText: "¿Cuál de los siguientes operadores se utiliza para calcular el resto de la división en Prolog?",
      name: "q2-name",
      options: [
        { choice: "/", radioValue: "q2-a", selected: false },
        { choice: "//", radioValue: "q2-b", selected: false },
        { choice: "mod", radioValue: "q2-c", selected: false },
        { choice: "%", radioValue: "q2-d", selected: false },
      ],
    },
    {
      questionText:
        "¿Cuál es la función principal de los operadores relacionales en Prolog?",
      name: "q3-name",
      options: [
        { choice: "Realizar operaciones aritméticas entre términos.", radioValue: "q3-a", selected: false },
        { choice: "Verificar la igualdad o desigualdad entre términos.", radioValue: "q3-b", selected: false },
        { choice: "Manipular listas de datos.", radioValue: "q3-c", selected: false },
        { choice: "Realizar operaciones de entrada/salida.", radioValue: "q3-d", selected: false },
      ],
    },
  ];

  const [questions, setQuestions] = useState(data);
  const [total, setTotal] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const answers = ["q1-b", "q2-c", "q3-b"];

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
              window.isCorrectOperadoresCuestionario = 2; // Todas las respuestas son correctas
            } else {
              window.isCorrectOperadoresCuestionario = 3;
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
export default ListasCuestionarioComponent;
