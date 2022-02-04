import React from 'react';

function  ComponentTestTwo({func}) {
  return (
    <button onClick={()=> func('Текст кнопки второй')}>Кнопка #2</button>
    );
}
export default ComponentTestTwo;