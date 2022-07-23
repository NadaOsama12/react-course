 import React, { Component } from "react";
 import './SearchBox'
 // import './Home.css'
 import SearchBox from "./SearchBox";
 import axios from 'axios'
 import Spinner from '../../utility/Spinner/Spinner'
 import Cities from '../../utility/City/Cities';
  
class Home extends Component{
 state = {
  cities: []
 }

 async componentDidMount(){
  const recommendedCities = await axios.get(`${window.apiHost}/cities/recommended`)
  this.setState({
   cities: recommendedCities.data
  })
 }

 render(){
  if(this.state.cities.length === 0){
   return <Spinner/>
  }

  const city = this.state.cities.map((city, i)=>{
   return <city key={i} city={city}/>
  })
  return(<>
   <div className="container-fluid">
    <div className="row">
     <div className="home col s12">
      <div className="upper-fold">
       <SearchBox/>
      </div>
     </div>
    </div>
   </div>
  <div className="row">
    
  <div className="col s12">
    <Cities cities={this.state.cities} header="Recommended Cities For You" />
    </div>
   </div>
  </>
  )
 }
}
export default Home