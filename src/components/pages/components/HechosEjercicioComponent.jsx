import React, { useState, useRef } from 'react';

export const ReglasEjercicioComponent = () => {
  const firstInputBox = useRef(null);
  const [showingAnswer, setShowingAnswer] = useState(false);

  const toggleAnswer = () => {
    if (showingAnswer) {
        firstInputBox.current.innerText = '';
        firstInputBox.current.classList.remove('correct');
    } else {
        firstInputBox.current.innerText = ';';
        firstInputBox.current.classList.add('correct');
    }
    setShowingAnswer(!showingAnswer);
  };

  const submitAnswer = () => {
    const firstBox = firstInputBox.current.innerText.trim();

    if (firstBox === ';') {
        alert('Correcto');
        window.isCorrectHechosEjercicio = 2;  // Actualiza el estado de respuesta correcta
    } else {
        alert('Incorrecto');
        window.isCorrectHechosEjercicio = 3;  // Actualiza el estado de respuesta incorrecta
    }
  };

  return <div style={{ color: 'black', fontSize: '18px' }}>
      <div>
        <h1>Ejercicio</h1>
        <p>Completa el código que falta:</p>
        <div>
          <span>tiene_mascota(X) :- humano(X), (tiene_gato(X)</span>
          <span className="input-box" contentEditable="true" ref={firstInputBox}></span>
          <span>tiene_perro(X)).</span>
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
