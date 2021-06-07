import React, { Component } from 'react';

class NewCard extends Component {
    constructor(props) {
        super(props);
            this.state = {
                collection: '',
                word: '',
                allComments:'',
             }
        }
    handleDefinitionChange = (event) =>{
        this.setState({
        body: event.target.value
        });
        };

    handleTermChange = (event) =>{
        this.setState({
        body: event.target.value
        });
       };

    handleSubmit = (event) =>{
        event.preventDefault();

        const newComment = {
            collection: this.props.collection,
            word: this.state.word,
            definition: this.state.definition,
        }
     };


    render() {
        return (           
           <div>
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
                        <input type="text" name="definition" onChange={(event) => this.handleDefinitionChange(event)}/>
                    </div>
                    <button type="submit" >Create</button>
                
                </form>
            </div>
         );
    }
}

export default NewCard;