import React from 'react'

const UserDetail = (props) => {
  if(props.user_detail == null){
    return null;
  }
  return(
    <div>
      <div><img src={props.user_detail.avatar_url} width='50px' height='50px'></img></div>
      <div><a href={props.user_detail.html_url}>{props.user_detail.name}</a></div>
      <div>{props.user_detail.company}</div>
      <div>{props.user_detail.location}</div>
    </div>
  )
}

export default UserDetail;
