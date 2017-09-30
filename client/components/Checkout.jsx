import React from 'react'
import {connect} from 'react-redux'
import {postContactForm} from '../actions/contactForm'
import {getCards} from '../actions/getCards'

const renderCard = (card, key) => (
  <div key={key}>
    <div className="col-md-1"></div>
    <div className="prints-box col col-md-5">
      <figure>
        <div className="icontainer">
        <img src={card.image} className="card-image"/>
        </div>
        <figcaption>
          <h2>{card.name}</h2>
        </figcaption>
      </figure>
  </div>
</div>
)

class SamsCheckout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      form: {},
      submitted: false,
      message: '',
      errorMessage: '',
    }
  }

  updateFormDetails (e) {
    let form = this.state.form
    form[e.target.name] = e.target.value
    this.setState({form})
  }
  validateForm (form) {
    return form.name && form.email && form.comments
  }
  submitForm (e) {
    e.preventDefault()
    if (this.validateForm(this.state.form)) postContactForm(this.state.form, this.callbackResponse.bind(this))
    else this.setState({errorMessage: '* Please fill in all fields'})
  }
  callbackResponse (err, message) {
    if (err) this.setState({errorMessage: message || err.message})
    else this.setState({message, submitted: true, errorMessage: ''})
  }
  renderMessage () {
    return <p className='contact-submit-message'>{this.state.message}</p>
  }
  renderForm () {
    return (
      <form className='contact-form' onSubmit={(e) => this.submitForm(e)}>
        <h4 className='contact-us'>Place your order</h4>
        <hr className='orange-hr' />
        <div className="col col-sm-6">

        <h5 className='contact-us'>Prints</h5>


        <label className="labelone" htmlFor="beePrint">
          Bee Print :
          <input className="quantityBox" name="beePrint" type="number" placeholder="0" onChange={(e) => this.updateFormDetails(e)}/>
        </label>

        <input className="quantityBox" name="cactusPrint" type="number" onChange={(e) => this.updateFormDetails(e)}/>
        <label className="labelone" htmlFor="cactusPrint">Cactus Print</label>

        <input className="quantityBox" name="crayfishPrint" type="number" onChange={(e) => this.updateFormDetails(e)}/>
        <label className="labelone" htmlFor="crayfishPrint">Crayfish Print</label>

        <input className="quantityBox" name="friendsPrint" type="number" onChange={(e) => this.updateFormDetails(e)}/>
        <label className="labelone" htmlFor="friendsPrint">Friends Are Like Stars Print</label>

        <input className="quantityBox" name="heartPrint" type="number" onChange={(e) => this.updateFormDetails(e)}/>
        <label className="labelone" htmlFor="heartPrint">Heart Print</label>

        <input className="quantityBox" name="mountainPrint" type="number" onChange={(e) => this.updateFormDetails(e)}/>
        <label className="labelone" htmlFor="mountainPrint">Move Mountains Print</label>

        <h5 className='contact-us'>Cards</h5>

        <input className="quantityBox" name="cupcakeCard" type="number" onChange={(e) => this.updateFormDetails(e)}/>
        <label className="labelone" htmlFor="cupcakeCard">Cupcake Card</label>

        <input className="quantityBox" name="cactusCard" type="number" onChange={(e) => this.updateFormDetails(e)}/>
        <label className="labelone" htmlFor="cactusCard">Cactus Card</label>

        <input className="quantityBox" name="heartCard" type="number" onChange={(e) => this.updateFormDetails(e)}/>
        <label className="labelone" htmlFor="heartCard">Heart Card</label>

        <input className="quantityBox" name="birthdayCard" type="number" onChange={(e) => this.updateFormDetails(e)}/>
        <label className="labelone" htmlFor="birthdayCard">Happy Birthday Card</label>

        </div>
        <div className="col col-sm-6">
        <fieldset>

          <label className="labelone" htmlFor="name">Name: </label>
          <input name="name" onChange={(e) => this.updateFormDetails(e)}/>
          <label className="labelone" htmlFor="email">Email: </label>

          <input name="email" onChange={(e) => this.updateFormDetails(e)} />
          <label className="labelone" htmlFor="comments">Comments: </label>
          <textarea name="comments" onChange={(e) => this.updateFormDetails(e)}></textarea>
        </fieldset>
        </div>
        <div className="send">
          <p className="contact-error-message">{this.state.errorMessage}</p>
          <button className="btn" type="submit" >Send Message</button><br/>
          <button className="btn" type="reset">Reset form</button>
        </div>
      </form>
    )
  }
  render () {
    return (
      <div className = 'wallpaper-no-border'>
        <div className='container contact'>
          {this.state.submitted
            ? this.renderMessage()
            : this.renderForm()
          }
        </div>
      </div>
    )
  }
}

export default connect()(SamsCheckout)
