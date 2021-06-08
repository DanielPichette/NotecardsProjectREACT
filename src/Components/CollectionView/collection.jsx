import React, {Component} from 'react';
import './collectionView.css';

class CollectionView extends Component{
    constructor(props){
    super(props)
    this.state = { 
        index: 0,
     }
    }

    getIndex(index){
        console.log(index)
        let response = index
        console.log(this.state.index)
        this.setIndex(response)
    }

    setIndex(index){
        this.setState({
            index: index
        })
        console.log('new index is:', this.state.index)
        this.props.currentCollection(this.state.index);
    }

    render() { 
        return(
            <div className='main' >
                <div class='header'>
                    <h1>All Collections</h1>
                    <h5>(total collections: {this.props.collections.length})</h5>
                </div>
                <div className='grid'>
                    {this.props.collections.map( (collection, index) =>{
                        return(
                            <div className="card" onClick={()=>this.getIndex(index)}>
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