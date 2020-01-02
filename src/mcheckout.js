import React, { Component } from "react";
import firebase, { auth, provider,config } from './firebase';
import { PayPalButton } from "react-paypal-button-v2";
let valid="FB15"
export default class Mcheckout extends React.Component {

    constructor() {
      super();
      if (!firebase.apps.length) {
             firebase.initializeApp(config);
         }
      this.state = {
        //graduation details
        
        billfirst:"",
        billsecond:"",
        billemail:"",
        billaddress:"",
        billaddress2:"",
        billcountry:"",
        billcity:"",
        billstate:"",
        billzip:"",
        shipfirst:"",
        shipsecond:"",
        shipemail:"",
        shipaddress:"",
        shipaddress2:"",
        shipcountry:"",
        shipstate:"",
        shipzip:"",
        shipcity:'',     
        checked:true,
        user:null,
        promo:"",
        applied:false
        // formErrors: {email: '', password: ''},
        // emailValid: false,
        // passwordValid: false,
        // formValid: false
      };
    //   this.handleChange = this.handleChange.bind(this);
    //   this.changeAmount = this.changeAmount.bind(this);
    //   this.openCheckout = this.openCheckout.bind(this);
    //   this._onSelect = this._onSelect.bind(this);
    //   this.handleValidation=this.handleValidation.bind(this);
    //   this.logout=this.logout.bind(this);
    this.submit = this.submit.bind(this);
    }
    componentWillMount()
    {

    }
    
  
    componentDidMount() {
      const script = document.createElement("script");
  
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
  
      document.body.appendChild(script);
    console.log(this.props,"here")
  
    }
    handleCheckboxChange = (event) =>
    {
    this.setState({ checked: event.target.checked })
    console.log(this.state)
    

    }
    handleChange =(evt)=> {
      let name=evt.target.name
      let value=evt.target.value 
      // check it out: we get the evt.target.name (which will be either "email" or "password")
      // and use it to target the key on our `state` object with the same name, using bracket syntax
      this.setState({ [evt.target.name]: evt.target.value })//,() => { this.validateField(name, value) });
      console.log( evt.target.name, evt.target.value )
    }
    checkout()
    { let that =this
            let options = {
        key: "rzp_live_fpKwEBZyWkAT2D",
        amount: 29400, // 2000 paise = INR 20, amount in paisa
        name: "EatDesi",
        currency: "USD",
        description: "MiniIndia Box",
        image:require( "./images/logo1.png"),
        handler: function(response) {
          alert("You have sucessfully registered for JAT"+response.razorpay_payment_id);
       //   {this.state&&rootRef.child(`/users/${this.state.user.uid}`).update({basic:data,paid:"Yes",payment_id:response.razorpay_payment_id})}
       that.submit()
        },
       
        theme: {
          color: "#F37254"
        }
      };
    
      let rzp = new window.Razorpay(options);
      rzp.open();
    }
    error(e)
    {
      console.log(e,"error")
     // e.preventDefault()
      this.props.history.push('error')
    }
    submit(details)
    { 
      let data=this.state
      console.log(data)
      firebase.database().ref('EatDesiUser/').push({data}).then((data)=>{
        //success callback
        console.log('data ' , data)
      
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
    this.props.history.push("/sucess",{details:details});
    }
   
    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;
      console.log(fieldName,value)
      switch(fieldName) {
       
        case 'billemail':
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? '' : ' is invalid';
          console.log(fieldValidationErrors.email,"here")
          break; 
        case 'password':
          passwordValid = value.length >= 6;
          fieldValidationErrors.password = passwordValid ? '': ' is too short';
          break;
        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
                      emailValid: emailValid,
                      passwordValid: passwordValid
                    }, this.validateForm);
    }
  
