import logo from './logo.svg';
import './App.css';
import HeaderNav from './Components/Header/HeaderNav';
import Times from './Components/Times/Times';
import Create from './Components/Create/Create';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <HeaderNav></HeaderNav>
      <Create></Create>
      <Times time='Programação'></Times>
      <Footer></Footer>
    </div>
  );
}

export default App;
