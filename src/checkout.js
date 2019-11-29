import React, { Component } from "react";
export default class Checkout extends React.Component {

    constructor() {
      super();
      this.state = {
        //graduation details
        address: "",
        contact: 0,
        name: "",
         company: "", months: 0, role: "" ,
        degree: "",
  
        workexp: "No",
        college: "",
        branch: "",
        isHidden: false,
        user:null
      };
      this.handleChange = this.handleChange.bind(this);
      this.changeAmount = this.changeAmount.bind(this);
      this.openCheckout = this.openCheckout.bind(this);
      this._onSelect = this._onSelect.bind(this);
      this.handleValidation=this.handleValidation.bind(this);
      this.logout=this.logout.bind(this);
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
    checkout()
    {
            let options = {
        key: "rzp_live_wTLJa4lK2Y49fL",
        amount: 40000, // 2000 paise = INR 20, amount in paisa
        name: "JobSutra",
        description: "JAT Exam ",
        image: this.state.user.photoURL||"your pic",
        handler: function(response) {
          alert("You have sucessfully registered for JAT"+response.razorpay_payment_id);
       //   {this.state&&rootRef.child(`/users/${this.state.user.uid}`).update({basic:data,paid:"Yes",payment_id:response.razorpay_payment_id})}
        },
        prefill: {
          name: this.state.name,
          email:this.state.user.email||"harshil@razorpay.com"
        },
        notes: {
          address: this.state.address
        },
        theme: {
          color: "#F37254"
        }
      };
    
      let rzp = new window.Razorpay(options);
      rzp.open();
    }
    render() {
        return(<div/>)
    }
}


 
  