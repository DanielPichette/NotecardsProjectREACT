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
                    
                    <div class='body' >
                        <Body view={this.state.view}/>
                    </div>

                </div>
            );
        }
    }
     
    export default App;