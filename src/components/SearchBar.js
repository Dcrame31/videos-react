import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    onInputChange = (e) => {
        this.setState({ term: e.target.value})
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <input onChange={this.onInputChange} value={this.state.term} type="text"></input>
                        <label>Search Bar</label>
                    </div>
                </form>
            </div>
        )
    }
};

export default SearchBar;