import React,{Component} from 'react'
import { IconContext } from "react-icons";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdAccessibility } from "react-icons/md";
import { HashLink as Link } from 'react-router-hash-link';

 export default class Sucess extends Component {

     render()
     {console.log(this.props,"here")
     let details=this.props.location.state.details.payer
         return(
            <div class="bg">
  
            <div class="card">
              
              <span class="card__success">
              <IconContext.Provider
            value={{
              color: "blue",
              className: "react-icons",
              attr: { focusable: "false" }
            }}
          >
           
            <IoIosCheckmarkCircle
              color="white"
              size="em"
              alignmentBaseline="central"
              title="folder icon"
              className="additional-class-name"
            />
          </IconContext.Provider><i class="ion-checkmark"></i></span>
              
              <h1 class="card__msg">Payment Complete</h1>
              <h2 class="card__submsg">Check your email for updates</h2>
              
              <div class="card__body">
                
                <img src="https://image.shutterstock.com/z/stock-vector-male-avatar-profile-picture-vector-467599115.jpg" class="card__avatar"/>
                <div class="card__recipient-info">
                  <p class="card__recipient">{details.name.given_name} {details.name.surname}</p>
                  <p class="card__email">{details.email_address}</p>
                </div>
                
                <h1 class="card__price"><span>$</span>294<span>.00</span></h1>
                
                <p class="card__method">Payment method</p>
                <div class="card__payment">
                  <img src="https://seeklogo.com/images/P/Paypal_Acceptance_Mark-logo-11FEDDAA71-seeklogo.com.png" class="card__credit-card"/>
                  <div class="card__card-details">
                    <p class="card__card-type">Paypal Express</p>
                        
                  </div>
                </div>
                
              </div>
              
              <div class="card__tags">
                  <span class="card__tag">completed</span>
                  <span class="card__tag">#{details.payer_id}</span>        
              </div>
              
            </div>
            
          </div>
         )
     }
 }