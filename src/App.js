import React,{ useState } from 'react';
import NavigationBar from './components/NavigationBar';
import ItemList from './components/ItemList';
import {FilterContext} from './contexts/FilterContext'
import './App.css';

function App() {
  const [alls,setAlls]=useState(false);
  const [selected,setSelected]=useState('');
  return (
    <div className="App">
       
      <FilterContext.Provider value={{alls,setAlls,selected,setSelected}}>
       
        <NavigationBar/>
        <ItemList/>
      </FilterContext.Provider>
    </div>
  );
}

export default App;
