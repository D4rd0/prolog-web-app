import React, { useState, useRef } from 'react';

export const HechosEjercicioComponent = () => {
  const firstInputBox = useRef(null);
  const [showingAnswer, setShowingAnswer] = useState(false);

  const toggleAnswer = () => {
    if (showingAnswer) {
        firstInputBox.current.innerText = '';
        firstInputBox.current.classList.remove('correct');
    } else {
        firstInputBox.current.innerText = 'Legusta(pepe,cantar).';
        firstInputBox.current.classList.add('correct');
    }
    setShowingAnswer(!showingAnswer);
};

  const submitAnswer = () => {
      const firstBox = firstInputBox.current.innerText.trim();

      if (firstBox === 'Legusta(pepe,cantar).') {
          alert('Correcto');
          window.isCorrectHechosEjercicio = 2; 
      } else {
          alert('Incorrecto');
          window.isCorrectHechosEjercicio = 3; 
      }
  };

  return <div style={{ color: 'black', fontSize: '18px' }}>
      <div>
            <h1>Ejercicio</h1>
            <p>Dado el siguiente programa:</p>
            <div>
              <span>Legusta(pepe,cantar).</span>
            </div>
            <div>
              <span>legusta(maria,bailar).</span>
            </div>
            <div>
              <span>legusta(ana,pescar).</span>
            </div>
            <p>¿Qué hecho del programa anterior no es sintácticamente correcto?</p>
            <div>
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

export default HechosEjercicioComponent;
