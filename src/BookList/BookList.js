import React from 'react';

export default class BookList extends React.Component{
    handlePrice(saleInfo){
        let price;
        if(saleInfo.saleability === 'FOR_SALE'){
            price = <p></p>;
        }else{
            price = <p>Not for sale </p>;
        }
        return price
    }

    render(){

        /*filter if user only wants to see certain print type - not working */
        let data = this.props.data;
        if(this.props.printType === 'Books'){
            data = Object.keys(data)
            .filter(key => data[key].volumeInfo.printType === 'BOOKS');
        }else if(this.props.printType === 'Magazines'){
            data = Object.keys(data)
            .filter(key => data[key].volumeInfo.printType === 'MAGAZINE');
        }


        /* not hooked up to the above */
        const books = Object.keys(data).map(key => 
            <div className="book" key={key}>
            <h2>{this.props.data[key].volumeInfo.title}</h2>
                <img src={this.props.data[key].volumeInfo.imageLinks.thumbnail} alt="book cover" />
                <p>{this.props.data[key].volumeInfo.authors ? 'Author: ' + this.props.data[key].volumeInfo.authors[0] : 'No Author Listed'}</p>
                <p>{this.props.data[key].saleInfo.saleability === 'FOR_SALE' ? 'Price: ' + this.props.data[key].saleInfo.retailPrice.amount + ' ' + this.props.data[key].saleInfo.retailPrice.currencyCode : 'Not for sale'}</p>
                <p>{this.props.data[key].searchInfo ? this.props.data[key].searchInfo.textSnippet : 'No Snippet Available'}</p>
              </div>);
        return(
            <div className="book__list">
                {books}
            </div>
        );
    }
}
      
                
