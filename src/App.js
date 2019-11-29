import React, { Component } from 'react';

import Content from './Content'
import Menu from './Menu'
class App extends Component {
  render() {
    return (
      <div className="App">
      <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    {/* Bootstrap CSS */}
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
    {/* bxslider */}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css" />
    {/* google fonts */}
    <link href="https://fonts.googleapis.com/css?family=Dosis:200,500,700%7CRoboto:300,300i,400,400i,500,700,900" rel="stylesheet" />
    {/* fontawesome */}
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous" />
    {/* style.css */}
    <link rel="stylesheet" href="css/style.css" />
    {/* ANIMATE ON SCROLL*/}
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    <title>Authentic Indian snacks &amp; candy|EatDesi</title>
    {/*[if lt IE 8]>
  <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]*/}
    {/* PRELOADER 
    <div id="loader-wrapper">
      <div id="loader" />
      <div className="loader-section section-left" />
      <div className="loader-section section-right" />
    </div>
    */}
    {/* HEADER with nav and slider */}
       <Menu/>
        <Content />
      </div>
    );
  }
}
 
export default App