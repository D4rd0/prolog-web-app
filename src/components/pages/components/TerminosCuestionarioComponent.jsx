import React, { useEffect, useState, useRef } from 'react';

export const TerminosCuestionarioComponent = () => {
  
  const data = [
    {
      questionText: "¿Cuál de las siguientes opciones describe mejor un átomo en Prolog?",
      name: "q1-name",
      options: [
        { choice: "Una estructura compuesta.", radioValue: "q1-a", selected: false },
        { choice: "Un conjunto de números enteros.", radioValue: "q1-b", selected: false },
        {
          choice: "Un término que representa un nombre simbólico o constante.",
          radioValue: "q1-c",
          selected: false,
        },
        {
          choice: "Una expresión que puede ser verdadera o falsa.",
          radioValue: "q1-d",
          selected: false,
        },
      ],
    },
    {
      questionText:
        "¿Cuál es la regla para nombrar variables en Prolog?",
      name: "q2-name",
      options: [
        { choice: "Deben empezar con un número.", radioValue: "q2-a", selected: false },
        { choice: "Deben empezar en minúscula.", radioValue: "q2-b", selected: false },
        { choice: "Deben empezar en mayúscula o con ‘_’.", radioValue: "q2-c", selected: false },
        { choice: "Deben empezar con un símbolo especial.", radioValue: "q2-d", selected: false },
      ],
    },
    {
      questionText: "¿Cuál es la forma de definir una estructura en Prolog?",
      name: "q3-name",
      options: [
        { choice: "átomo(t1, t2, ..., tn)", radioValue: "q3-a", selected: false },
        { choice: "t1, t2, ..., tn(átomo)", radioValue: "q3-b", selected: false },
        { choice: "[t1, t2, ..., tn]", radioValue: "q3-c", selected: false },
      ],
    },
  ];

  const [questions, setQuestions] = useState(data);
  const [total, setTotal] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const answers = ["q1-c", "q2-c", "q3-a"];

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
              window.isCorrectTerminosCuestionario = 2; // Todas las respuestas son correctas
            } else {
              window.isCorrectTerminosCuestionario = 3;
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
export default TerminosCuestionarioComponent;
