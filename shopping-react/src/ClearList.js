import React, {Component} from 'react';

class ClearList extends Component {
  render () {
    return (
      <button disabled={this.props.disabled}
              onClick={this.props.onClearList}>deleteAll</button>
    )
  }
}

export default ClearList;
