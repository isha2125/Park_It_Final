import { render } from '@testing-library/react';
import React, { Component } from 'react';
import '../App.css';
import asset from "../assets/car.png";
import { Button } from 'reactstrap';


class Home extends Component {
    state = {
        img: asset


    };
    render() {
        return (
            <div className='main' >
                <div class="vertical-menu">
                    <a href="#" class="active">• Home</a>
                    <a href="/book">• Let's Park</a>
                    <a href="/book">• Tickets</a>
                    <a href="/about">• Know More</a>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20, alignItems: 'center' }}>
                    <span className='text'>
                        <h1 className='font-link'>Park It</h1>
                        <p fontsize='22'>Park it is a website built to make your parking experience hassle free and time efficient.
No more of guards and their whistles directing users around the place.
“Park it” is designed to direct users to empty parking spaces, providing them 
a smooth, efficient and pleasant parking experience.</p>
                        <a href="/book">
                            <button className='btn-large #4a148c purple darken-4'>Let's Park</button>
                        </a>
                    </span>
                    <img src={this.state.img} height='400' margin='30' alt=""></img>

                </div>
            </div>
        )
    }
}


export default Home;

