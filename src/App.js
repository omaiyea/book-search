import React from 'react';
import BookList from './BookList/BookList';
import Header from './Header/Header';
import { statement } from '@babel/template';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        filter: '',
        printType: 'all',
        q: '',
      }
    }
  }

  componentDidMount(){
    console.log('here');
  }

  setSelected(selected) {
    this.setState({
      selected
    });
  }

  render(){
    return (
      <div>
        <Header selected={this.state.selected} changeHandler={selected => this.setSelected(selected)}/>
        <BookList />
      </div>
    );
  }
}

export default App;
