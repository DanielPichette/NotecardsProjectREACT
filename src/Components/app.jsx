import React, { Component } from 'react';
import Navigation from './NavigationBar/navaigationBar';
import Searchbar from './SearchBar/searchbar';
import Body from './Body'
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'allCards',
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

    navCards(){
        this.setState({
            view: 'allCards',
        })
    }

    navNewCollection(){
        this.setState({
            view: 'newCollection',
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
                        <Navigation collections={() => this.navCollections()} cards={()=> this.navCards()} newCollection={() => this.navNewCollection()} />
                    </div>
                    
                    <div class='body' >
                        <Body view={this.state.view} currentDeck={()=>this.setCurrentDeck()} currentCollection={()=>this.currentCollection()}/>
                    </div>

                </div>
            );
        }
    }
     
    export default App;