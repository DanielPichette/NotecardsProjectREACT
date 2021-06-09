import React, { Component } from 'react';
import axios from 'axios';

class UpdateCard extends Component {
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

        const updateCard = {
            //id:this.props.CardId,
            word: this.state.word,
            definition: this.state.definition,
            collection: this.props.collectionId,
        }
        await axios.put(`http://127.0.0.1:8000/notecards/${this.props.CardId}/`,updateCard);
     };


    render() {
        return (           
           <div>
               <div className='header'>
                    <h2> Collection: {this.props.collectionName}</h2>
                    <h2>Update Card:</h2>       
               </div>
               
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
                    <button type="submit" >Update</button>
                
                </form>
            </div>
         );
    }
}

export default UpdateCard;