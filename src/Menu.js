import React,{Component} from 'react'

import { HashLink as Link } from 'react-router-hash-link';
class Menu extends Component {
  state = {
    navCollapsed: true
  }

  _onToggleNav = () => {
    this.setState({ navCollapsed: !this.state.navCollapsed })
  }
  render()
  {
    const {navCollapsed} = this.state

    return (

 
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light" style={{backgroundColor:"white !important"}}>
        <div className="container">
          {/* LOGO */}
          <Link className="navbar-brand" to="/"><img src={require("./images/logo.png")} alt="logo header" /></Link>
          {/* mobile "order gift box"*/}
          <div className="order button gradient d-lg-none d-xl-none" style={{marginRight:'40px'}}>
          <Link to="/checkout"><i className="fas fa-shopping-cart" />Order Gift Box</Link>
          </div>{/* /.order */}
          {/* mobile menu toggle button */}
          <button className="navbar-toggler"  onClick={this._onToggleNav} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div  className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'} id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active dropdown">
                <Link className="nav-link" to="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#whatinside">What's Inside?</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/contact">Contact</Link>
              </li>
            </ul>
            {/* order button */}
            <div className="order button gradient d-md-none d-sm-none d-xl-block d-lg-block">
              <Link to="/#pricing"><i className="fas fa-shopping-cart" />Order Gift Box</Link>
            </div>{/* /.order */}
          </div>{/* /.collapse */}
        </div>{/* /.container */}
      </nav>
    
)}
    }
    export default Menu