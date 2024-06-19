import React, { useEffect, useState } from 'react';

export const OperadoresComponent = () => {

  
  return <div style={{ color: 'black', fontSize: '18px' }}>
    <h1>
      Operadores
    </h1>
    <h2>
      Operadores aritméticos
    </h2>
<p>Los operadores aritm&eacute;ticos en Prolog son cruciales para realizar operaciones matem&aacute;ticas y comparar expresiones num&eacute;ricas dentro del c&oacute;digo. Permiten realizar sumas, restas, multiplicaciones, divisiones y otras operaciones b&aacute;sicas, as&iacute; como tambi&eacute;n comparar la igualdad o desigualdad entre expresiones num&eacute;ricas. Estos operadores son esenciales para el desarrollo de algoritmos y la manipulaci&oacute;n de datos en Prolog, ya que permiten realizar c&aacute;lculos y tomar decisiones basadas en valores num&eacute;ricos.</p>
<p>A continuaci&oacute;n, se muestran los operadores aritm&eacute;ticos m&aacute;s utilizados en Prolog:</p>
<table>
<tbody>
<tr>
<td width="288">
<p><strong>Operador</strong></p>
</td>
<td width="288">
<p><strong>Significado</strong></p>
</td>
</tr>
<tr>
<td width="288">
<p>+</p>
</td>
<td width="288">
<p>Suma</p>
</td>
</tr>
<tr>
<td width="288">
<p>-</p>
</td>
<td width="288">
<p>Resta</p>
</td>
</tr>
<tr>
<td width="288">
<p>*</p>
</td>
<td width="288">
<p>Multiplicaci&oacute;n</p>
</td>
</tr>
<tr>
<td width="288">
<p>/ y //</p>
</td>
<td width="288">
<p>Divisi&oacute;n real y Divisi&oacute;n entera</p>
</td>
</tr>
<tr>
<td width="288">
<p>^ y **</p>
</td>
<td width="288">
<p>Potencia</p>
</td>
</tr>
<tr>
<td width="288">
<p>mod</p>
</td>
<td width="288">
<p>Resto de la divisi&oacute;n (m&oacute;dulo)</p>
</td>
</tr>
</tbody>
</table>
<h2>
    Operadores relacionales
</h2>
<p>Los operadores relacionales en Prolog son esenciales para comparar t&eacute;rminos y establecer condiciones en las reglas y consultas a la base de conocimiento. Permiten realizar acciones como verificar la igualdad o desigualdad de t&eacute;rminos, as&iacute; como establecer relaciones de orden entre ellos. Estos operadores son fundamentales para la l&oacute;gica de programaci&oacute;n en Prolog, ya que permiten definir restricciones y condiciones que gu&iacute;an el comportamiento del programa.</p>
<p>A continuaci&oacute;n,&nbsp;se muestran los operadores relacionales m&aacute;s comunes en Prolog:</p>
<table>
<tbody>
<tr>
<td width="288">
<p><strong>Operador</strong></p>
</td>
<td width="288">
<p><strong>Significado</strong></p>
</td>
</tr>
<tr>
<td width="288">
<p>= , is</p>
</td>
<td width="288">
<p>Unificaci&oacute;n</p>
</td>
</tr>
<tr>
<td width="288">
<p>==</p>
</td>
<td width="288">
<p>Igualdad aritm&eacute;tica</p>
</td>
</tr>
<tr>
<td width="288">
<p>\==</p>
</td>
<td width="288">
<p>Desigualdad aritm&eacute;tica</p>
</td>
</tr>
<tr>
<td width="288">
<p>&lt;&nbsp;</p>
</td>
<td width="288">
<p>Menor que</p>
</td>
</tr>
<tr>
<td width="288">
<p>=&lt;</p>
</td>
<td width="288">
<p>Menor o igual que</p>
</td>
</tr>
<tr>
<td width="288">
<p>&gt;&nbsp;</p>
</td>
<td width="288">
<p>Mayor que</p>
</td>
</tr>
<tr>
<td width="288">
<p>&gt;=</p>
</td>
<td width="288">
<p>Mayor o igual que</p>
</td>
</tr>
</tbody>
</table>



  </div>;
};
