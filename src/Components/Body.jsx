import React, { Component } from 'react'; 
import axios from 'axios';
import CollectionView from './CollectionView/collection'
import NewCollection from './NewCollectionForm/NewCollectionForm'
import CardView from './CardView/cardview';


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCollections: [],
            allCards: [],
            currentCollection: 0,
            currentDeck: [],
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

    setCurrentCollection(id){
        this.setState({
            currentCollection: id,
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
              <CollectionView collections={this.state.allCollections} currentCollection={(id)=>this.setCurrentCollection(id)}/>
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
        };
    
    
  }
}
 
export default Body;