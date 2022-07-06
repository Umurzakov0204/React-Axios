import React from 'react'
import "./TodosList.css"
function TodosList(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {props.data?props.data.map(elem => {
            return(
              <tr key={elem.id}>
                <td>{elem.userId}</td>
                <td>{elem.id}</td>
                <td>{elem.title}</td>
                <td>{elem.completed?'Correct':'Incorrect'}</td>
              </tr>
            )
          }):'LOADING...'}
        </tbody>
      </table>
    </div>
  )
}

export default TodosList