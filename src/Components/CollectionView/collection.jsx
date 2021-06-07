import React from 'react';
import './collectionView.css';

function CollectionView(props){
    return(
        <div className='main'>
            <div class='header'>
                <h1>All Collections</h1>
            </div>
            <div className='grid'>
                {props.collections.map( (collection) =>{
                    return(
                        <div className="card">
                            <h3 >{collection.name}</h3>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
export default CollectionView;