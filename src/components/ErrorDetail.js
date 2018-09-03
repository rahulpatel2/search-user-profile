import React from 'react'

const ErrorDetail = (props) => {
  let errorMessage;
  if (props.error) {
    errorMessage = props.error
  }

  return(
    <div>
      {errorMessage}
    </div>
  )
}
export default ErrorDetail;
