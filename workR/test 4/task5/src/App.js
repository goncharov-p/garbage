import { 
  Routes, 
  Route, 
  Link, 
  Navigate} from 'react-router-dom';
import Comedy from './Comedy';
import Horror from './Horror';


// Создать 3 компонента. В родительском отображаются жанры фильмов.При клике на жанр в родительском отображается 
// дочерний элемент соответствующий выбранному. В этом компоненте отображается выбор года для фильма. 
// При каждом выборе меняется роут приложения по виду: “:3000/serial/2010”



function App() {
  
  return (
    <div>
      <header>
     <ul>
       <Link to='/Comedy'><li >Comedy</li> </Link> 
       <Link to='/Horror'><li >Horror</li></Link>

     </ul>
      </header>
      <Routes>
        <Route path='/Comedy/*' element={<Comedy/>} />
        <Route path='/Horror' element={<Horror/>} />
      </Routes>
    </div>
    );

}

export default App;
