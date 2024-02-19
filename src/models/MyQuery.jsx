import React, { useState } from 'react';

export function MyQuery() {
  const [consulta, setConsulta] = useState<string>('');
  const [resultados, setResultados] = useState<string>('');

  const realizarConsulta = async () => {
    try {
      const response = await fetch('http://servidor-pengines:port', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: consulta }),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const resultado = await response.json();
      setResultados(resultado);
    } catch (error) {
      console.error('Error al realizar la consulta:', error);
    }
  };

  return { consulta, setConsulta, resultados, realizarConsulta };
}

export default MyQuery;