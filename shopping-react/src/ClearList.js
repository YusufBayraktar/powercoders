import React, {Component} from 'react';

class ClearList extends Component {
  render () {
    return (
      <button onClick={this.props.onClearList}>deleteAll</button>
    )
  }
}

export default ClearList;
