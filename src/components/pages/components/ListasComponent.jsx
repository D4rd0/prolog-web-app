import React, { useEffect, useState } from 'react';

export const ListasComponent = () => {

  const data = [
    {
      questionText: "¿Cómo se representa una lista en Prolog?",
      name: "q1-name",
      options: [
        { choice: "a) Como una secuencia de elementos separados por punto y coma.", radioValue: "q1-a", selected: false },
        { choice: "b) Como una secuencia de elementos separados por comas y encerrados entre corchetes.", radioValue: "q1-b", selected: false },
        {
          choice: "c) Como una secuencia de elementos separados por espacios y encerrados entre paréntesis.",
          radioValue: "q1-c",
          selected: false,
        },
        {
          choice: "d) Como una secuencia de elementos separados por barras verticales y encerrados entre corchetes.",
          radioValue: "q1-d",
          selected: false,
        },
      ],
    },
    {
      questionText: "¿Cómo se define la cabeza de una lista en Prolog?",
      name: "q2-name",
      options: [
        { choice: "a) Es el último elemento de la lista.", radioValue: "q2-a", selected: false },
        { choice: "b) Es el primer elemento de la lista.", radioValue: "q2-b", selected: false },
        { choice: "c) Es una variable que representa la lista entera.", radioValue: "q2-c", selected: false },
        { choice: "d) Es el elemento que separa la lista en dos partes.", radioValue: "q2-d", selected: false },
      ],
    },
    {
      questionText:
        "¿Qué tipo de elementos pueden contener las listas en Prolog?",
      name: "q3-name",
      options: [
        { choice: "a) Solo números enteros.", radioValue: "q3-a", selected: false },
        { choice: "b) Solo átomos y variables.", radioValue: "q3-b", selected: false },
        { choice: "c) Cualquier término válido en Prolog, incluyendo átomos, números, variables, otras listas y estructuras complejas.", radioValue: "q3-c", selected: false },
        { choice: "d) Solo átomos y otras listas.", radioValue: "q3-d", selected: false },
      ],
    },
    {
      questionText: "¿Cuál es una aplicación común de las listas en Prolog?",
      name: "q4-name",
      options: [
        { choice: "a) Realizar operaciones aritméticas complejas.", radioValue: "q4-a", selected: false },
        { choice: "b) Representar estructuras de datos complejas.", radioValue: "q4-b", selected: false },
        { choice: "c) Controlar el flujo de ejecución del programa.", radioValue: "q4-c", selected: false },
        { choice: "d) Manipular archivos de texto.", radioValue: "q4-d", selected: false },
      ],
    },
  ];

  const [questions, setQuestions] = useState(data);
  const [total, setTotal] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const answers = ["q1-b", "q2-b", "q3-c", "q4-b"];

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

  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('./src/components/pages/components/ListasComponent.html')
      .then(response => response.text())
      .then(data => setHtmlContent(data))
      .catch(error => console.error('Error fetching HTML:', error));
  }, []);

  return <div style={{ color: 'black', fontSize: '18px' }}>
    <h1>
      Listas
    </h1>
    <p>
    En Prolog, una lista es una estructura de datos fundamental que permite almacenar una secuencia ordenada de elementos. Se representa como una secuencia de elementos separados por comas y encerrados entre corchetes [ ]. 
  
    Las listas están formadas recursivamente por una cabeza, que es el primer elemento de la lista y una cola, que es una lista del resto de elementos. Por ejemplo, para la lista [1, 2, 3], la cabeza es 1 y la cola es [2, 3]. Así, la lista [1,2,3] podría representarse también como [1 | [2,3]].
    </p>

    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

    <p>
    Los elementos de una lista pueden ser cualquier término válido en Prolog, incluyendo átomos, números, variables, otras listas, o incluso estructuras complejas. 
 
    Las listas son una herramienta muy útil en Prolog y se utilizan ampliamente en la manipulación de datos, la representación de estructuras de datos y la implementación de algoritmos.
    </p>
  
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
