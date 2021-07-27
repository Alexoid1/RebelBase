import React from 'react';
import NavigationBar from './components/NavigationBar';
import ItemList from './components/ItemList';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <ItemList/>
    </div>
  );
}

export default App;
