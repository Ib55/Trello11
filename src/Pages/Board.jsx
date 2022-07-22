import React from 'react'
import BoardCreatingForm from '../Components/Boards/BoardCreatingForm'
import BoardList from '../Components/Boards/BoardList'


const Board = () => {
  return (
    <div className='container mt-5'>
      <BoardCreatingForm/>
       <BoardList/>
    </div>
  )
}

export default Board