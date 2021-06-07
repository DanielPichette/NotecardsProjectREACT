import React, { Component} from 'react';
import './searchBar.css';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            search:'base',
            searchResults: [],
        }
    }
    
    handleChange = (event) =>{
        
        this.setState({
        search: event.target.value
        });
        console.log(this.state.search)
        }

    render() { 
        return (
            <div class='searchbody' >
                <form class="SearchBar" >
                <input class="search" type="text" name="searchbar" placeholder="Search.." onChange={(event) => this.handleChange(event)}>
            </input>
            <button type="submit">Search</button>
                </form>

            </div>
        );
    }
}
 
export default SearchBar;