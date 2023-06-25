import logo from './logo.svg';
import './App.css';
import HeaderNav from './Components/Header/HeaderNav';
import Times from './Components/Times/Times';
import Create from './Components/Create/Create';

function App() {
  return (
    <div className="App">
      <HeaderNav></HeaderNav>
      <Create></Create>
      <Times time='Programação'></Times>
    </div>
  );
}

export default App;
