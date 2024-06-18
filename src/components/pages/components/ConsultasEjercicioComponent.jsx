import React, { useState, useRef } from 'react';

export const ConsultasEjercicioComponent = () => {

  const firstInputBox = useRef(null);
  const [showingAnswer, setShowingAnswer] = useState(false);

  const toggleAnswer = () => {
    if (showingAnswer) {
        firstInputBox.current.innerText = '';
        firstInputBox.current.classList.remove('correct');
    } else {
        firstInputBox.current.innerText = 'a';
        firstInputBox.current.classList.add('correct');
    }
    setShowingAnswer(!showingAnswer);
};

  const submitAnswer = () => {
      const firstBox = firstInputBox.current.innerText.trim();

      if (firstBox === 'a') {
          alert('Correcto');
          window.isCorrectConsultasEjercicio = 2; 
      } else {
          alert('Incorrecto');
          window.isCorrectConsultasEjercicio = 3; 
      }
  };

  return <div style={{ color: 'black', fontSize: '18px' }}>
      <div>
      <h1>Ejercicio</h1>
            <p>Dado el siguiente programa lógico:</p>
            <div>
              <span>p(X):- s(X),r(X).</span>
            </div>
            <div>
              <span>s(a).</span>
            </div>
            <div>
              <span>s(x).</span>
            </div>
            <div>
              <span>r(a).</span>
            </div>
            <div>
              <span>r(b).</span>
            </div>
            <div>
              <span>r(c).</span>
            </div>
            <p>¿Cuáles son TODAS las respuestas computadas para el objetivo <b>?- p(X).</b> usando la estrategia de búsqueda predefinida de Prolog?</p>
            <div>
                <span>X = </span>
                <span className="input-box" contentEditable="true" ref={firstInputBox}></span>
            </div>


            <div className="button">
            <button             style={{
              backgroundColor: '#3498db',
              color: 'white',
              border: '1px solid #000000',
              fontSize: '16px',
              height: '45px',
              margin: '30px 30px 0 0',
              cursor: 'pointer',
            }}onClick={submitAnswer}>Enviar respuesta</button>
              <button             style={{
              backgroundColor: '#3498db',
              color: 'white',
              border: '1px solid #000000',
              fontSize: '16px',
              height: '45px',
              margin: '30px 0 0 0',
              cursor: 'pointer',
            }}onClick={toggleAnswer}>{showingAnswer ? 'Ocultar respuesta' : 'Mostrar respuesta'}</button>

            </div>
        </div>
    </div>
};

export default ConsultasEjercicioComponent;
