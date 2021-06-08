import React, { Component } from 'react'; 
import axios from 'axios';
import CollectionView from './CollectionView/collection'
import NewCollection from './NewCollectionForm/NewCollectionForm'
import CardView from './CardView/cardview';
import Quiz from './Quiz/quiz';
import CurrentCollection from './currentCollection/currentCollection';


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCollections: [],
            allCards: [],
            currentCollection: 1,
            currentCollectionName: 'No collection selected',
            currentDeck: [{id: 1, word: "please select a collection",definition:"No collection selected"}],
        }
    }
    componentDidMount(){
        this.getCollections()
        this.getCards()
    }

    getCollections = async() => {
        let collections = await axios.get(`http://127.0.0.1:8000/collections/`)
        console.log(collections)
        this.setState({
            allCollections: collections.data,
        })
        console.log('all collections:',this.state.allCollections)
    };

    getCards = async() => {
        let notecards = await axios.get(`http://127.0.0.1:8000/notecards/`)
        this.setState({
            allCards: notecards.data
        })
        console.log('all notecards:',this.state.allCards)
    }

    setCurrentCollection(id,name){
        this.setState({
            currentCollection: id,
            currentCollectionName: name,
        })
        let deck= this.state.allCards.filter(function(card){return(card.collection===id)});
        this.setState({
            currentDeck: deck,
        });
        this.getCurrentDeck();
    }

    getCurrentDeck(){
        console.log('CURRENT DECK', this.state.currentDeck)
    
    };


    render() { 
       if(this.props.view==='collections'){
          return (
            <div class='content' >
              <CollectionView collections={this.state.allCollections} currentCollection={(id,name)=>this.setCurrentCollection(id,name)}/>
            </div>
          );
        }
    
        else if (this.props.view==='newCollection'){
          return(
            <div>
              <NewCollection />
            </div>
            );
        }

        else if (this.props.view==='allCards'){
            return(
              <div>
                <CardView cards={this.state.allCards}/>
              </div>
            );
        }

        else if (this.props.view==='quiz'){
            return(
              <div>
                <Quiz deck={this.state.currentDeck} name={this.state.currentCollectionName}/>
              </div>
            );
        }
        else if (this.props.view==='currentCollection'){
            return(
              <div>
                <CurrentCollection collection={this.state.currentCollectionName} cards={this.state.currentDeck}/>
              </div>
            );
        }
    
  }
}
 
export default Body;