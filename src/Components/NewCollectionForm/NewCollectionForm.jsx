import React, { Component } from 'react';
import axios from 'axios';

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
        console.log("testingtesting", this.state.name)
       };

    handleSubmit = async(event) =>{
        //event.preventDefault();

        let newCollection = {
                name: this.state.name
        }

        await axios.post(`http://127.0.0.1:8000/collections/`,newCollection);

        // const newComment = {
        //     collection: this.props.collection,
        //     word: this.state.word,
        //     definition: this.state.definition,
        // }
     };


    render() {
        return (           
           <div>
                <form className="newCollection" onSubmit={(event) => this.handleSubmit(event)}>
                    <div>
                        <label> Collection Name</label>
                    </div> 
                    <div>
                        <input type="text" name="name" onChange={(event) => this.handleChange(event)}/>
                    </div>

                    <button type="submit" >Create</button>
                
                </form>
            </div>
         );
    }
}

export default NewCollection;