import React from 'react';
import TimerComponent from './Componentes/TimerComponent';
import ConvertirDate from './Componentes/ConvertirDate';
import './App.css';
import ClassComponent from './Componentes/ConvertirDate';
import FunctionalComponent from './Componentes/TimerComponent';
function App() {

  
  return (
    <div className="App">
      <header className="App-header">

        <TimerComponent/>
        <ClassComponent/>
      
      </header>
    </div>
  );
}

export default App;
