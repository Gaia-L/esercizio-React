import './App.css';
import Orologio from './Orologio';
import TabellaUtenti from './TabellaDatiUtenti';
import ComponentUtente from './Utente';
import studenti from './studenti.json';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() { 
  return (
    <>
    <div className="App">
      <h1>Benvenuti!!</h1>
      <Orologio country="Italia"/>
      <br/>
      <ComponentUtente nome="Gaia" cognome="Lanza" sesso="F"/> 
      <br/>
      <TabellaUtenti listaDati= {studenti}/>
      </div>
    </>
  );
}

export default App;