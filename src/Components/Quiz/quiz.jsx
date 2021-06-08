import { render } from '@testing-library/react';
import React, { Component } from 'react'; 


class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCollections: [],
            allCards: [],
            currentCollection: 0,
            deck: [],
            cardIndex: 0,
        }
    }
    nextCard(){
        let tempCard = this.state.cardIndex;
        tempCard ++
        if(tempCard === this.deck.length){
            tempCard = 0;
        }
        this.setState({
            cardIndex: tempCard
        });
    }

    previouseCard(){
        let tempCard = this.state.cardIndex;
        tempCard --;
        if(tempCard < 0){
            tempCard = this.deck.length - 1;
        }
        this.setState({
            cardIndex: tempCard
        });
    }

    render(){
    return(
        <div QuizBaody>
            <button> Previos card</button>
            <div>
                <h1>{this.deck[this.cardIndex].word}</h1>
                <h4>{this.deck[this.cardIndex].definition}</h4>
            </div>
            <button onClick= {() => this.nextCard()} >Next card</button>

        </div>
        )
    }
}
     
    export default Quiz;