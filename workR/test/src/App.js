import logo from './logo.svg';
import Test from './Test';
import Company from './Company';
import './App.scss';

function App() {
  const flag = true;
  const propsComp = {
    name: "test1",
    logo: flag
  };

  const companies = [
    {
      name:'Test1',
      owner:'Ivan ivanov'
    },
    {
      name:'Test1',
      owner:'Petr ivanov'
    },
    {
      name:'Test1',
      owner:'Petr Petrov'
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Test {...propsComp}/>
      {
        companies.map((value,index) =>  <Company key = {`company-${index}`} company = {value}/>)
      }
     
    </div>
  );
}

export default App;
