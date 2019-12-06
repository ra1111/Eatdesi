/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import './App.css'
import BackgroundImage from './images/triangles.jpg'

let imgUrl = './images/traingles.jpg'
const Home = () => {
    return (
    <div>
 <div>
      {/* slider */}
      <header>
      <div className="image-header" data-parallax="scroll" data-speed="0.7">
        <div className="overlay-effect" />
        
      </div>{/* /.image-header*/}
      </header>
        {/* CALL TO ACTION AREA */}
        <section className="call-to-action container">
          <div className="row">
            <div className="col-12">
              <h2>Mini India Box</h2> 
              <h3>A monthly box for people with <strong>Strong Tastes</strong></h3>
              <p>Sign up for the Mini India Box now and you'll get premium Indian flavoured snacks, handpicked by our editors, every month!</p>
              <p>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <span>1770 reviews</span>
              </p>
              <div className="order button gradient"style={{ margin:'20px auto'}}>
                <Link to="/#pricing">Subscribe Now</Link>
              </div>{/* /.order */}
            </div>
          </div>{/* /.row */}
        </section>{/* /.call-to-action */}
        {/* HOW IT WORKS */}
        <section className="how-it-works">
          <div className="container">
            <h3>How It Works</h3>
            <p className="section-description">Find out the steps it takes to have a box full of tongue twister surprises delivered to your door at the same time each month!</p>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                <div className="step one">
                  <div className="icon">
                    <span>1</span>
                    <i className="fas fa-clipboard-list" />
                  </div>{/* /.icon*/}
                  <h4>Choose a Snacks Plan</h4>
                  <p>6, or 12 month plans available. </p>
                </div>{/* /.step */}
              </div>{/* /.col-4 */}
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                <div className="step two">
                  <div className="icon">
                    <span>2</span>
                    <i className="fas fa-box-open" />
                  </div>{/* /.icon*/}
                  <h4>We hand-pick a box for you</h4>
                  <p>Based on the snacks in India. Premium snacks and accessories for you</p>
                </div>{/* /.step */}
              </div>{/* /.col-4 */}
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                <div className="step three">
                  <div className="icon">
                    <span>3</span>
                    <i className="far fa-paper-plane" />
                  </div>{/* /.icon*/}
                  <h4>... and send it on your way</h4>
                  <p>expect the delivery at your doorstop within the first week of the month .</p>
                </div>{/* /.step */}
              </div>{/* /.col-4 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>{/* /.how-it-works */}
        {/* WHAT'S INSIDE */}
        <section className="in-the-box" id="whatinside">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-lg-5 col-xl-5 col-sm-12">
                <img src={require("./images/info.jpg")} alt="hero 3" />
              </div>{/*/.col-7*/}
              <div className="col-md-7 col-lg-7 col-xl-7 col-sm-12">
                <h3>What's Inside the Box?</h3>
                <p className="section-description">We have unique  flavours  for each taste. From  sweet to sour , from Indian Mango to Indian Pickles, from the classic  to the exotic , we've got you covered. </p>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="feature">
                      <i className="fas fa-cookie-bite" />
                      <h4>Exotic Indian Biscuits</h4>
                      <p>A cleverly use of different spices to blend with each other</p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="feature">
                      <i className="fas fa-cookie" />
                      <h4>Tounge Twister Candies</h4>
                      <p>Have you ever tasted mango before its ripe ? Dont worry we have you covered!</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="feature">
                      <i className="fas fa-mortar-pestle" />
                      <h4>Chips Dipped in Spices</h4>
                      <p>With every bite feel your taste buds exploding with spices.</p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="feature">
                      <i className="fas fa-stroopwafel" />
                      <h4>Sweets  made in heaven</h4>
                      <p>Enjoy the melting of food of God in your mouth after the main course.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/*/.row */}
          </div>{/*/.container*/}
        </section>{/* /.in-the-box */}
        {/* NEXT BOX IN: */}
        <section className="next-box">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-xl-7 col-md-10">
                <h5>Time Until Next Shipment:</h5>
                <div id="next-box-countdown" className="clearfix-home">
                  <div>90 <span>days</span></div><div> 20 <span>hours</span></div> <div>00 <span>minutes</span></div>
                </div>{/*/#next-box-countdown*/}
                {/* /. remaining-time*/}
              </div>
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>{/* /.next-box */}
        <section className="call-to-action-middle container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-xl-5 col-md-8">
              <i className="fas fa-shopping-cart" />
              <h3>Subscribe Now</h3>
              <p className="section-description">before the time runs out, to get the next month’s goodie box</p>
              <div className="order button gradient">
                <Link href="/#pricing">See Subscription Plans</Link>
              </div>{/* /.order */}
            </div>
          </div>{/* /.row */}
        </section>{/* /.call-to-action */}
        {/* PREVIOUS BOXES */}
        {/* PRICING */}
        <section className="pricing" id="pricing">
          <div className="container" style={{ backgroundImage: `url(${"./images/info.jpg"})` }}>
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                <h3>Great Value In Every Box</h3>
                {/* <p class="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
              </div>{/* /.col*/}
            </div>{/* /.row */}
            <div className="row subs">
              <div className="col-xl-4 col-lg-4 col-md-6 box-container">
                <div className="price-2"> 
                  <i className="price">$299</i>
                  <h5>Yearly Subscription Box</h5>
                  <ul>
                    <li>10-14 snacks per box</li>
                    <li>Free shipping worldwide</li>
                    <li> Indian snacks, candies curated around a fun cultural theme</li>
                  </ul>
                  <div className="order button secondary"><Link to="/checkout">Checkout</Link></div>
                </div>{/* /.price-1*/}
              </div>
              {/*  <div class="col-xl-4 col-lg-4 col-md-6 box-container" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                        <div class="price-2"> 
                            <i class="price">$199</i>
                            <h5>Half Yearly subscription Box</h5>
                           
                            <ul>
                                <li>flexible subscription</li>
                                <li>Free shipping worldwide</li>
                                <li> Indian snacks, candies curated around a fun cultural theme</li>
                            </ul>
                            <div class="order button gradient">
                                <a href="checkout.html">Checkout</a>
                            </div>
                        </div> */}{/* /.price-1*/}
            </div>
          </div>{/* /.col*/}
          {/* /.row*/}
          {/* /.container-fluid*/}
        </section>{/* /.pricing  */}
        <div className="extra-info">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="facts-content">
                  <i className="fas fa-box-open" />
                  <h3 className="timer count-title count-number" data-to={320} data-speed={1500} > 900 </h3>
                  <p>boxes delivered</p>
                </div>{/* /.facts-content */}
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="facts-content">
                  <i className="fas fa-undo-alt" />
                  <h3 className="timer count-title count-number" data-to={2} data-speed={1500} >2</h3>
                  <p>boxes returned</p>
                </div>{/* /.facts-content */}
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="facts-content">
                  <i className="fas fa-smile" />
                  <h3 className="timer count-title count-number" data-to={731} data-speed={1500} >731</h3>
                  <p>happy clients</p>
                </div>{/* /.facts-content */}
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="facts-content">
                  <i className="fas fa-briefcase-medical" />
                  <h3 className="timer count-title count-number" data-to={0} data-speed={1500} > 0 </h3> 
                  <p>health problems</p>
                </div>{/* /.facts-content */}
              </div>
            </div>
          </div>
        </div>{/* /.extra-info  */}
        {/* EXTRA INFO */}
        {/* THE UNBOXING */}
        {/*   <section class="unboxing">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                    <h3 class="text-center">The Unboxing</h3>
                    <p class="section-description">Featured youtubers unboxing the cheese box</p>
                </div>
            </div>
        </div>
        
        <div class="container">
            <div class="row" id="player">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="videoWrapper">
                        <div><img src="images/video1.jpg" id="introphoto1" alt="video 1"></div>
                        <div class="hidden" id="video1"></div>
                    </div>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="videoWrapper">
                        <div><img src="images/video2.jpg" id="introphoto2" alt="video 2"></div>
                        <div class="hidden" id="video2"></div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
        {/* SUBSCRIBE */}
        <section className="subscribe" style={{backgroundImage: `url(${BackgroundImage})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',}}>
          <div className="bgimg" data-parallax="scroll"   data-speed="0.7">
            <div className="container">
              <div className="subscribe-area">
                <div className="row">
                  <div className="col-12 subscribe-text">
                    <h3>Subscribe to our newsletter</h3>
                    <p className="section-description">and get 20% off from your next subscription</p>
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
        {/* PRESS */}
        {/*  <section class="press">
        <div class="container">
            <div class="row">
                <div class="col"><h3>We're also featured in:</h3></div>
            </div>
            <div class="row">
                <div class="col-lg-2 col-md-4 col-sm-4 logo col-6"><img src="images/92x62.png" data-toggle="tooltip" data-placement="top" title="'The best cheese that isn't even available in the supermarket'" alt="logo 1"></div>
                <div class="col-lg-2 col-md-4 col-sm-4 logo col-6"><img src="images/92x62.png" data-toggle="tooltip" data-placement="top" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" alt="logo 2"></div>
                <div class="col-lg-2 col-md-4 col-sm-4 logo col-6"><img src="images/92x62.png" data-toggle="tooltip" data-placement="top" title="sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" alt="logo 3"></div>
                <div class="col-lg-2 col-md-4 col-sm-4 logo col-6"><img src="images/92x62.png" data-toggle="tooltip" data-placement="top" title="Ut enim ad minim veniam, quis nostrud exercitation" alt="logo 4"></div>
                <div class="col-lg-2 col-md-4 col-sm-4 logo col-6"><img src="images/92x62.png" data-toggle="tooltip" data-placement="top" title="ullamco laboris nisi ut aliquip ex ea commodo consequat" alt="logo 5"></div>
                <div class="col-lg-2 col-md-4 col-sm-4 logo col-6"><img src="images/92x62.png" data-toggle="tooltip" data-placement="top" title="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" alt="logo 6"></div>
            </div>
        </div>
    </section> */}{/* /.press  */}
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
        {/* ANIMATE ON SCROLL */}
        {/* ANIMATE ON SCROLL SETTINGS */} 
        {/* scripts */}
      </div>
    </div>
  )}
  export default Home