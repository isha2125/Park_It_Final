import React, { useState } from 'react';
import axios from 'axios';
import StripeCheckOut from 'react-stripe-checkout';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import copyright from "./copyright.css";

class copyright extends Component {
    
    render() {
        return (<div className='about'>
            <p>The "C in a circle" notice is used only on "visually perceptible copies." Certain kinds of works--for example, musical, dramatic, and literary works--may be fixed not in "copies" but by means of sound in an audio recording. Since audio recordings such as audio tapes and phonograph disks are "phonorecords" and not "copies," under the Copyright Act, the "C in a circle" notice is not used to indicate protection of the underlying musical, dramatic, or literary work that is recorded. Instead, a symbol composed of the letter "P" in a circle is used. Since computer software and apps for mobile devices are considered to be visually perceptible (with the aid of a machine), the copyright notice for software and apps should use the C in a circle format.</p>
        </div>

        )}}
 export default copyright;