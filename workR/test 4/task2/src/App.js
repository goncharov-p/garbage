import { 
  Routes, 
  Route, 
  Link, 
  Navigate} from 'react-router-dom';
import Home from './Home';
import Post from './Post';

// Создать 3 компонента. В родительском компоненте создать 2 таба. переключая, которые меняется роут и дочерний компонент.



function App() {
  
  return (
    <div>
      <header>
     <ul>
       <Link to='/home'><li >Home</li> </Link> 
       <Link to='/post'><li >Post</li></Link>
     </ul>
      </header>
      <Routes>
        <Route path='/home/*' element={<Home/>} />
        <Route path='/post' element={<Post/>} />
      </Routes>
    </div>
    );

}

export default App;
