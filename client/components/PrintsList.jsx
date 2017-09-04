import React from 'react'
import {connect} from 'react-redux'
import {modal} from 'react-redux-modal'
import {Link} from 'react-router-dom'
import {getPrints} from '../actions/getPrints'
import myModalComponent from './modal'

function addModal(printKey, printName) {
  modal.add(myModalComponent, {
    title: printName.toString(),
    size: 'medium', // large, medium or small,
    closeOnOutsideClick: false, // (optional) Switch to true if you want to close the modal by clicking outside of it,
    hideTitleBar: false, // (optional) Switch to true if do not want the default title bar and close button,
    hideCloseButton: false // (optional) if you don't wanna show the top right close button
    //.. all what you put in here you will get access in the modal props ;)
  });
}

const renderPrint = (print, key) => (
  <div key={key}>
    <div className="col-md-1"></div>
    <div className="prints-box col col-md-5">
      <figure>
        <div className="icontainer">
          <img src={print.image} className="print-image"/>
        </div>
        <figcaption>
          <h2>{print.name}</h2>
          <button onClick={addModal.bind(this, print.id, print.name)}>Add to Cart</button>
        </figcaption>
      </figure>
    </div>
  </div>
)

class Prints extends React.Component {
  componentDidMount () {
    console.log('component mounting (prints)');
    this.props.dispatch(getPrints())
  }

  render () {
    const {prints} = this.props
    console.log('rendering prints');
    return (
      <div className='wallpaper-no-border'>
          <div className="category-list-header"></div>
            {prints.map((print, key) => renderPrint(print, key))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {prints: state.prints}
}

export default connect(mapStateToProps)(Prints)
