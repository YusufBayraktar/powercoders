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
    this.onClearList = this.onClearList.bind(this);
    this.onClearItem = this.onClearItem.bind(this);
  }

  onAddItem (name, quantity) {
    let item = name;
    if (quantity !== '') {
      item = item + ` (${quantity})`;
    }
    //this.setState({items: [...this.state.items, item]});
    this.setState((prevState) => ({items: prevState.items.concat(item)}));
  }

  onClearList () {
    this.setState({items: []});
  }

  onClearItem (index) {
    this.setState((prevState) => {
      prevState.items.splice(index, 1);
      return {items: prevState.items};
    });
  }

  render() {
    return (
      <div>
        <ItemInput onAddItem={this.onAddItem}/>
        <ClearList onClearList={this.onClearList}
                    disabled={this.state.items.length === 0}/>
        <ShoppingList items={this.state.items}
                      onClearItem={this.onClearItem}/>
      </div>
    );
  }
}

export default App;
