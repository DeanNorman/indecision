import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class IndecisionApp extends Component {
   render() {
      const title = 'Indecision App';
      const subTitle = 'Put your life in the hands of a computer';
      const options = ['Option 1', 'Option 2', 'Option 3'];

      return (
         <div>
            <Header title={title} subTitle={subTitle} />
            <Action />
            <Options options={options} />
            <AddOption />
         </div>
      );
   }
}

class Header extends Component {
   render() {
      return (
         <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subTitle}</h2>
         </div>
      );
   }
}

class Action extends Component {
   handleClick() {
      console.log('clicked');
   }

   render() {
      return (
         <div>
            <button onClick={this.handleClick}>What should I do?</button>

         </div>
      )
   }
}

class Options extends Component {
   constructor(props) {
      super(props);
      this.handleRemoveAll = this.handleRemoveAll.bind(this);
   }

   handleRemoveAll() {
      console.log('remove options');
   }

   render() {
      return (
         <div>
            <button onClick={this.handleRemoveAll}>Remove Options</button>
            {
               this.props.options.map((option) => <Option key={option} optionText={option} />)
            }
         </div>
      )
   }
}

class Option extends Component {
   render() {
      return (
         <div>{this.props.optionText}</div>
      )
   }
}

class AddOption extends Component {
   onFormSubmit(e) {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();

      if (option) {
         alert(option);
      }
   }
   render() {
      return (
         <form onSubmit={this.onFormSubmit}>
            <input type="text" name="option" />
            <button>Submit</button>
         </form>
      )
   }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));