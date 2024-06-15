import React, { useEffect, useState, useRef } from 'react';

export const ListasCuestionarioComponent = () => {
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
