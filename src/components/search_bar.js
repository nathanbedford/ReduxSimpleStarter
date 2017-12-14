import React, {Component} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = { term: ''};
    }

    render() { 
        return (
            <form onSubmit={ (e) => {e.preventDefault(); this.onSearchClick();}}>
                <div className="search-bar">
                    <input 
                        value={this.state.term}
                        onChange={ event => this.onInputChange(event.target.value)}/>
                        <button 
                            type="submit"
                            className="btn btn-primary">Search</button>
                </div>
            </form>
        );
    }

    onInputChange(term){
        this.setState({term});
        //this.props.onSearchTermChange(term);
    }

    onSearchClick(){
        this.props.onSearchTermChange(this.state.term);
    }
}

export default SearchBar;