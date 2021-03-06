import React, { Component } from 'react'; 
import UpdateCard from '../UpdateCard/updateCardForm';
import './quiz.css';


class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCollections: [],
            allCards: [],
            currentCollection: this.props.name,
            deck: this.props.deck,
            cardIndex: 0,
            view: 'quiz'
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

    updateCard(event){
        this.setState({
            view:'update'
        });
    }

    render(){
    if (this.state.view === 'quiz'){
        return(
            <div className='QuizBody'>
            <div className='head'>
                <h1>Collection: {this.state.currentCollection}</h1>
                <h2>Card: {this.state.cardIndex + 1} of {this.state.deck.length}</h2>
            </div>
            <div className='back'>
                <button className='previousbutton' onClick={() => this.previouseCard()} > Previos card</button>
            </div>
            <div className='Quizcard'>
                <h1>{this.state.deck[this.state.cardIndex].word}</h1>
                <h2>Definition: <br/> {this.state.deck[this.state.cardIndex].definition}</h2>
            </div>
            <div className='next'>
               <button className = 'nextbutton' onClick= {() => this.nextCard()} >Next card</button>
            </div>
            <div className='update'>
                <br/>
                <button onClick={()=>this.updateCard()} >Update This Card</button>
                <br/>
            </div>
            </div>
            );
        }
    else if(this.state.view === 'update'){
        return(
            <div>
                <UpdateCard collectionName={this.props.name} collectionId={this.props.collection} CardId={this.state.deck[this.state.cardIndex].id}/>
            </div>
            );
        }
    }
}
     
export default Quiz;