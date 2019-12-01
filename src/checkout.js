import React, { Component } from "react";
export default class Checkout extends React.Component {

    constructor() {
      super();
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
        workexp: "No",
        checked:false,
        college: "",
        branch: "",
        isHidden: false,
        user:null
      };
    //   this.handleChange = this.handleChange.bind(this);
    //   this.changeAmount = this.changeAmount.bind(this);
    //   this.openCheckout = this.openCheckout.bind(this);
    //   this._onSelect = this._onSelect.bind(this);
    //   this.handleValidation=this.handleValidation.bind(this);
    //   this.logout=this.logout.bind(this);
    }
    componentWillMount()
    {

    }
  
    componentDidMount() {
      const script = document.createElement("script");
  
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
  
      document.body.appendChild(script);
    
  
    }
    handleCheckboxChange = (event) =>
    {
    this.setState({ checked: event.target.checked })
    
    if(! event.target.checked )
    document.getElementById('autoUpdate').style.display='block'
    else
    document.getElementById('autoUpdate').style.display ='none'
    }
    handleChange =(evt)=> {
      // check it out: we get the evt.target.name (which will be either "email" or "password")
      // and use it to target the key on our `state` object with the same name, using bracket syntax
      this.setState({ [evt.target.name]: evt.target.value });
      console.log( evt.target.name, evt.target.value )
    }
    checkout()
    {
            let options = {
        key: "rzp_test_c8aoCjBHD5LW2n",
        amount: 40000, // 2000 paise = INR 20, amount in paisa
        name: "JobSutra",
        description: "JAT Exam ",
        image: "your pic",
        handler: function(response) {
          alert("You have sucessfully registered for JAT"+response.razorpay_payment_id);
       //   {this.state&&rootRef.child(`/users/${this.state.user.uid}`).update({basic:data,paid:"Yes",payment_id:response.razorpay_payment_id})}
        },
       
        theme: {
          color: "#F37254"
        }
      };
    
      let rzp = new window.Razorpay(options);
      rzp.open();
    }
    render() {
        return( <div>
            {/* Required meta tags */}
            
            {/* PRELOADER */}
            {/* <div id="loader-wrapper">
              <div id="loader" />
              <div className="loader-section section-left" />
              <div className="loader-section section-right" />
            </div> */}
            {/* HEADER with nav and slider */}
           
              {/* navigation */}
          
              <main className="mt-5 pt-4">
                <div className="container wow fadeIn">
                  {/* Heading */}
                  <h2 className="my-5 h2 text-center">Checkout </h2>
                  {/*Grid row*/}
                  <div className="row">
                    {/*Grid column*/}
                    <div className="col-md-8 mb-4">
                      {/*Card*/}
                      <div className="card">
                        <label htmlFor="address">Billing Address</label>
                        {/*Card content*/}
                        <form className="card-body">
                          {/*Grid row*/}
                          <div className="row">
                            {/*Grid column*/}
                            <div className="col-md-6 mb-2">
                              {/*firstName*/}
                              <div className="md-form ">
                                <input name="billfirst" type="text" id="firstName" className="form-control" />
                                <label htmlFor="firstName"  onChange={this.handleChange} className>First name</label>
                              </div>
                            </div>
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-md-6 mb-2">
                              {/*lastName*/}
                              <div className="md-form">
                                <input type="text" onChange={this.handleChange}  name="billsecond" id="lastName" className="form-control" />
                                <label htmlFor="lastName"  className>Last name</label>
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
                            <input type="text" id="email" name="billemail" onChange={this.handleChange} className="form-control" placeholder="youremail@example.com" />
                            <label htmlFor="email" className>Email </label>
                          </div>
                          {/*address*/}
                          <div className="md-form mb-5">
                            <input type="text" id="address" name="billaddress" onChange={this.handleChange} className="form-control" placeholder="1234 Main St" />
                            <label htmlFor="address" className>Address</label>
                          </div>
                          {/*address-2*/}
                          <div className="md-form mb-5">
                            <input type="text" id="address-2" name="billaddress2" onChange={this.handleChange} className="form-control" placeholder="Apartment or suite" />
                            <label htmlFor="address-2" className>Address 2 (optional)</label>
                          </div>
                          {/*Grid row*/}
                          <div className="row" style={{display:'flex',justifyContent:'space-around'}}>
                          <div className="col-lg-4 col-md-12 mb-4">
                            <label htmlFor="address-2" className> Country</label>
                               <input type="text" id="address-2" name="billcountry" onChange={this.handleChange} className="form-control" placeholder="Country Name" />
                       
                              <div className="invalid-feedback">
                                Please select a valid country.
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                            <label htmlFor="address-2" className>State</label>
                            <input type="text" id="address-2" name="billstate" onChange={this.handleChange} className="form-control"  required/>
                            
                              <div className="invalid-feedback">
                                Please provide a valid state.
                              </div>
                            </div>
                            </div>
                          <div className="row" style={{display:'flex',justifyContent:'space-around'}}>
                            {/*Grid column*/}
                           
                            {/*Grid column*/}
                            {/*Grid column*/}
                           
                            {/*Grid column*/}
                            {/*Grid column*/}
                            <div className="col-lg-4 col-md-6 mb-4">
                              <label htmlFor="zip">City</label>
                              <input type="text" name="billcity" onChange={this.handleChange} className="form-control" id="zip" placeholder required />
                              <div className="invalid-feedback">
                                Name of required.
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                              <label htmlFor="zip">Zip</label>
                              <input type="text" name="billzip" onChange={this.handleChange} className="form-control" id="zip" placeholder required />
                              <div className="invalid-feedback">
                                Zip code required.
                              </div>
                            </div>
                            {/*Grid column*/}
                          </div>
                          {/*Grid row*/}
                          <hr />
                          <label htmlFor="address">Shipping Address</label>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" checked={this.state.checked}
            onChange={(e)=>this.handleCheckboxChange(e)}  className="custom-control-input" id="same-address" />
                            <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                            <div id="autoUpdate">
                              {/*Grid row*/}
                              <div className="row">
                                {/*Grid column*/}
                                <div className="col-md-6 mb-2">
                                  {/*firstName*/}
                                  <div className="md-form ">
                                    <input type="text" name ="shipfirst"onChange={this.handleChange} id="firstName" className="form-control" />
                                    <label htmlFor="firstName"  className>First name</label>
                                  </div>
                                </div>
                                {/*Grid column*/}
                                {/*Grid column*/}
                                <div className="col-md-6 mb-2">
                                  {/*lastName*/}
                                  <div className="md-form">
                                    <input type="text" name='shipsecond' onChange={this.handleChange} id="lastName" className="form-control" />
                                    <label htmlFor="lastName" className>Last name</label>
                                  </div>
                                </div>
                                {/*Grid column*/}
                              </div>
                              {/*address*/}
                              <div className="md-form mb-5">
                                <input type="text" id="address"  onChange={this.handleChange} name="shipaddress" className="form-control" placeholder="1234 Main St" />
                                <label htmlFor="address" className>Address</label>
                              </div>
                              {/*address-2*/}
                              <div className="md-form mb-5">
                                <input type="text" id="address-2" name="shipaddress2" onChange={this.handleChange} className="form-control" placeholder="Apartment or suite" />
                                <label htmlFor="address-2" className>Address 2 (optional)</label>
                              </div>
                              <div className="row"  style={{display:'flex',justifyContent:'space-around'}}>
                              <div className="col-lg-4 col-md-12 mb-4">
                                <label htmlFor="address-2" className>Enter Your Country</label>
                                  <input type="text" id="address-2" name="shipcountry" onChange={this.handleChange} className="form-control" placeholder="Country Name" />
                            
                              <div className="invalid-feedback">
                                Please select a valid country.
                              </div>

                                  
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                <label htmlFor="address-2" className>State</label>
                            <input type="text" id="address-2" name="shipstate" onChange={this.handleChange} className="form-control"  required/>
                      
                                  <div className="invalid-feedback">
                                    Please provide a valid state.
                                  </div>
                                </div>
                                </div>
                              {/*Grid row*/}
                              <div className="row"  style={{display:'flex',justifyContent:'space-around'}}>
                                {/*Grid column*/}
                             
                                {/*Grid column*/}
                                {/*Grid column*/}
                               
                                <div className="col-lg-4 col-md-6 mb-4">
                              <label htmlFor="zip">City</label>
                              <input type="text" name="billcity" onChange={this.handleChange} className="form-control" id="zip" placeholder required />
                              <div className="invalid-feedback">
                                Name of required.
                              </div>
                            </div>
                                {/*Grid column*/}
                                {/*Grid column*/}
                                <div className="col-lg-4 col-md-6 mb-4">
                                  <label htmlFor="zip">Zip</label>
                                  <input type="text"  name="shipzip" onChange={this.handleChange} className="form-control" id="zip" placeholder required />
                                  <div className="invalid-feedback">
                                    Zip code required.
                                  </div>
                                </div>
                                {/*Grid column*/}
                              </div>
                            </div>
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="save-info" />
                            <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
                          </div>
              
                          
                          <hr className="mb-4" />
                          <button className="btn btn-primary btn-lg btn-block" id="pay"  onClick={()=>this.checkout()} type="submit">Continue to checkout</button>
                        </form>
                      </div>
                      {/*/.Card*/}
                    </div>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <div className="col-md-4 mb-4">
                      {/* Heading */}
                      <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                        <span className="badge badge-secondary badge-pill">3</span>
                      </h4>
                      {/* Cart */}
                      <ul className="list-group mb-3 z-depth-1">
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                          <div>
                            <h6 className="my-0">Product name</h6>
                            <small className="text-muted">Brief description</small>
                          </div>
                          <span className="text-muted">$12</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                          <div>
                            <h6 className="my-0">Second product</h6>
                            <small className="text-muted">Brief description</small>
                          </div>
                          <span className="text-muted">$8</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                          <div>
                            <h6 className="my-0">Third item</h6>
                            <small className="text-muted">Brief description</small>
                          </div>
                          <span className="text-muted">$5</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between bg-light">
                          <div className="text-success">
                            <h6 className="my-0">Promo code</h6>
                            <small>EXAMPLECODE</small>
                          </div>
                          <span className="text-success">-$5</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                          <span>Total (USD)</span>
                          <strong>$20</strong>
                        </li>
                      </ul>
                      {/* Cart */}
                      {/* Promo code */}
                      <form className="card p-2">
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Promo code" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                          <div className="input-group-append">
                            <button className="btn btn-secondary btn-md waves-effect m-0" type="button">Redeem</button>
                          </div>
                        </div>
                      </form>
                      {/* Promo code */}
                    </div>
                    {/*Grid column*/}
                  </div>
                  {/*Grid row*/}
                </div>
              </main>
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


 
  