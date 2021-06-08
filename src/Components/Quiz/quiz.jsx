import { render } from '@testing-library/react';
import React, { Component } from 'react'; 


class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCollections: [],
            allCards: [],
            currentCollection: this.props.name,
            deck: this.props.deck,
            cardIndex: 0,
        }
    }
    nextCard(){
        let tempCard = this.state.cardIndex;
        tempCard ++
        if(tempCard === this.state.deck.length){
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
            tempCard = this.state.deck.length - 1;
        }
        this.setState({
            cardIndex: tempCard
        });
    }

    render(){
    return(
        <div QuizBaody>
            <div>
                <h3>Collection: {this.state.currentCollection}</h3>
                <h5>Card: {this.state.cardIndex + 1} of {this.state.deck.length}</h5>
            </div>
            <button onClick={() => this.previouseCard()} > Previos card</button>
            <div>
                <h1>{this.state.deck[this.state.cardIndex].word}</h1>
                <h4>{this.state.deck[this.state.cardIndex].definition}</h4>
            </div>
            <button onClick= {() => this.nextCard()} >Next card</button>

        </div>
        )
    }
}
     
    export default Quiz;