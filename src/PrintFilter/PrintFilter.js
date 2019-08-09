import React from 'react';

export default class PrintFilter extends React.Component{
    render(){
        const printTypes = ["All", "Books", "Magazines"];
        const printOptions = printTypes.map((book, i) => 
            <option value={book} key={i}>{book}</option>);
        return(
            <form>
                <label htmlFor="filterType">Print Type: </label>
                <select id="filterType" name="filterType">
                    {printOptions}
                </select>
            </form>
        );
    }
}