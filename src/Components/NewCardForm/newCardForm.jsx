import React, { Component } from 'react';
import axios from 'axios';

class NewCard extends Component {
    constructor(props) {
        super(props);
            this.state = {
                collection: 0,
                word: '',
                definition:'Please make sure you have a collection selected before you attemopt to create a new card. cards without a collection will be lost in cyberspace!',
             }
        }
    handleDefinitionChange = (event) =>{
        this.setState({
        definition: event.target.value
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
               <h2></h2>
                <form className="newCardForm" onSubmit={(event) => this.handleSubmit(event)}>
                    <div>
                        <label>Term</label>
                    </div> 
                    <div>
                        <input type="text" name="word" onChange={(event) => this.handleTermChange(event)}/>
                    </div>
                    <div>
                        <label>Definition</label>
                    </div> 
                    <div>
                        <input type="text" name="definition" placeholder={this.state.definition} onChange={(event) => this.handleDefinitionChange(event)}/>
                    </div>
                    <button type="submit" >Create</button>
                
                </form>
            </div>
         );
    }
}

export default NewCard;