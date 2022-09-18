// import './App.css';
// import React, { useState } from 'react';
// import axios from 'axios';
// import StripeCheckOut from 'react-stripe-checkout';

// function App() {
//   const [price, setPrice] = useState(1);
//   const [clicked, setClicked] = useState();
//   const [ticket, setTicket] = useState({
//     name: "Parking Ticket",
//     ticketPrice: price * 50,
//   })
//   const [parked, setParked] = useState(Array(16).fill(false))
//   const setClick = (event) => {
//     setClicked(event.target.id);
//     const newParked = parked;
//     const time = price * 3600000;
//     newParked[event.target.id] = !newParked[event.target.id]
//     setParked(newParked)
//     setTimeout(() => {
//       const newnewParked = [...parked];
//       console.log(newnewParked)
//       console.log("timer completed")
//       newnewParked[event.target.id] = !newnewParked[event.target.id]
//       console.log(event.target.id);
//       console.log(!newnewParked[event.target.id]);
//       setParked(newnewParked);
//     }, time)

//   }
//   const makePayment = async (token) => {
//     const body = {
//       token,
//       ticket
//     }
//     const headers = {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*"
//     }
//     await axios.post("http://localhost:3000/create-checkout-session", {
//       data: body
//     }).then(response => {
//       console.log(response);
//     })
//     console.log(price);

//   }

//   const handleHourChange = (event) => {
//     setPrice(event.target.value)
//     console.log(price);
//     setTicket({
//       ticketPrice: event.target.value * 50
//     })
//   }

//   return (
//     <div className="App">
//       <div>
//         <h1 id="heading" >Book Your Parking</h1>
//         {/* <h2>How many hours?</h2> */}
//         <div class="row">
//           <div class="col s12">
//             Enter the amount of hours:
//             <div class="input-field inline">
//               <input placeholder='No. of hours' id="hours" onChange={handleHourChange} type='number' min='0' ></input>
//               {/* <label for="hours"></label> */}
//               {/* <span class="helper-text" data-error="wrong" data-success="right">hours</span> */}
//             </div>
//           </div>
//         </div>
//         <h2>It will cost you {ticket.ticketPrice}</h2>
//         <p>Select the slot you would like</p>
//         <div class="row">
//           <div id="A1" class="col s1 offset-s4">
//             <StripeCheckOut
//               stripeKey={process.env.REACT_APP_KEY}
//               token={makePayment}
//               name="Buy Ticket"
//               amount={price * 50}
//             >
//               <button id="1" onClick={setClick} disabled={parked[1]} className="btn-large blue">A1</button>
//             </StripeCheckOut>
//           </div>
//           <div id="A2" class="col s1">
//             <StripeCheckOut
//               stripeKey={process.env.REACT_APP_KEY}
//               token={makePayment}
//               name="Buy Ticket"
//               amount={price * 50}
//             >
//               <button id="2" onClick={setClick} disabled={parked[2]} className="btn-large blue">A2</button>
//             </StripeCheckOut>
//           </div>
//           <div id="A3" class="col s1">
//             <StripeCheckOut
//               stripeKey={process.env.REACT_APP_KEY}
//               token={makePayment}
//               name="Buy Ticket"
//               amount={price * 50}
//             >
//               <button id="3" onClick={setClick} disabled={parked[3]} className="btn-large blue">A3</button>
//             </StripeCheckOut>
//           </div>
//           <div id="A4" class="col s1">
//             <StripeCheckOut
//               stripeKey={process.env.REACT_APP_KEY}
//               token={makePayment}
//               name="Buy Ticket"
//               amount={price * 50}
//             >
//               <button id="4" onClick={setClick} disabled={parked[4]} className="btn-large blue">A4</button>
//             </StripeCheckOut>
//           </div>
//         </div>
//         <div class="row"></div>
//         <div id="row1" class="row">
//           <div class="col s1 offset-s4">
//           </div>
//           <div id="B1" class="col s1">
//             <StripeCheckOut
//               stripeKey={process.env.REACT_APP_KEY}
//               token={makePayment}
//               name="Buy Ticket"
//               amount={price * 50}
//             >
//               <button id="5" onClick={setClick} disabled={parked[5]} className="btn-large blue">B1</button>
//             </StripeCheckOut>
//           </div>
//           <div id="B2" class="col s1">
//             <StripeCheckOut
//               stripeKey={process.env.REACT_APP_KEY}
//               token={makePayment}
//               name="Buy Ticket"
//               amount={price * 50}
//             >
//               <button id="6" onClick={setClick} disabled={parked[6]} className="btn-large blue">B2</button>
//             </StripeCheckOut>
//           </div>
//           <div class="col s1">

