const Notification = ({message}) => {
  
  if (message === null) {
    return null
  }
  
  const errorStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
  const succesStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
  return message.status ?(
    
      <div style={succesStyle}>
        {message.message}
      </div>
    )
    :
    (
      <div style = {errorStyle}>
        {message.message}
      </div>
    )
  }

export default Notification