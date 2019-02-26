import React, { Component } from 'react';
import './App.css';
import ItemInput from './ItemInput';
import ClearList from './ClearList';
import ShoppingList from './ShoppingList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.onAddItem = this.onAddItem.bind(this);
  }

  onAddItem (name, quantity) {
    let item = name;
    if (quantity !== '') {
      item = item + `(${quantity})`;
    }
    //this.setState({items: [...this.state.items, item]});
    this.setState((prevState) => ({items: prevState.items.concat(item)}));
  }

  render() {
    return (
      <div>
        <ItemInput onAddItem={this.onAddItem}/>
        <ClearList/>
        <ShoppingList items={this.state.items}/>
      </div>

      //<div className="App">
        //<div className="App-header">
          //<img src={logo} className="App-logo" alt="logo" />
          //<h2>Welcome to React</h2>
        //</div>
        //<p className="App-intro">
          //To get started, edit <code>src/App.js</code> and save to reload.
        //</p>
      //</div>
    );
  }
}

export default App;
