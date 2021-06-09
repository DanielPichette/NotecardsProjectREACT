import React, { Component } from 'react';
import axios from 'axios';

class NewCard extends Component {
    constructor(props) {
        super(props);
            this.state = {
                collection: 0,
                word: '',
                definition:'',
             }
        }
    handleDefinitionChange = (event) =>{
        this.setState({
        body: event.target.value
        });
        };

    handleTermChange = (event) =>{
        this.setState({
        word: event.target.value
        });
       };

    handleSubmit = async(event) =>{
        //event.preventDefault();

        const newCard = {
            collection: this.props.collection,
            word: this.state.word,
            definition: this.state.definition,
        }
        await axios.post(`http://127.0.0.1:8000/notecards/`,newCard);
     };


    render() {
        return (           
           <div>
               <div className='header'>
                <h2> Collection: {this.props.name}</h2>
               <h2>New Card:</h2>
               </div>
              
                <form className="newCardForm" onSubmit={(event) => this.handleSubmit(event)}>
                    <div>
                        <label>Term</label>
                    </div> 
                    <div>
                        <input placeholder='Please make sure you have a collection selected before you attemopt to create a new card. cards without a collection will be lost in cyberspace!' type="text" name="word" onChange={(event) => this.handleTermChange(event)}/>
                    </div>
                    <div>
                        <label>Definition</label>
                    </div> 
                    <div>
                        <input type="text" name="definition" placeholder='Please make sure you have a collection selected before you attemopt to create a new card. cards without a collection will be lost in cyberspace!' onChange={(event) => this.handleDefinitionChange(event)}/>
                    </div>
                    <button type="submit" >Create</button>
                
                </form>
            </div>
         );
    }
}

export default NewCard;