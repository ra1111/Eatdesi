import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import Checkout from './checkout'

const Content = () =>{
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/checkout" component={Checkout}/>
    </Switch>
  )
}
 
export default Content