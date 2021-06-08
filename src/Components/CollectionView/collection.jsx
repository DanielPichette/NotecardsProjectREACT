import React, {Component} from 'react';
import './collectionView.css';

class CollectionView extends Component{
    constructor(props){
    super(props)
    this.state = { 
        ID: 1,
     }
    }

    getID(id){
        console.log(id)
        let response = id
        console.log(this.state.ID)
        this.setID(response)
    }

    setID(id){
        this.setState({
            ID: id,
        })
        console.log('new ID is:', this.state.ID)
        this.props.currentCollection(this.state.ID);
    }

    render() { 
        return(
            <div className='main' >
                <div class='header'>
                    <h1>All Collections</h1>
                    <h5>(total collections: {this.props.collections.length})</h5>
                </div>
                <div className='grid'>
                    {this.props.collections.map( (collection) =>{
                        return(
                            <div className="card" onClick={(event)=>this.props.currentCollection(collection.id, collection.name)}>
                                <h3 >{collection.name}</h3>
                            </div>
                        )
                    })}
    
                </div>
            </div>
        )
    }
}
export default CollectionView;