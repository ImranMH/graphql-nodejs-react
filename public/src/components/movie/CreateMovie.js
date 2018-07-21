import React, { Component } from 'react'
import InputField from './../reusuable/InputField'
import SelectField from './../reusuable/SelectField'
import Form from './../reusuable/Form'
export default class CreateMovie extends Component {
  state ={
    newMovie:{
      name:'',
      year: null,
      rating: null,
      country: '',
    }
  }
  submit = (e)=>{
    e.preventDefault()
    console.log(this.state);
  }
  handleChange = (event) =>{
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ newMovie:{
      [name]: value
    } });
  }
  render() {
    const data = [1,2,3,4,5,6,7,8,9,10]
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3">Movie Detail</h4>
              <Form onSubmit={this.submit}>
                <div className="mb-3">
                <InputField name="Addres" onChange={this.handleChange} value={this.state.newMovie.name} placeholder="Movie name" />
                </div>
                <div className=" mb-3">
                <InputField name="year" onChange={this.handleChange} value={this.state.newMovie.year} placeholder="2003" />
                </div>
                <div className="col-md-3 mb-3">
                  <input type="submit" value="send" />
                </div>
              </Form>
            </div>
          </div>
        </div>
    )
  }
}


{/* 





   <div className="container">
          <div className="row">
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3">Movie Detail</h4>
              <form className="needs-validation" noValidate>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <InputField name="first" placeholder="Imran" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <InputField name="last" placeholder="Hossain" />
                  </div>
                </div>
                <div className="mb-3">
                  <InputField name="year" placeholder="2019" />
                </div>


                <div className="mb-3">
                  <label htmlFor="username">Username</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input type="text" className="form-control" id="username" placeholder="Username" required />
                    <div className="invalid-feedback" >
                      Your username is required.
                      </div>
                  </div>
                </div>

                <div className="mb-3">
                  <InputField name="Email" placeholder="exm@email.com" />
                </div>

                <div className="mb-3">
                  <InputField name="Addres" placeholder="133 Bonosree main Road" />
                </div>

                <div className="mb-3">
                  <InputField name="Addres 2" placeholder="Mirpur" />
                </div>
                <div className="row">
                  <div className="col-md-5 mb-3">
                    <SelectField name="Country" optVal={data} />
                  </div>
                  <div className="col-md-4 mb-3">
                    <SelectField name="Rating" optVal={data} />
                  </div>
                  <div className="col-md-4 mb-3">
                    <SelectField name="State" optVal={data} />
                  </div>
                  <div className="col-md-3 mb-3">
                    <InputField name="Zip" placeholder="1903" />
                  </div>
                </div>
                <hr className="mb-4" />
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="same-address" />
                  <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="save-info" />
                  <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
                </div>
                <hr className="mb-4" />
              </form>
            </div>
            <div className="col-md-8 order-md-1">
            <Form  onSubmit={this.submit}>
              <div className="mb-3">
                <InputField name="Addres" placeholder="133 Bonosree main Road" />
              </div>
              <div className=" mb-3">
                <InputField name="Zip" placeholder="1903" />
              </div>
              <div className="col-md-3 mb-3">
                <input type="submit" value= "send" />
              </div>
              </Form>
            </div>
          </div>
        </div>


  
  <h4 class="mb-3">Payment</h4>

  <div class="d-block my-3">
    <div class="custom-control custom-radio">
      <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required />
      <label class="custom-control-label" htmlFor="credit">Credit card</label>
    </div>
    <div class="custom-control custom-radio">
      <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required />
      <label class="custom-control-label" htmlFor="debit">Debit card</label>
    </div>
    <div class="custom-control custom-radio">
      <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required />
      <label class="custom-control-label" htmlFor="paypal">PayPal</label>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 mb-3">
      <label htmlFor="cc-name">Name on card</label>
      <input type="text" class="form-control" id="cc-name" placeholder="" required />
      <small class="text-muted">Full name as displayed on card</small>
      <div class="invalid-feedback">
        Name on card is required
                </div>
    </div>
    <div class="col-md-6 mb-3">
      <label htmlFor="cc-number">Credit card number</label>
      <input type="text" class="form-control" id="cc-number" placeholder="" required />
      <div class="invalid-feedback">
        Credit card number is required
                </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-3 mb-3">
      <label htmlFor="cc-expiration">Expiration</label>
      <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
      <div class="invalid-feedback">
        Expiration date required
                </div>
    </div>
    <div class="col-md-3 mb-3">
      <label htmlFor="cc-cvv">CVV</label>
      <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
      <div class="invalid-feedback">
        Security code required
                </div>
    </div>
  </div>
  <hr class="mb-4" />
  <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button> */}