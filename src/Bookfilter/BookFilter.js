import React from 'react';

export default class BookFilter extends React.Component{
    render(){
        const bookFilters = ["No Filter", "Partial", "Full", "Free-eBooks", "Paid-eBooks", "eBooks"];
        const bookOptions = bookFilters.map((filter, key) => 
            <option value={filter} key={key} name="filter">{filter}</option>);
        return(
            <form>
                <label htmlFor="bookType">Book Type: </label>
                <select id="bookType" name="bookType">
                    {bookOptions}
                </select>
            </form>
        )
    }
}