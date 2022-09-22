import HelloWorld from './components/HelloWorld'
import HelloWordlClass from './components/HelloWordlClass'
import HelloPeople from './components/HelloPeople'
import Calculator from './components/Calculator';
import HelloPerson from './components/HelloPerson';
import HelloCalc from './components/HelloCalc';
//função que agrupa todos os componentes que serão renderizados
function App() {

  let a = 44
  let b = 99

  let person = {
    name: 'Hannah',
    surname: 'Góes'
  }

  //Retorno da função
  return (

    <div className="App">
      {/*Chamando o componente importado*/}
      <HelloWorld/>

      <HelloWordlClass/>

      <HelloPeople name="Hannah" age={24} />

      <Calculator n1={a} n2 ={b}/>

      <HelloPerson person = {person}/>
      
      <HelloCalc/>
    </div>
  );
}

//Exportar o componente App para ser renderizado
export default App;