    validateForm() {
      this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }
  redeem()
  { 
    if(!this.state.applied)
    {
    if (this.state.promo.toUpperCase===valid.toUpperCase)
    {
      alert("Coupon Code  Applied")
      this.setState({applied:true,promo:""})

    }
  }
  else{
    alert("Coupon Code already used")
  }
  }
    errorClass(error) {
      return(error.length === 0 ? '' : 'has-error');
    }
    render() {
        return( <div>
            {/* Required meta tags */}
            
            {/* PRELOADER */}
            <div id="loader-wrapper">
              <div id="loader" />
              <div className="loader-section section-left" />
              <div className="loader-section section-right" />
            </div>
            {/* HEADER with nav and slider */}
           
              {/* navigation */}
          
              <form className="mt-5 pt-4">
                <div className="container wow fadeIn">
                <div className="col-md-4 mb-4">
                      {/* Heading */}
                      <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                        {/* <span className="badge badge-secondary badge-pill">3</span> */}
                      </h4>
                      {/* Cart */}
                      <ul className="list-group mb-3 z-depth-1">
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <img src='images/snack_box.jpg' alt="Mini India Box"/>
                          </div>
                          <div>
                            <h6 className="my-0">Mini India Box</h6>
                            <small className="text-muted">Box for people with strong tastes</small>
                          </div>
                          <span className="text-muted">${this.props.location.state.price}</span>
                        </li>
                      
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                          <div>
                            <h6 className="my-0">Shipping Charges</h6>
                            {/* <small className="text-muted">Brief description</small> */}
                          </div>
                          <span className="text-muted">$0</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                          <div>
                            <h6 className="my-0">Taxes</h6>
                            {/* <small className="text-muted">Brief description</small> */}
                          </div>
                          <span className="text-muted">$0</span>
                        </li>
                        {/* <li className="list-group-item d-flex justify-content-between bg-light">
                          <div className="text-success">
                            <h6 className="my-0">Promo code</h6>
                            <small>End of Reason </small>
                          </div>
                          <span className="text-success">-$5</span>
                        </li> */}
                        {this.state.applied &&
                        <li className="list-group-item d-flex justify-content-between bg-light">
                          <div className="text-success">
                            <h6 className="my-0">Promo code</h6>
                            <small>FB5 </small>
                          </div>
                          <span className="text-success">-$5</span>
                        </li>
                        }
                        {this.state.applied?
                          <li className="list-group-item d-flex justify-content-between">
                          <span>Total (USD)</span>
                          <strong>${this.props.location.state.price - 5}</strong>
                        </li>
                        :
                        <li className="list-group-item d-flex justify-content-between">
                          <span>Total (USD)</span>
                          <strong>${this.props.location.state.price }</strong>
                        </li>
                        }
                        
                      </ul>
                      {/* Cart */}
                      {/* Promo code */}

                      <form className="card p-2">
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Promo code" onChange={this.handleChange}  value={this.state.promo}name="promo" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                          <div className="input-group-append">
                            <button className="btn btn-secondary btn-md waves-effect m-0"  onClick={()=>this.redeem()} type="button">Redeem</button>
                          </div>
                        </div>
                      </form>
                      {/* Promo code */}
                    </div>
                    {/*Grid column*/}
                  </div>
                  {/*Grid row*/}
                
          
             
                  {/* Heading */}
                  <span className="text-muted" style={{margin:'10px',fontSize:'1.5rem',fontWeight:500}}>Customer Information </span>
                        {/*Grid row*/}

                  <div className="row">
                    {/*Grid column*/}
                    <div className="col-md-8 mb-4">
                      {/*Card*/}
                      <div className="card">
                      
                        {/*Card content*/}
                        <form className="card-body">
                          {/*Grid row*/}
                          <div className="row">
                            {/*Grid column*/}
                            <div className="col-md-6 mb-2">
                              {/*firstName*/}
                              <div className="md-form ">
                                <input name="billfirst"  type="text" id="firstName" required="required" className="form-control" />
                                <label htmlFor="firstName"  onChange={this.handleChange} className> Name</label>
                              </div>
                            </div>
        
                          
                            {/*Grid column*/}
                          </div>
                          {/*Grid row*/}
                          {/*Username*/}
                          {/*--   <div class="md-form input-group pl-0 mb-5">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input type="text" class="form-control py-0" placeholder="Username" aria-describedby="basic-addon1">
                          </div> */}
                          {/*email*/}
                          <div className="md-form mb-5">
                            <input type="text" id="email" name="billemail" onChange={this.handleChange} className="form-control" required="required" data-error="Email is required." />
                            <label htmlFor="email" className>Email </label>
                          </div>
                          {/*address*/}
                        
              
                          
                          <hr className="mb-4" />
                          {/* <input className="btn btn-primary btn-lg btn-block"  name="Continue to checkout" type="submit"  id="pay" disabled={this.state.formValid} onClick={()=>this.checkout()} defaultValue="Continue to checkout"/> */}
                          <PayPalButton
        amount={this.state.applied? this.props.location.state.price - 5:this.props.location.state.price  }
        onError={(e)=>{this.error(e)}}
        onCancel={(e)=>{this.error(e)}}
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {

         
          this.submit(details)
          // OPTIONAL: Call your server to save the transaction
          return fetch("/sucess", {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID,
              details:details,
              data:data
            })
          });
        }}
        options={{
          clientId:
         // "AYHbAe9gEmNPHRQ5u0X5PLYdnMsj23nNH72CRw-R87cCJEMDlgCkM5J-dBPDKontT_2qz3_g8COXL_ig ",
         "AY8FtqDKX3hVVaVraOUuI78W74CcaVa7GnDxW3rVv8bZ6ar2GY8_4HvhASjMEeUcQINTVAtKCyQWMra-",
          currency:"USD"
        }}
      />
                        </form>
                      </div>
                      {/*/.Card*/}
                     
                    </div>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    </div>
                    </form>
              {/*Main layout*/}
              {/* CTA AREA */}
              <a href="#0" className="cd-top js-cd-top">Top</a>
              {/* Optional JavaScript */}
              {/* jQuery first, then Popper.js, then Bootstrap JS */}
              {/* PARALLAX */}
              {/* bxslider */}
              {/* jQuery CountDown */}
              {/* scripts */}
              
          </div>
         
    )
    }
}


 
  