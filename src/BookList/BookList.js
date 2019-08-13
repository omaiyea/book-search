import React from 'react';
import './BookList.css';

export default class BookList extends React.Component{
    render(){

        let data = this.props.data;

        if(this.props.printType === 'Books'){
            data = Object.keys(data)
            .filter(key => data[key].volumeInfo.printType === 'BOOK')
            .map(key => data[key]);
        }else if(this.props.printType === 'Magazines'){
            data = Object.keys(data)
            .filter(key => data[key].volumeInfo.printType === 'MAGAZINE')
            .map(key => data[key]);
        }

        if(this.props.bookFilter === 'eBooks'){
            data = Object.keys(data)
            .filter(key => data[key].saleInfo.isEbook)
            .map(key => data[key]);
        }else if(this.props.bookFilter === 'Print Books'){
            data = Object.keys(data)
            .filter(key => !(data[key].saleInfo.isEbook))
            .map(key => data[key]);   
        }

        /*need to check if each property exists because  data is not consistent in the API response */
        const books = Object.keys(data).map(key => 
            <div className="book" key={key}>
                <h2>{this.props.data[key].volumeInfo.title}</h2>
                {this.props.data[key].volumeInfo.imageLinks ? <img src={this.props.data[key].volumeInfo.imageLinks.thumbnail} alt="book cover" /> : ''}
                <div className="info">
                    <p>{this.props.data[key].volumeInfo.authors ? 'Author: ' + this.props.data[key].volumeInfo.authors[0] : 'No Author Listed'}</p>
                    <p>{this.props.data[key].saleInfo.saleability === 'FOR_SALE' ? 'Price: ' + this.props.data[key].saleInfo.retailPrice.amount + ' ' + this.props.data[key].saleInfo.retailPrice.currencyCode : 'Not for sale'}</p>
                    <a href={this.props.data[key].volumeInfo.infoLink} target="blank">More Info</a>
                </div><br />
                <p className="desc">{this.props.data[key].searchInfo ? this.props.data[key].searchInfo.textSnippet : 'No Snippet Available'}</p><br/>
            </div>);
        return(
            <div className="book__list">
                {books}
            </div>
        );
    }
}


      
                
