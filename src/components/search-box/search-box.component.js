import { Component } from 'react';

import './search-box.styles.css';

class SearchBox extends Component {

    render(){
        return(
            <input 
            className= {`search-box ${this.props.className}`}
            type='search' 
            placeholder={this.props.placeholder}
            onChange={this.props.onChangeHandler}
            />
        );
    }
}

export default SearchBox;

/*
Notes:
Props of a searchbox we want to change:
1. We want a type 'search' - behavior we want in a search box (i.e. what we input in the textfield, including the 'x' that appears allowing us to clear the text)
2. We want a placeholder text to be generic (i.e. this.props.placeholder). We might be searching different things, so hardcoding 'search profiles' is not ideal).
3. Same thing for className, keep it generic. 
4. Once we do this, go to App.js and input what we want to say i.e. 'search profiles'.
*/