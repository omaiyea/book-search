import React from 'react';

export default class BookFilter extends React.Component{
    render(){
        return(
            <form>
                <label htmlFor="bookType">Book Type: </label>
                <select id="bookType" name="bookType">
                    <option value="No Filter">No Filter</option>
                </select>
            </form>
        )
    }
}