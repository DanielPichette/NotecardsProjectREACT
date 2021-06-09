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
                        </div>
                    )
                })};

            </div>
        </div>
    )
}
export default CardView;