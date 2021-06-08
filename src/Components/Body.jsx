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

    setCurrentCollection(index){
        //let collections= this.state.allCollections
        //let selection= index
        this.setState({
            currentCollection: index,
        })
        console.log('TEST:', index)
    }
    getCurrentDeck(){
        let currentCollection=this.state.currentCollection
        let all=this.state.allCards
        let index= this.state.currentCollection = 1
        let deck= all.filter( card => card.collection === currentCollection[index])
        console.log('CURRENT DECK')
        console.log(deck);
        ;
    };


    render() { 
       if(this.props.view==='collections'){
          return (
            <div class='content' >
              <CollectionView collections={this.state.allCollections} currentCollection={(data)=>this.setCurrentCollection(data)}/>
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