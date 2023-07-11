import logo from './logo.svg';
import './App.css';
import HeaderNav from './Components/Header/HeaderNav';
import Times from './Components/Times/Times';
import Create from './Components/Create/Create';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';

function App() {


  // const times = [
  //   {
  //     nome: 'Programação',
  //     corP: 'red',
  //     corS: 'blue'
  //   },
  //   {
  //     nome: 'Front-end',
  //     corP: 'red',
  //     corS: 'blue'
  //   },
  //   {
  //     nome: 'Data Science',
  //     corP: 'red',
  //     corS: 'blue'
  //   },
  //   {
  //     nome: 'DevOps',
  //     corP: 'red',
  //     corS: 'blue'
  //   },
  //   {
  //     nome: 'Mobile',
  //     corP: 'red',
  //     corS: 'blue'
  //   },
  //   {
  //     nome: 'P&D',
  //     corP: 'red',
  //     corS: 'blue'
  //   }
  // ]

  const times = [
    {
      nome: 'Programação',
      corP: '#82CFFA',
      corS: '#E8F8FF'
    },
    {
      nome: 'Front-end',
      corP: '#A6D157',
      corS: '#F0F8E2'
    },
    {
      nome: 'Data Science',
      corP: '#E06B69',
      corS: '#FDE7E8'
    },
    {
      nome: 'DevOps',
      corP: '#D86EBF',
      corS: '#FAE5F5'
    },
    {
      nome: 'Mobile',
      corP: '#FEBA05',
      corS: '#FFF5D9'
    },
    {
      nome: 'P&D',
      corP: '#FF8A29',
      corS: '#FFEEDF'
    }
  ]
  const [colaboradores, setColaboradores] = useState([])

  const cadastrarColaborador = (colaborador) =>  {

    console.log(colaborador)
  }
  
  

  return (
    <div className="App">
      <HeaderNav></HeaderNav>
      <Create times={times} aocadadstrar={colaborador => cadastrarColaborador(colaborador)}></Create>
      {times.map(time=><Times key={time.nome} time={time.nome} nome={time.nome} corP={time.corP} corS={time.corS}></Times>)} 
   
      
      <Footer></Footer>
    </div>
  );
}

export default App;
