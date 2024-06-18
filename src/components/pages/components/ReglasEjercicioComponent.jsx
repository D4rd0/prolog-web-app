import React, { useState, useRef } from 'react';

export const ReglasEjercicioComponent = () => {
  const firstInputBox = useRef(null);
  const [showingAnswer, setShowingAnswer] = useState(false);

  const toggleAnswer = () => {
    if (showingAnswer) {
        firstInputBox.current.innerText = '';
        firstInputBox.current.classList.remove('correct');
    } else {
        firstInputBox.current.innerText = 'fact(Z,V)';
        firstInputBox.current.classList.add('correct');
    }
    setShowingAnswer(!showingAnswer);
  };

  const submitAnswer = () => {
    const firstBox = firstInputBox.current.innerText.trim();

    if (firstBox === 'fact(Z,V)') {
        alert('Correcto');
        window.isCorrectReglasEjercicio = 2;  // Actualiza el estado de respuesta correcta
    } else {
        alert('Incorrecto');
        window.isCorrectReglasEjercicio = 3;  // Actualiza el estado de respuesta incorrecta
    }
  };

  return <div style={{ color: 'black', fontSize: '18px' }}>
      <div>
        <h1>Ejercicio</h1>
        <p>Completar el siguiente programa Prolog para calcular el factorial de un número:</p>
        <div>
          <div>
          <span>fact(1,1).</span>
          </div>
          <span>fact(X,Y) :- Z is X-1, </span>
          <span className="input-box" contentEditable="true" ref={firstInputBox}></span>
          <span>, Y is X*V.</span>
        </div>
        <div className="button">
          <button
            style={{
              backgroundColor: '#3498db',
              color: 'white',
              border: '1px solid #000000',
              fontSize: '16px',
              height: '45px',
              margin: '30px 30px 0 0',
              cursor: 'pointer',
            }}
            onClick={submitAnswer}
          >
            Enviar respuesta
          </button>
          <button
            style={{
              backgroundColor: '#3498db',
              color: 'white',
              border: '1px solid #000000',
              fontSize: '16px',
              height: '45px',
              margin: '30px 0 0 0',
              cursor: 'pointer',
            }}
            onClick={toggleAnswer}
          >
            {showingAnswer ? 'Ocultar respuesta' : 'Mostrar respuesta'}
          </button>
        </div>
      </div>
    </div>
};

export default ReglasEjercicioComponent;
