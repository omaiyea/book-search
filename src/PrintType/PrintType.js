import React from 'react';

export default class PrintFilter extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        this.props.onTypeChange(e.target.value);
    }
    
    render(){
        const printTypes = ["All", "Books", "Magazines"];
        const printOptions = printTypes.map((book, i) => 
            <option value={book} key={i} name="printType">
                {book}
            </option>);
        return(
            <form>
                <label htmlFor="printType">Print Type: </label>
                <select id="printType" name="printType" onChange={this.handleChange}>
                    {printOptions}
                </select>
            </form>
        );
    }
}