/* eslint-disable no-useless-constructor */
import React from 'react';

class About extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Design by: Maximiliano Cassol Montagner </h1>
                <h1></h1>
                <h2>FULL SATCK - Soy Henry</h2>
                <hr />
                <h2>You can search the 826 unique characters of Rick and Morty. Select your favorites. Also see the details card of each. </h2>
                <h3>Hope you enjoy it!</h3>
                <h2>Includes:</h2>
                <ul>
                    <li>Frontend (html y css)</li>
                    <li>Backend </li>
                    <li>Server connect with an API</li>
                </ul>
                <hr />
                
                <h3>See you!</h3>
            </>
        );
    }
}

export default About; 