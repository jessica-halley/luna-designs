import React from 'react'
import {connect} from 'react-redux'
import PrintListItem from './PrintListItem'

const printsList = (props) => (
  <div id='printList'>
    <p className="welcome">Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>
    {renderPrints(props.prints)}
  </div>
)

function renderPrints (printArray) {
  return printArray.map((print) => {
    return <PrintListItem key={print.id} print={print} />
  })
}

function mapState2Props(state) {
  {console.log(state.cart)}
  return {
    prints: state.prints
  }
}

export default connect(mapState2Props)(printsList)
