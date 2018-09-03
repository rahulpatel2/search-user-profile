import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions';

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input id = "username" placeholder="Enter your git handle" />
        <button type="submit" onClick={this.props.searchByUserName} >
          Search
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    searchByUserName: ()=>{
      var input = document.getElementById("username");
      if (input.value.length !== 0){
        dispatch(search(input.value));
      }
      input.value = "";
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchBox);
