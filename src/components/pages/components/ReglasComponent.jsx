import React, { useEffect, useState } from 'react';

export const ReglasComponent = () => {

  const data = [
    {
      questionText: "¿Cuál es la sintaxis de una regla en Prolog?",
      name: "q1-name",
      options: [
        { choice: "a) h -> q1, q2, …, qn", radioValue: "q1-a", selected: false },
        { choice: "b) h :- q1, q2, …, qn", radioValue: "q1-b", selected: false },
        {
          choice: "c) h := q1, q2, …, qn",
          radioValue: "q1-c",
          selected: false,
        },
        {
          choice: "d) h :: q1, q2, …, qn",
          radioValue: "q1-d",
          selected: false,
        },
      ],
    },
    {
      questionText: "¿Qué representan los literales q1, q2, …, qn en una regla en Prolog?",
      name: "q2-name",
      options: [
        { choice: "a) Variables que pueden tomar cualquier valor.", radioValue: "q2-a", selected: false },
        { choice: "b) Condiciones o antecedentes que deben cumplirse para que se cumpla la regla.", radioValue: "q2-b", selected: false },
        { choice: "c) Afirmaciones verdaderas sin condiciones adicionales.", radioValue: "q2-c", selected: false },
        { choice: "d) Hechos básicos que establecen relaciones simples.", radioValue: "q2-d", selected: false },
      ],
    },
    {
      questionText:
        "¿Cuál es el propósito principal de las reglas en Prolog?",
      name: "q3-name",
      options: [
        { choice: "a) Representar información básica verdadera en el programa.", radioValue: "q3-a", selected: false },
        { choice: "b) Establecer relaciones entre diferentes predicados mediante condiciones.", radioValue: "q3-b", selected: false },
        { choice: "c) Derivar nuevas afirmaciones a partir de la información existente en la base de conocimiento.", radioValue: "q3-c", selected: false },
        { choice: "d) Resolver consultas complejas mediante inferencias lógicas.", radioValue: "q3-d", selected: false },
      ],
    },
    {
      questionText: "¿Qué tipo de regla se llama recursiva en Prolog?",
      name: "q4-name",
      options: [
        { choice: "a) Aquella que no tiene cuerpo.", radioValue: "q4-a", selected: false },
        { choice: "b) Aquella que contiene solo variables.", radioValue: "q4-b", selected: false },
        { choice: "c) Aquella que se llama a sí misma, ya sea directa o indirectamente.", radioValue: "q4-c", selected: false },
        { choice: "d) Aquella que establece una relación entre diferentes predicados.", radioValue: "q4-d", selected: false },
      ],
    },
  ];

  const [questions, setQuestions] = useState(data);
  const [total, setTotal] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const answers = ["q1-b", "q2-b", "q3-c", "q4-c"];

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
    fetch('./src/components/pages/components/ReglasComponent.html')
      .then(response => response.text())
      .then(data => setHtmlContent(data))
      .catch(error => console.error('Error fetching HTML:', error));
  }, []);

  const [htmlContent2, setHtmlContent2] = useState('');

  useEffect(() => {
    fetch('./src/components/pages/components/ReglasComponent2.html')
      .then(response => response.text())
      .then(data => setHtmlContent2(data))
      .catch(error => console.error('Error fetching HTML:', error));
  }, []);

  const [htmlContent3, setHtmlContent3] = useState('');

  useEffect(() => {
    fetch('./src/components/pages/components/ReglasComponent3.html')
      .then(response => response.text())
      .then(data => setHtmlContent3(data))
      .catch(error => console.error('Error fetching HTML:', error));
  }, []);

  return <div style={{ color: 'black', fontSize: '18px' }}>
    <h1>
      Reglas
    </h1>
    <p>Una regla en Prolog es una construcci&oacute;n l&oacute;gica que establece una relaci&oacute;n entre diferentes predicados mediante condiciones o antecedentes.</p>
<p>La sintaxis de una regla es la siguiente:</p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;h :- q<sub>1</sub>, q<sub>2</sub>, &hellip;, q<sub>n</sub></strong></p>
<p>donde h es un &aacute;tomo y q<sub>1</sub>, q<sub>2</sub>, &hellip;, q<sub>n </sub>son literales. Una regla representa la implicaci&oacute;n</p>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;q<sub>1</sub>, q<sub>2</sub>, &hellip;, q<sub>n -&gt; </sub>h</strong></p>
<p>Las reglas permiten definir relaciones m&aacute;s complejas y derivar nuevas afirmaciones a partir de informaci&oacute;n existente en la base de conocimiento.</p>
<p>Al ejecutar una consulta en Prolog, el motor de inferencia utiliza estas reglas para determinar si se cumplen las condiciones necesarias y, en su caso, deducir nuevos hechos para responder a la consulta realizada.</p>
<p>En Prolog, la secuencia q<sub>1</sub>, q<sub>2</sub>, &hellip;, q<sub>n </sub>representa la <strong>conjunci&oacute;n</strong> q<sub>1</sub>, q<sub>2</sub>, &hellip;, q<sub>n</sub>. Por ejemplo:</p>

<div dangerouslySetInnerHTML={{ __html: htmlContent }} />


<p>Adem&aacute;s, con el objeto de proporcionar cl&aacute;usulas m&aacute;s compactas, Prolog tambi&eacute;n nos permite representar <strong>disyunciones</strong> empleando el operador &acute;<strong>;</strong>&acute;. Por ejemplo:</p>

<div dangerouslySetInnerHTML={{ __html: htmlContent2 }} />

<p>En Prolog, una regla puede ser <strong>recursiva</strong> si se llama a s&iacute; misma, ya sea de manera directa (<strong><em>p</em></strong> llama a <strong><em>p</em></strong>) o mediante predicados intermedios (<strong><em>p</em></strong> llama a <strong><em>q</em></strong> y <strong><em>q</em></strong> llama a <strong><em>p</em></strong>). Por tanto, la recursividad en Prolog se basa en la idea de dividir un problema en subproblemas m&aacute;s peque&ntilde;os y resolverlos de manera incremental.</p>

<p>Aqu&iacute; hay un ejemplo pr&aacute;ctico de una regla recursiva en Prolog para el c&aacute;lculo del factorial:</p>

<div dangerouslySetInnerHTML={{ __html: htmlContent3 }} />

<p>Al realizar consultas como <strong>factorial(5, F)</strong>, Prolog utilizar&aacute; la definici&oacute;n recursiva y obtendr&aacute; el factorial de 5 de forma incremental.</p>
  
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
