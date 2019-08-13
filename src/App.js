import React from 'react';
import BookList from './BookList/BookList';
import Header from './Header/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        filter: 'No filter',
        type: 'All',
        q: '',
        error: '',
        results: {},
    };
  }

  setFilter(filter) {
    this.setState({
      filter: filter,
    });
  }

  setType(type) {
    this.setState({
      type: type,
    });
  }

  setQuery(query) {
    this.setState({
      q: query,
    });
  }

  fetchResults(text){
    const key = '';
    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.q}&key=${key}`;
    fetch(url)
    .then(res => {
        if(!res.ok) {
            throw new Error('Something went wrong, please try again later');
        }
        return res.json();
    })
    .then(data => {
      this.setState({
        results: data.items
      });
    })
    .catch(err => {
        this.setState({
            error: err.message
        });
    });
    console.log(url);
  }

  render(){
    return (
      <div>
        <Header 
          selected={this.state} 
          filterHandler={selected => this.setFilter(selected)}
          typeHandler={selected => this.setType(selected)}
          queryHandler={selected => this.setQuery(selected)}
          submitHandler={(text) => this.fetchResults(text)}/>
       {Object.keys(this.state.results).length > 1 ? <BookList 
          data={this.state.results}
          bookFilter={this.state.filter}
          printType={this.state.type}/> : ''}
        {this.state.error !== '' ? <div className='error__message'><p>{this.state.error}</p></div> : ''}
      </div>
    );
  }
}

export default App;
