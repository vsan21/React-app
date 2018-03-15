//importing React library
import React from 'react';
import './App.css';
import HelloWorldList from './HelloWorldList'

//create constant, App, and assign it to a function, which returns our JSX expression (tells React how to create components)
const App = () => {
  return (
    <div className="App">
      <HelloWorldList />
    </div>
  );
};

export default App;
