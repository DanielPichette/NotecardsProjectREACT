import { render } from '@testing-library/react';
import React, { Component } from 'react'; 


class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCollections: [],
            allCards: [],
            currentCollection: 0,
            currentDeck: [],
        }
    }
}
render(){
    return(
        <div>
            
        </div>
    )
}
     
    export default Quiz;