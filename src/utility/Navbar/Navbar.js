import React, { Component } from "react";
import { Link } from 'react-router-dom' 
import './Navbar.css'

class Navbar extends Component{
 render(){
   let navColor = 'transparent';
        if(this.props.location.pathname !== '/'){
            // then user is not on the home page!
            navColor = 'black'
        }
  return(
   <div className="container-fluid nav">
    <div className="row">
       <nav className={navColor}>
    <div className="nav-wrapper">
    <Link to="/" className="left">airbnb</Link>
     <ul id="nav-mobile" className="right">
      <li><Link to='/'></Link>English Us</li>
      <li><Link to='/'></Link>$ USD</li>
      <li><Link to='/'></Link>Became a host</li>
      <li><Link to='/'></Link>Help</li>
      <li><Link to='/'></Link>Sign Up</li>
      <li><Link to='/'></Link>Login</li>
      </ul>
    </div>
  </nav>
    </div>
   </div>
   
  
  )
 }
}

export default Navbar

// import React, { Component } from "react";
  
// class Navbar extends Component{
//  render(){
//   return(
//    <></>
//   )
//  }
// }
// export default Navbar
