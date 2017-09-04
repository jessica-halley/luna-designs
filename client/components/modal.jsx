import React, {Component}  from 'react'
import {modal} from 'react-redux-modal'
import {connect} from 'react-redux'

class myModalComponent extends Component {
  constructor(props) {
    super(props);
    console.log('## MODAL DATA AND PROPS:', this.props);
  }

  removeThisModal() {
    this.props.removeModal();
  }

  render() {
    return (
      <div>
        <p>Quantity</p>
        <input type="number" value="1"/>
          <button>
            Go to Checkout
          </button>
        <button
          type="button"
          onClick={this.removeThisModal.bind(this)}>
          Continue Shopping
        </button>
      </div>
    );
  }
}

export default connect()(myModalComponent)
