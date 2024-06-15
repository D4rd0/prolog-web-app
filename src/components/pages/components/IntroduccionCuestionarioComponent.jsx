import React, { useEffect, useState, useRef } from 'react';

export const TerminosCuestionarioComponent = () => {
  
  const data = [
    {
      questionText: "¿Cuál es la principal diferencia entre Prolog y lenguajes de programación convencionales como C++ o Java?",
      name: "q1-name",
      options: [
        { choice: "a) Prolog sigue un paradigma lógico-declarativo.", radioValue: "q1-a", selected: false },
        { choice: "b) Prolog es un lenguaje compilado.", radioValue: "q1-b", selected: false },
        {
          choice: "c) Prolog es exclusivamente para cálculos numéricos.",
          radioValue: "q1-c",
          selected: false,
        },
        {
          choice: "d) Prolog utiliza bucles y condicionales.",
          radioValue: "q1-d",
          selected: false,
        },
      ],
    },
    {
      questionText: "¿Qué aspecto singular destaca en la capacidad de Prolog para resolver problemas?",
      name: "q2-name",
      options: [
        { choice: "a) Utiliza bucles y condicionales.", radioValue: "q2-a", selected: false },
        { choice: "b) Está basado en la programación imperativa.", radioValue: "q2-b", selected: false },
        { choice: "c) Su capacidad para resolver problemas a través de la lógica y la inferencia.", radioValue: "q2-c", selected: false },
        { choice: "d) Provee un alto rendimiento en cálculos numéricos.", radioValue: "q2-d", selected: false },
      ],
    },
    {
      questionText:
        "Describe brevemente cómo funciona el proceso de inferencia en Prolog cuando se realiza una consulta.",
      name: "q3-name",
      options: [
        { choice: "a) Prolog busca en una base de datos SQL.", radioValue: "q3-a", selected: false },
        { choice: "b) Prolog utiliza algoritmos de aprendizaje automático.", radioValue: "q3-b", selected: false },
        { choice: "c)  Prolog busca en la base de conocimiento de hechos y reglas para encontrar soluciones.", radioValue: "q3-c", selected: false },
        { choice: "d) Prolog utiliza la programación orientada a objetos.", radioValue: "q3-d", selected: false },
      ],
    },
    {
      questionText: "¿Qué es un predicado en Prolog y cómo se define?",
      name: "q4-name",
      options: [
        { choice: "a) Una variable sin valor asignado.", radioValue: "q4-a", selected: false },
        { choice: "b) Un método de programación funcional.", radioValue: "q4-b", selected: false },
        { choice: "c) Un conjunto de cláusulas con el mismo nombre en el átomo de la cabeza.", radioValue: "q4-c", selected: false },
        { choice: "d) Un conjunto de números enteros.", radioValue: "q4-d", selected: false },
      ],
    },
  ];

  const [questions, setQuestions] = useState(data);
  const [total, setTotal] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const answers = ["q1-a", "q2-c", "q3-c", "q4-c"];

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
              window.isCorrectIntroduccionCuestionario = 2; // Todas las respuestas son correctas
            } else {
              window.isCorrectIntroduccionCuestionario = 3;
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
