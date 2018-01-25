import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends Component {
   render() {
      return (
         <div>
            <h1>Indecision</h1>
            <h2>Put your life in the hands of a computer</h2>
         </div>
      );
   }
}

class Action extends Component {
   render() {
      return (
         <div>
            <button>What should I do?</button>
         </div>
      )
   }
}

class Options extends Component {
   render() {
      return (
         <div>Options Component</div>
      )
   }
}

class AddOption extends Component {
   render() {
      return (
         <div>AddOption Component</div>
      )
   }
}

const jsx = (
   <div>
      <Header /> 
      <Action />
      <Options />
      <AddOption />
   </div>
);

ReactDOM.render(jsx, document.getElementById('root'));