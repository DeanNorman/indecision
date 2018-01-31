import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class IndecisionApp extends Component {
   constructor(props){
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this)
      this.state = {
         options: [],
      }
   }

   handleDeleteOptions() {
      this.setState(() => {
         return {
            options: [],
         }
      })
   }

   handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
   }

   handleAddOption(option){
      if (!option) {
         return 'Enter a value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
         return 'This options already exists'
      }

      this.setState((prevState) => {
         return {
            options: prevState.options.concat([option])
         };
      });  
   }

   render() {
      const title = 'Indecision App';
      const subTitle = 'Put your life in the hands of a computer';

      return (
         <div>
            <Header title={title} subTitle={subTitle} />
            <Action
               hasOptions={this.state.options.length > 0}
               handlePick={this.handlePick}
            />
            <Options
               options={this.state.options}
               deleteOptions={this.handleDeleteOptions}
               
            />
            <AddOption
               handleAddOption={this.handleAddOption} />
         </div>
      );
   }
}

const Header = (props) => {
   return (
      <div>
         <h1>{props.title}</h1>
         <h2>{props.subTitle}</h2>
      </div>
   )
}

const Action = (props) => {
   return (
      <div>
         <button
            disabled={!props.hasOptions}
            onClick={props.handlePick}
         >What should I do?</button>
      </div>
   )
}

const Options = (props) => {
   return (
      <div>
         <button onClick={props.deleteOptions}>Remove Options</button>
         {
            props.options.map((option) => <Option key={option} optionText={option} />)
         }
      </div>
   )
}

const Option = (props) => {
   return (
      <div>{props.optionText}</div>
   );
}

class AddOption extends Component {
   constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
         error: ''
      }
   }
   handleAddOption(e) {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);
      this.setState(() => {
         return {
            error
         }
      })
   }
   render() {
      return (
         <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
               <input type="text" name="option" />
               <button>Submit</button>
            </form>
         </div>
      )
   }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));