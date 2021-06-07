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
            allCollections: collections.data
        })
        console.log(this.state.allCollections)
    };

    getCards = async() => {
        let notecards = await axios.get(`http://127.0.0.1:8000/notecards/`)
        this.setState({
            allCards: notecards.data
        })
        console.log(this.state.allCards)
    }


    render() { 
       if(this.props.view==='collections'){
          return (
            <div class='content' >
              <CollectionView collections={this.state.allCollections}/>
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