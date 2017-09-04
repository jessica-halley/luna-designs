import React, {Component}  from 'react'
import {modal} from 'react-redux-modal'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import myModalComponent from './modal'

export class YourComponent extends React.Component {
  componentDidMount () {

  }

  addModal() {
    modal.add(myModalComponent, {
      title: 'This is my modal',
      size: 'medium', // large, medium or small,
      closeOnOutsideClick: false, // (optional) Switch to true if you want to close the modal by clicking outside of it,
      hideTitleBar: false, // (optional) Switch to true if do not want the default title bar and close button,
      hideCloseButton: false // (optional) if you don't wanna show the top right close button
      //.. all what you put in here you will get access in the modal props ;)
    });
  }

  render() {
    return <button onClick={this.addModal.bind(this)}>Add modal</button>;
  }
}

const mapStateToProps = (state) => {
  return {YourComponent: state.YourComponent}
}

export default connect(mapStateToProps)(YourComponent)
