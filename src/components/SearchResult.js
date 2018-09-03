import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserDetail from './UserDetail'
import ErrorDetail from './ErrorDetail'

class SearchResult extends Component {
  render() {
    return (
      <div>
        <UserDetail user_detail={this.props.user_details}/>
        <ErrorDetail error={this.props.error}/>
      </div>
    );
  }
}

const errorMessage = error => {
  if(error){
    return error.response.data.message;
  }
  return error;
}

const mapStateToProps = state => ({
  user_details: state.user_details,
  error: errorMessage(state.error)
})

// const mapStateToProps = state => ({
//   user_detail: state.user_details
// })


export default connect(mapStateToProps, null)(SearchResult)
