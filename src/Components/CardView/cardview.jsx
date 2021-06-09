import React from 'react';

function CardView(props){
    return(
        <div className='main'>
            <div class='header'>
                <h1>All Cards</h1>
                <h2>(total Cards: {props.cards.length})</h2>

            </div>
            <div className='grid'>
                {props.cards.map( (card) =>{
                    return(
                        <div className="card">
                            <h3 >{card.word}</h3>
                            <h5>definition: <br/> {card.definition}</h5>
                            <h9> <br/> <br/> (collection: {card.collection})</h9>
                            
                        </div>
                    )
                })};

            </div>
        </div>
    )
}
export default CardView;