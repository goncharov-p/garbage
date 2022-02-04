import Body from './Body';
import './App.scss';

// Создать компонент. 3 раза отобразить этот компонент, но передав разные дочерние элементы.

function App() {
 

  return (
    <div>
      <Body>
        <h1>Дочерний элемент 1</h1>
      </Body>
      <Body>
        <h1> Второй Дочерний элемент</h1>
      </Body>
      <Body>
        <h1>Третий</h1>
      </Body>
    </div>
  );
}

export default App;
