import React from 'react';

export default class BookFilter extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.onFilterChange(e.target.value);
    }

    render(){
        const bookFilters = ["No Filter", "Partial", "Full", "Free-eBooks", "Paid-eBooks", "eBooks"];
        const bookOptions = bookFilters.map((filter, key) => 
            <option value={filter} key={key} name="filter">{filter}</option>);
        return(
            <form>
                <label htmlFor="bookType">Book Type: </label>
                <select id="bookType" name="bookType" onChange={this.handleChange}>
                    {bookOptions}
                </select>
            </form>
        )
    }
}