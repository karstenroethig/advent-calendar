import React from 'react';
import './App.css';
import Calendar from './components/Calendar';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Calendar />
      </div>
    );
  }
}

export default App;
