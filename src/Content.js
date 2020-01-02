import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import Checkout from './checkout'
import Mcheckout from './mcheckout'
import Sucess from './sucess'
import error from './error'
const Content = () =>{
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/checkout" component={Checkout}/>
      <Route path="/mcheckout" component={Mcheckout}/>
      <Route path="/sucess" component={Sucess}/>
      <Route path="/error" component={error}/>

    </Switch>
  )
}
 
export default Content