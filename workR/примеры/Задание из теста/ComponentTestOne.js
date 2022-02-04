import React from 'react';

function  ComponentTestOne({func}) {
   
  return (
    <button onClick={()=> func('Текст кнопки первой')}>Кнопка #1</button>
    );
}
export default ComponentTestOne;