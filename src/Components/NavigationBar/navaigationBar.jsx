import React from 'react';
import './navigation.css'



function Navigation(props){


return (
        <div class='navbody'>
            <h4 onClick={ () => props.current()}>Current Collection</h4>
            <h4 onClick={ () => props.collections()}>All Collections</h4>
            <h4 onClick={() => props.quiz()}>Quiz Me! </h4>
            <h4 onClick={() => props.cards()}>All Cards</h4>
            <h4 onClick={() => props.newCollection()}>New Collection</h4>
            <h4 onClick={() => props.newCard()}>New Card</h4>
        </div>
    );

}
 
export default Navigation;