import React, { useEffect, useState } from 'react';

export const ConsultasComponent = () => {

  const data = [
    {
      questionText: "Angular es definido como:",
      name: "q1-name",
      options: [
        { choice: "a) Framework", radioValue: "q1-a", selected: false },
        { choice: "b) librería", radioValue: "q1-b", selected: false },
        {
          choice: "c) Lenguage de programación",
          radioValue: "q1-c",
          selected: false,
        },
        {
          choice: "d) Ninguno de los anterirores",
          radioValue: "q1-d",
          selected: false,
        },
      ],
    },
    {
      questionText: "¿JavaScript es lo mismo que Java?",
      name: "q2-name",
      options: [
        { choice: "a) Si", radioValue: "q2-a", selected: false },
        { choice: "b) No", radioValue: "q2-b", selected: false },
        { choice: "c) Aveces", radioValue: "q2-c", selected: false },
        { choice: "d) Casi siempre", radioValue: "q2-d", selected: false },
      ],
    },
    {
      questionText:
        "Dado el siguiente arreglo: const arr = [10, 30, 44, 80]. ¿Cual de las siguientes opciones nos permite obtener el ultimo elemento del arreglo?",
      name: "q3-name",
      options: [
        { choice: "a) arr[1]", radioValue: "q3-a", selected: false },
        { choice: "b) arr[arr.length]", radioValue: "q3-b", selected: false },
        { choice: "c) arr[arr.length - 1]", radioValue: "q3-c", selected: false },
        { choice: "d) arr.length", radioValue: "q3-d", selected: false },
      ],
    },
    {
      questionText: "¿Es posible utilzar Redux en aplicaciones de Angular?",
      name: "q4-name",
      options: [
        { choice: "a) Si", radioValue: "q4-a", selected: false },
        { choice: "b) No", radioValue: "q4-b", selected: false },
      ],
    },
    {
      questionText: "¿Ionic esta basado en React?",
      name: "q5-name",
      options: [
        { choice: "a) Si", radioValue: "q5-a", selected: false },
        { choice: "b) No", radioValue: "q5-b", selected: false },
      ],
    },
  ];

  const [questions, setQuestions] = useState(data);
  const [total, setTotal] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const answers = ["q1-a", "q2-b", "q3-c", "q4-a", "q5-b"];

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
          <button className="sendInfo" onClick={onSubmit}>
            Submit
          </button>
        </form>
      </section>
    </div>

    </div>
  );
};

export default ConsultasComponent;