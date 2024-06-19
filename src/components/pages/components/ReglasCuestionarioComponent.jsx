import React, { useEffect, useState, useRef } from 'react';

export const ReglasCuestionarioComponent = () => {
    const data = [
        {
          questionText: "¿Cuál es la sintaxis de una regla en Prolog?",
          name: "q1-name",
          options: [
            { choice: "h ?- q1, q2, …, qn", radioValue: "q1-a", selected: false },
            { choice: "h :- q1, q2, …, qn", radioValue: "q1-b", selected: false },
            {
              choice: "h | q1, q2, …, qn",
              radioValue: "q1-c",
              selected: false,
            },
            {
              choice: "h :: q1, q2, …, qn",
              radioValue: "q1-d",
              selected: false,
            },
          ],
        },
        {
          questionText:
            "¿Cuál es el propósito principal de las reglas en Prolog?",
          name: "q2-name",
          options: [
            { choice: "Representar información básica verdadera en el programa.", radioValue: "q2-a", selected: false },
            { choice: "Establecer relaciones entre diferentes listas mediante condiciones.", radioValue: "q2-b", selected: false },
            { choice: "Derivar nuevas afirmaciones a partir de la información existente en la base de conocimiento.", radioValue: "q2-c", selected: false },
            { choice: "Resolver consultas complejas mediante inferencias lógicas.", radioValue: "q2-d", selected: false },
          ],
        },
        {
          questionText: "¿Qué tipo de regla se llama recursiva en Prolog?",
          name: "q3-name",
          options: [
            { choice: "Aquella que no tiene cuerpo.", radioValue: "q3-a", selected: false },
            { choice: "Aquella que contiene solo variables.", radioValue: "q3-b", selected: false },
            { choice: "Aquella que se llama a sí misma, ya sea directa o indirectamente.", radioValue: "q3-c", selected: false },
            { choice: "Aquella que establece una relación entre diferentes predicados.", radioValue: "q3-d", selected: false },
          ],
        },
      ];
    
      const [questions, setQuestions] = useState(data);
      const [total, setTotal] = useState(0);
      const [submitted, setSubmitted] = useState(false);
    
      const answers = ["q1-b", "q2-c", "q3-c"];
    
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
              window.isCorrectReglasCuestionario = 2; // Todas las respuestas son correctas
            } else {
              window.isCorrectReglasCuestionario = 3;
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
export default ReglasCuestionarioComponent;
