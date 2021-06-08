import React, { Component } from 'react';
import Navigation from './NavigationBar/navaigationBar';
import Searchbar from './SearchBar/searchbar';
import Body from './Body'
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'collections',
            allCards: [],
            collection:[],
            currentCollection: [],
            currentDeck:[],
        }
    }
    navCollections(){
        this.setState({
            view: 'collections',
        })
    }

    navQuiz(){
        this.setState({
            view: 'quiz',
        })
    }

    navCards(){
        this.setState({
            view: 'allCards',
        })
    }

    navNewCard(){
        this.setState({
            view: 'newCard',
        })
    }

    navNewCollection(){
        this.setState({
            view: 'newCollection',
        })
    }
    navCurrentCollection(){
        this.setState({
            view: 'currentCollection',
        })
    }

    setCurrentCollection(data){
        this.setState({
            currentCollection: data,
        })
    }
    setCurrentDeck(data){
        this.setState({
            currentDeck: data,
        })
    }

    render() { 
            return ( 
                <div class='wrapper'>
                    <div class='searchbar'>
                        <Searchbar />
                    </div>
                    <div class='navigation'>
                        <Navigation collections={() => this.navCollections()} cards={()=> this.navCards()} newCollection={() => this.navNewCollection()} quiz={()=> this.navQuiz()} current={()=> this.navCurrentCollection()} view={this.state.view} newCard={() => this.navNewCard()} />
                    </div>
                    
                    <div class='body' >
                        <Body view={this.state.view} currentDeck={()=>this.setCurrentDeck()} />
                    </div>

                </div>
            );
        }
    }
     
    export default App;