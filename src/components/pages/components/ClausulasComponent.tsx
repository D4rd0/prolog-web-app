export const ClausulasComponent = () => {
  return <div style={{color:'black'}}>
    <h1>
      Cláusulas
    </h1>
    <span>
      Una cláusula es la unidad básica de construcción en un programa Prolog. Una cláusula puede 
      ser un hecho, una regla o una consulta, y su estructura está determinada por la sintaxis del 
      lenguaje.
    </span>
    <strong>
    <p>
      p :- p1, p2, …, pm.
    </p>
    </strong>
    <p>
      Donde p es la cabeza y todos los pi son el cuerpo.
    </p>
    <p>
      Tipos de cláusulas:
    </p>
    <p>
      •	Una cláusula con cabeza y sin cuerpo se llama <strong>hecho.</strong>
    </p>
    <p>
      •	Una cláusula con cabeza y con cuerpo se llama <strong>regla.</strong>
    </p>
    <p>
      •	Una cláusula sin cabeza y con cuerpo se llama <strong> consulta.</strong>
    </p>
    <p>
      Un ejemplo de cláusula es el siguiente:
    </p>
    <strong>
    <p>
      come(A,B) :-   carnivoro(A), animal(B), masDebil(B, A);
      herbivoro(A), plantaComestible(B).
    </p>
    </strong>
    <p>
      Esta cláusula reescrita al lenguaje natural se leería de la siguiente manera:
    </p>
    <p>
      "A come a B si, A es carnívoro y B es animal y B es más débil que A, o si A es 
      herbívoro y B es una planta comestible."
    </p>
  </div>;
};
