// import React, { Component } from "react";

// class counter extends Component{
//     constructor () {
//         super ();
//         this.state ={
//             count: 0
//     };
// }

//     increment = () => {
//         this.setState({ count: this.state.count + 1});
//     };

//     render() {
//         return (
//             <div>
//                 <h1>count: {this.state.count}</h1>
//                 <button onClick={this.increment}></button>
//             </div>
//         );
//     }
// }

// export default counter;

// cth state di class component 


//----------------------------------------------

//cth state hook(useState) dalam arrow function
import React, { useState } from 'react'

const Counter = () => {
    const [Count, setCount]= useState(0);
  return (
    <div>
      <h1>Perhitungan: {Count}</h1>
      <button onClick>{() => setCount(Count+1)}increment</button>
    </div>
  )
}

export default Counter