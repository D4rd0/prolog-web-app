import React, { useState, useRef } from 'react';

export const ClausulasEjercicioComponent = () => {

  const firstInputBox = useRef(null);
  const [showingAnswer, setShowingAnswer] = useState(false);

  const toggleAnswer = () => {
    if (showingAnswer) {
        firstInputBox.current.innerText = '';
        firstInputBox.current.classList.remove('correct');
    } else {
        firstInputBox.current.innerText = 'vuela';
        firstInputBox.current.classList.add('correct');
    }
    setShowingAnswer(!showingAnswer);
};

  const submitAnswer = () => {
      const firstBox = firstInputBox.current.innerText.trim();

      if (firstBox === 'vuela') {
          alert('Correcto');
          window.isCorrectClausulasEjercicio = 2; 
      } else {
          alert('Incorrecto');
          window.isCorrectClausulasEjercicio = 2; 
      }
  };

  return <div style={{ color: 'black', fontSize: '18px' }}>
      <div>
            <h1>Ejercicio</h1>
            <p>Completa el código que falta:</p>
            <div>
              <span>tiene(cuervo, plumas).</span>
            </div>
            <div>
              <span>vuela(cuervo).</span>
            </div>
            <div>
                <span>ave(X) :- tiene(X, plumas), </span>
                <span className="input-box" contentEditable="true" ref={firstInputBox}></span>
                <span>(cuervo).</span>
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

export default ClausulasEjercicioComponent;
