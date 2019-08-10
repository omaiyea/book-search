import React from 'react';
import BookList from './BookList/BookList';
import Header from './Header/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        filter: 'All',
        printType: 'all',
        q: '',
    };
  }

  componentDidMount(){
    console.log('here');
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

  render(){
    return (
      <div>
        <Header 
          selected={this.state} 
          filterHandler={selected => this.setFilter(selected)}
          typeHandler={selected => this.setType(selected)}
          queryHandler={selected => this.setQuery(selected)}/>
        <BookList />
      </div>
    );
  }
}

export default App;
