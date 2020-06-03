import React, { Component } from 'react';

class SearchBar extends Component{
    // constructor(props){
    //     //binding
    //     super(props);
    //     this.onFormSubmit = this.onFormSubmit.bind(this);
    // }

    state = {term: ''};

    //Binding
    // onFormSubmit(e){
    //     e.preventDefault();
    //     console.log(this.state.term);
    // }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term);
        //console.log(this.state.term);
    }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>{/* onSubmit = {(e) => this.onFormSubmit(e)} */}
                    <div className="field">
                        <label>Search:</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;