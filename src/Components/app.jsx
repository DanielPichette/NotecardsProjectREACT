import React, { Component } from 'react';
import Navigation from './NavigationBar/navaigationBar';
import Searchbar from './SearchBar/searchbar';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'main',
            allCards: [],
            collection:[],   
        }
    }
  
    render() { 
            return ( 
                <div class='wrapper'>
                    <div class='searchbar'>
                        <Searchbar />
                    </div>
                    <div class='navigation'>
                        <Navigation/>
                    </div>
                    
                    <div class='body'>Body</div>

                </div>
            );
        }
    }
     
    export default App;