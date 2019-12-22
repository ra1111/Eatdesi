import React, { Component } from "react";
import firebase, { auth, provider,config } from './firebase';
import './App.css';
import BackgroundImage from './images/triangles.jpg'
export default class Contact extends React.Component {
  constructor()
  { super()
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }
    this.state={
      name:'',
      email:'',
      mobile:'',
      message:'',
    }
    
  }
  handleChange =(evt)=> {
    let name=evt.target.name
    let value=evt.target.value 
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [evt.target.name]: evt.target.value })//,() => { this.validateField(name, value) });
    console.log( evt.target.name, evt.target.value )
  }
  Submit(e)
  {e.preventDefault()
    let data=this.state
    console.log(data)
  firebase.database().ref('EatDesiMessage/').push({data}).then((data)=>{
    //success callback
    console.log('data ' , data)
    this.setState({
      name:'',
      email:'',
      mobile:'',
      message:'',
    });
  
}).catch((error)=>{
    //error callback
    console.log('error ' , error)
})
  }
render (){ 
    return(
<div>

  {/* CTA AREA */}
  <div className="cta-area" data-parallax="scroll" data-image-src="images/1600x644.png" data-speed="0.7">
    <div className="container">
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col">
              <div className="step one clearfix">
                <i className="fas fa-clipboard-list" />
                <div className="step-content">
                  <h4>Choose a subscription Plan</h4>
                  <p>  6 month plans available.  </p>
                </div>{/* /.step-content*/}
              </div>{/* /.step */}
            </div>
            <div className="col">
              <div className="step two clearfix">
                <i className="fas fa-box-open" />
                <div className="step-content">
                  <h4>We hand-pick a box for you</h4>
                  <p>Based on the best snacks in the India. </p>
                </div>{/* /.step-content */}
              </div>{/* /.step */}
            </div>{/* /.col-4 */}
            <div className="col">
              <div className="step three clearfix">
                <i className="far fa-paper-plane" />
                <div className="step-content">
                  <h4>... and send it on your way</h4>
                  <p>expect it in the next 72 hours after the time is up</p>
                </div>{/* /.step-content */}
              </div>{/* /.step */}
            </div>{/* /.col-4 */}
          </div>
        </div>{/* /.col-8 */}
        <div className="col-4">
          <div className="remaining-time">
            <h3>Remaining Time</h3>
            <p>until the next box is being delivered</p>
            <div id="next-box-countdown" style={{color:'#e0413d',fontSize:'25px',fontWeight:'300'}} className="clearfix">
              <div>90 <span>days</span></div><div> 20 <span>hours</span></div> <div>00 <span>minutes</span></div>
            </div>{/*/#next-box-countdown*/}
          </div>{/* /. remaining-time*/}
        </div>{/* /.col-4 */}
      </div>{/* /.row */}
    </div>{/* /.container */}
  </div>{/*/.cta-area*/}

<section className="blog-content">
  <div className="container">
    <div className="row">
      {/* THE PAGE TITLE AND DESCRIPTION */}
      <div className="col-12">
        <h3>Contact Us</h3>
      </div>{/* /.col-12 */}
    </div>{/* /.row */}
    <div className="row" style={{justifyContent:'center'}}>
      {/* CONTACT DETAILS */}
      <div className="col-6">
       
        <form  >
          <div className="messages" />
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Name*:" value={this.state.name} className="form-control" onChange={this.handleChange}  name="name" required="required" data-error="Name is required." />
            <div className="help-block with-errors" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email*:"value={this.state.email} className="form-control" onChange={this.handleChange} name="email" required="required" data-error="Email is required." />
            <div className="help-block with-errors" />
          </div>
          <div className="form-group">
            <label htmlFor="telephone">Telephone</label>
            <input type="tel" placeholder="Telephone*:"  value={this.state.mobile} className="form-control"  onChange={this.handleChange} name="mobile" required="required" data-error="Telephone is required." />
            <div className="help-block with-errors" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea placeholder="Message*:" className="form-control"  value={this.state.message} onChange={this.handleChange} name="message" required="required" data-error="Message is required." defaultValue={""} />
            <div className="help-block with-errors" />
          </div>
          <div className="form-group">
            <input type="submit"  id="submit" className="btn btn-primary btn-lg btn-block" onClick={(e)=>this.Submit(e)}  defaultValue="Send Message" />
          </div>
        </form>
      </div>{/* /.col-6 */}
      {/* THE MAP */}
     
    </div>{/* /.row */}
  </div>{/* /.container */}
</section>{/* /.blog-content*/}
{/* SUBSCRIBE */}
<section className="subscribe"  style={{ backgroundImage: `url(${"./images/triangles.jpg"})` }}>
  <div className="bgimg" data-parallax="scroll" data-image-src="images/triangles.jpg" data-speed="0.7">
    <div className="container">
      <div className="subscribe-area">
        <div className="row">
          <div className="col-12 subscribe-text">
            <h3>Subscribe to our newsletter</h3>
            <p className="section-description">and get 20% off from your next eatdesi subscription</p>
          </div>{/* /.col*/}
          <div className="col-12">
            <form>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                  <input type="text" placeholder="Your Name:" />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                  <input type="text" placeholder="Your Email:" />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                  <button className="subscribe-me">Subscribe</button>
                </div>
              </div>
            </form>
          </div>{/* /.col*/}
        </div>
      </div>{/* /.row*/}
    </div>{/* /.container-fluid*/}
  </div>
</section>{/* /.subscribe  */}
{/* FOOTER */}   
{/* FOOTER */}   
<footer>
  <div className="container">
    <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-12">
      
        <ul className="contact row">
          <li className="col"><i className="fas fa-map-marker-alt" />Magadh University, Bodhgaya 11, 824234 <br /> India</li>
          <li className="col"><i className="fas fa-mobile-alt" /><strong>Get In Touch: </strong><br />mail.eatdesi@gmail.com</li>
          <li className="col"><strong>Connect With Us: </strong><br />
            <ul>
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fas fa-envelope" /></a></li>
            </ul>
          </li>
        </ul>
        <ul className="row widgets">
          <li className="col">
          </li>
          <li className="col">
          </li>
          <li className="col">
          </li>
        </ul>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-12 shipping">
        <h5>We’re <strong>shipping</strong><br /> all over the world</h5>
        <a href="#">read about shipping costs</a>
      </div>{/* /.shipping */}
    </div>{/* /.row */}
  </div>{/* /.container */}
  <div className="lower-footer">
    <div className="container">
      <div className="row">
        <div className="col">
          Made in  <i className="far fa-heart" /> INDIA <br />
        </div>
      </div>
    </div>
  </div>{/* /.lower-footer */}
</footer>
<a href="#0" className="cd-top js-cd-top">Top</a>
{/* Optional JavaScript */}
{/* jQuery first, then Popper.js, then Bootstrap JS */}
{/* PARALLAX */}
{/* bxslider */}
{/* jQuery CountDown */}
{/* contact form validator */}
{/* CONTACT FORM */}
{/* MAPS FORM */}
{/* scripts */}
</div>
);
}
}