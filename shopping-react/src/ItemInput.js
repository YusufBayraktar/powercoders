import React, {Component} from 'react';

class ItemInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: '',
      quantity: ''
    };

    this.onAddItem = this.onAddItem.bind(this);
    this.onItemChange = this.onItemChange.bind(this);
    this.onQuantityChange = this.onQuantityChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onItemChange(event) {
  	this.setState({item: event.target.value}, () => console.log(this.state));
  }

  onQuantityChange(event) {
  	this.setState({quantity: event.target.value}, () => console.log(this.state));
  }

  onAddItem() {
    this.props.onAddItem(this.state.item.trim(), this.state.quantity.trim());
    this.setState({item:'', quantity:''});
  }

  onKeyUp(event) {
    if (this.state.item.trim() === '') {
      return;
    }
    if (event.key !== 'Enter') {
      return;
    }

    this.onAddItem()
  }

  render () {
    return (
      <div>
        <label htmlFor="item">Enter a new item:</label>
        <input onChange={this.onQuantityChange}
               onKeyUp={this.onKeyUp}
               value={this.state.quantity}
               type="text" id="quantity"
               placeholder="howmuchdoyouReallywant"/>
        <input onChange={this.onItemChange}
               onKeyUp={this.onKeyUp}
               value={this.state.item}
               type="text" id="item"
               placeholder="whatdoyouReallywant"/>
        <button onClick={this.onAddItem}
                disabled={this.state.item.trim() === ''}
                id="add">addanItem</button>
      </div>
    );
  }
}

export default ItemInput;
