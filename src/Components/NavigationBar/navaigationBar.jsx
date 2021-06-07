import React from 'react';
import './navigation.css'



function Navigation(props){


return (
        <div class='navbody'>
            <h4 onClick={ () => props.collections()}>Collections</h4>
            <h4>Quiz Me!</h4>
            <h4 onClick={() => props.cards()}>All Cards</h4>
            <h4>New Collection</h4>
            <h4>New Card</h4>
        </div>
    );

}
 
export default Navigation;