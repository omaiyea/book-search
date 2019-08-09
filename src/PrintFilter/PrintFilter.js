import React from 'react';

export default class PrintFilter extends React.Component{
    render(){
        return(
            <form>
                <label htmlFor="filterType">Print Type: </label>
                <select id="filterType" name="filterType">
                    <option value="All">All</option>
                </select>
            </form>
        );
    }
}