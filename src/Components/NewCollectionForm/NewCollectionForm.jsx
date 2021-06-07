import React, { Component } from 'react';

class NewCollection extends Component {
    constructor(props) {
        super(props);
            this.state = {
                name: '',
             }
        }
    
    handleChange = (event) =>{
        this.setState({
        name: event.target.value
        });
       };

    handleSubmit = (event) =>{
        event.preventDefault();

        // const newComment = {
        //     collection: this.props.collection,
        //     word: this.state.word,
        //     definition: this.state.definition,
        // }
     };


    render() {
        return (           
           <div>
                <form className="newCardForm" onSubmit={(event) => this.handleSubmit(event)}>
                    <div>
                        <label>Name</label>
                    </div> 
                    <div>
                        <input type="text" name="word" onChange={(event) => this.handleChange(event)}/>
                    </div>

                    <button type="submit" >Create</button>
                
                </form>
            </div>
         );
    }
}

export default NewCollection;