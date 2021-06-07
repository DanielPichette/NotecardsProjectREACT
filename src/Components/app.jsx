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
    render() { 
            return ( 
                <div class='wrapper'>
                    <div class='searchbar'>
                        <Searchbar />
                    </div>
                    <div class='navigation'>
                        <Navigation collections={this.navCollections()} cards={this.allCards()}/>
                    </div>
                    
                    <div class='body' >
                        <Body view={this.state.view}/>
                    </div>

                </div>
            );
        }
    }
     
    export default App;