import React from 'react';

export default class BookList extends React.Component{
    handlePrice(saleInfo){
        let price;
        if(saleInfo.saleability !== 'NOT_FOR_SALE'){
            price = <p>Price: {saleInfo.retailPrice.amount} {saleInfo.retailPrice.currencyCode}</p>;
        }else{
            price = <p>Not for sale </p>;
        }
        return price
    }

    render(){
        const books = Object.keys(this.props.data).map(key => 
            <div className="book" key={key}>
                <h2>{this.props.data[key].volumeInfo.title}</h2>
                <img src={this.props.data[key].volumeInfo.imageLinks.thumbnail} alt="book cover" />
                <p>Author: {this.props.data[key].volumeInfo.authors[0]}</p>
                {this.handlePrice(this.props.data[key].saleInfo)}
                <p>{this.props.data[key].searchInfo.textSnippet}</p>
            </div>);
        return(
            <div className="book__list">
                {books}
            </div>
        );
    }
}