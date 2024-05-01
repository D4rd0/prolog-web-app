import React, { useEffect, useState } from 'react';

export const TerminosComponent = () => {

  const data = [
    {
      questionText: "¿Cuál de las siguientes opciones describe mejor un átomo en Prolog?",
      name: "q1-name",
      options: [
        { choice: "a) Una estructura compuesta.", radioValue: "q1-a", selected: false },
        { choice: "b) Un conjunto de números enteros.", radioValue: "q1-b", selected: false },
        {
          choice: "c) Un término que representa un nombre simbólico o constante.",
          radioValue: "q1-c",
          selected: false,
        },
        {
          choice: "d) Una expresión que puede ser verdadera o falsa.",
          radioValue: "q1-d",
          selected: false,
        },
      ],
    },
    {
      questionText: "¿Qué es un literal en Prolog según la descripción dada?",
      name: "q2-name",
      options: [
        { choice: "a) Una expresión atómica o compuesta que siempre es verdadera.", radioValue: "q2-a", selected: false },
        { choice: "b) Una estructura compuesta que contiene solo átomos.", radioValue: "q2-b", selected: false },
        { choice: "c) Una variable que puede tomar cualquier valor.", radioValue: "q2-c", selected: false },
        { choice: "d) Una expresión atómica o compuesta que puede ser verdadera o falsa.", radioValue: "q2-d", selected: false },
      ],
    },
    {
      questionText:
        "¿Cuál es la regla para nombrar variables en Prolog?",
      name: "q3-name",
      options: [
        { choice: "a) Deben empezar con un número.", radioValue: "q3-a", selected: false },
        { choice: "b) Deben empezar en minúscula.", radioValue: "q3-b", selected: false },
        { choice: "c) Deben empezar en mayúscula o con ‘_’.", radioValue: "q3-c", selected: false },
        { choice: "d) Deben empezar con un símbolo especial.", radioValue: "q3-d", selected: false },
      ],
    },
    {
      questionText: "¿Cuál es la forma de definir una estructura en Prolog?",
      name: "q4-name",
      options: [
        { choice: "a) átomo(t1, t2, ..., tn)", radioValue: "q4-a", selected: false },
        { choice: "b) t1, t2, ..., tn(átomo)", radioValue: "q4-b", selected: false },
        { choice: "c) [t1, t2, ..., tn]", radioValue: "q4-c", selected: false },
      ],
    },
  ];

  const [questions, setQuestions] = useState(data);
  const [total, setTotal] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const answers = ["q1-c", "q2-d", "q3-c", "q4-a"];

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
    fetch('./src/components/pages/components/TerminosComponent.html')
      .then(response => response.text())
      .then(data => setHtmlContent(data))
      .catch(error => console.error('Error fetching HTML:', error));
  }, []);

  return <div style={{ color: 'black', fontSize: '18px' }}>
    <h1>
      Términos
    </h1>
    <p>Los t&eacute;rminos en Prolog son la unidad b&aacute;sica de construcci&oacute;n utilizada para representar datos y expresiones en el programa. A su vez, los t&eacute;rminos pueden estar formados por &aacute;tomos, variables y estructuras.</p>
<ul>
<li><strong>&Aacute;tomo:</strong> En Prolog, un &aacute;tomo es un t&eacute;rmino que representa un nombre simb&oacute;lico o constante. Los &aacute;tomos son b&aacute;sicamente identificadores sin argumentos y pueden consistir en letras, d&iacute;gitos y subrayados. Los &aacute;tomos en Prolog deben empezar en min&uacute;scula. Por ejemplo, cebra o verde son &aacute;tomos.</li>
</ul>
<ul>
<li><strong>Literal:</strong> Es una expresi&oacute;n at&oacute;mica o compuesta que puede ser verdadera o falsa. Un literal puede ser un &aacute;tomo, un n&uacute;mero, una estructura compuesta o una variable. Por ejemplo, hombre(juan) es un literal donde "hombre" es un &aacute;tomo y "juan" es una constante.</li>
</ul>
<ul>
<li><strong>Variable: </strong>Las variables en Prolog deben empezar en may&uacute;scula o con&nbsp;<strong>&lsquo;_&rsquo;</strong>.</li>
</ul>
<p>&nbsp; &nbsp; &nbsp; &nbsp;Una&nbsp;<strong>variable an&oacute;nima</strong>&nbsp;se representa por el identificador&nbsp;<strong><em>&lsquo;_&rsquo;</em></strong>&nbsp;y se usa com&uacute;nmente cuando no necesitamos hacer referencia a esa variable espec&iacute;fica.</p>
<ul>
<li><strong>Estructura: </strong>Es la forma en que se definen t&eacute;rminos m&aacute;s complejos. Su sintaxis es la siguiente:</li>
</ul>
<p><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&aacute;tomo(t<sub>1</sub>, t<sub>2</sub>, ..., t<sub>n</sub>).</strong></p>
<p>Donde el &aacute;tomo recibe el nombre de <strong>functor</strong> y t<sub>1</sub>, t<sub>2, </sub>&hellip;, t<sub>n</sub> son a su vez t&eacute;rminos.</p>
<p>Por ejemplo, para la estructura persona(juan, 25, ingeniero), "persona" es el functor, y sus t&eacute;rminos son "juan", "25", y "ingeniero". Esta estructura podr&iacute;a representar informaci&oacute;n sobre una persona, donde "juan" es el nombre, "25" es la edad, y "ingeniero" es su profesi&oacute;n.</p>

<div dangerouslySetInnerHTML={{ __html: htmlContent }} />

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
