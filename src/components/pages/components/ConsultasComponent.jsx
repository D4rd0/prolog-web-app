import React, { useEffect, useState } from 'react';

export const ConsultasComponent = () => {

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
          choice: "d) ?- h(q1, q2, …, qn)",
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
        { choice: "d) Representar información básica verdadera en el programa.", radioValue: "q2-d", selected: false },
      ],
    },
    {
      questionText:
        "¿Cómo responde Prolog a una consulta?",
      name: "q3-name",
      options: [
        { choice: "a) Devolviendo una lista de hechos que coinciden con la consulta.", radioValue: "q3-a", selected: false },
        { choice: "b) Calculando un valor numérico que satisface la consulta.", radioValue: "q3-b", selected: false },
        { choice: "c) Retornando true o false según si la consulta es verdadera o falsa.", radioValue: "q3-c", selected: false },
        { choice: "d) Generando una nueva regla que cumple con la consulta.", radioValue: "q3-d", selected: false },
      ],
    },
    {
      questionText: "¿Qué tipo de información se puede obtener mediante consultas en Prolog?",
      name: "q4-name",
      options: [
        { choice: "a) Únicamente información sobre relaciones entre objetos.", radioValue: "q4-a", selected: false },
        { choice: "b) Solo información específica sobre hechos en la base de conocimiento.", radioValue: "q4-b", selected: false },
        { choice: "c) Información específica de la base de conocimiento y verificaciones lógicas.", radioValue: "q4-c", selected: false },
        { choice: "d) Información sobre la estructura interna del programa.", radioValue: "q4-d", selected: false },
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
    }
  }

  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('./src/components/pages/components/ConsultasComponent.html')
      .then(response => response.text())
      .then(data => setHtmlContent(data))
      .catch(error => console.error('Error fetching HTML:', error));
  }, []);

  return (
    <div style={{ color: 'black', fontSize: '18px' }}>
      <h1>
        Consultas
      </h1>
      <p>En Prolog, una consulta es una cl&aacute;usula que se utiliza para hacer preguntas a la base de conocimiento definida en el programa. La sintaxis de una consulta es similar a la de una cl&aacute;usula sin cabeza, pero se utiliza un s&iacute;mbolo de interrogaci&oacute;n seguido de un guion en lugar de &lsquo;:-&rsquo;. Por ejemplo:</p>
      <p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ?- gusta(juan, libro).</strong></p>
      <p>En esta consulta, se est&aacute; preguntando si es cierto que a Juan le gusta un libro. El sistema Prolog buscar&aacute; en la base de conocimiento y responder&aacute; con "true" o "false", o bien con los valores correspondientes si hubiera variables en la consulta empleando para ello un mecanismo de inferencia.</p>
      
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

      <p>Las consultas permiten obtener informaci&oacute;n espec&iacute;fica de la base de conocimiento, realizar verificaciones l&oacute;gicas y explorar las relaciones definidas en el programa. Es mediante las consultas que se interact&uacute;a con el sistema para obtener respuestas l&oacute;gicas basadas en las reglas y hechos previamente establecidos.</p>

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
  );
};

export default ConsultasComponent;