//           </div>
//         </div>

//         <div class="row">
//           <div class="col s1 offset-s4">

//           </div>
//           <div id="B3" class="col s1">
//             <StripeCheckOut
//               stripeKey={process.env.REACT_APP_KEY}
//               token={makePayment}
//               name="Buy Ticket"
//               amount={price * 50}
//             >
//               <button id="7" onClick={setClick} disabled={parked[7]} className="btn-large blue">B3</button>
//             </StripeCheckOut>
//           </div>
//           <div id="B4" class="col s1">
//             <StripeCheckOut
//               stripeKey={process.env.REACT_APP_KEY}
//               token={makePayment}
//               name="Buy Ticket"
//               amount={price * 50}
//             >
//               <button id="8" onClick={setClick} disabled={parked[8]} className="btn-large blue">B4</button>
//             </StripeCheckOut>
//           </div>
//           <div class="col s1">

//           </div>
//         </div>
//         <div class="row"></div>
//         <div class="row">
//           <div id="C1" class="col s1 offset-s4">
//             <StripeCheckOut
//               stripeKey={process.env.REACT_APP_KEY}
//               token={makePayment}
//               name="Buy Ticket"
//               amount={price * 50}
//             >
//               <button id="9" onClick={setClick} disabled={parked[9]} className="btn-large blue">C1</button>
//             </StripeCheckOut>
//           </div>
//           <div id="C2" class="col s1">
//             <StripeCheckOut
//               stripeKey={process.env.REACT_APP_KEY}
//               token={makePayment}
//               name="Buy Ticket"
//               amount={price * 50}
//             >
//               <button id="10" onClick={setClick} disabled={parked[10]} className="btn-large blue">C2</button>
//             </StripeCheckOut>
//           </div>
//           <div id="C3" class="col s1">
//             <StripeCheckOut
//               stripeKey={process.env.REACT_APP_KEY}
//               token={makePayment}
//               name="Buy Ticket"
//               amount={price * 50}
//             >
//               <button id="11" onClick={setClick} disabled={parked[11]} className="btn-large blue">C3</button>
//             </StripeCheckOut>
//           </div>
//           <div id="C4" class="col s1">
//             <StripeCheckOut
//               stripeKey={process.env.REACT_APP_KEY}
//               token={makePayment}
//               name="Buy Ticket"
//               amount={price * 50}
//             >
//               <button id="12" onClick={setClick} disabled={parked[12]} className="btn-large blue">C4</button>
//             </StripeCheckOut>
//           </div>
//         </div>

//       </div >
//     </div >
//   );
// }

import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import asset from "./assets/car.png";
import { Button } from 'reactstrap';


class App extends Component {
  state = {
    img: asset


  };
  render() {
    return (
      <div className='main' >
        <div class="vertical-menu">
          <a href="#" class="active">• Home</a>
          <a href="#">• Let's Park</a>
          <a href="#">• Tickets</a>
          <a href="#">• Know More</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20, alignItems: 'center' }}>
          <span className='text'>
            <h1 className='font-link'>Park It</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            </p>
            <button className='button'>Let's Park</button>
          </span>
          <img src={this.state.img} height='400' margin='30' alt=""></img>

        </div>
      </div>
    )
  }
}


export default App;

