import React, { useState, useContext } from 'react'
import { TaskContext } from '../../Contexts/taskContext'
import { ListContext } from '../../Contexts/listContext'
import { BoardContext } from '../../Contexts/boardContext'
import AddItemForm from './AddItemForm'

const TaskCard = ({ task, taskList, index }) => {
  const [taskTitle, setTaskTitle] = useState(task.title)
  const [editMode, setEditMode] = useState(false)

  //context
  const { dispatchTaskAction } = useContext(TaskContext)
  const { dispatchListAction } = useContext(ListContext)
  const { dispatchBoardAction } = useContext(BoardContext)
  const removeTaskHandler = (e) => {
    e.preventDefault()
    dispatchTaskAction({ type: 'DELETE_TASK', payload: { id: task.id } })
    dispatchListAction({
      type: 'REMOVE_TASK_ID_FROM_LIST',
      payload: { id: task.listId, taskId: task.id },
    })
    dispatchBoardAction({
      type: 'REMOVE_TASK_ID_FROM_A_BOARD',
      payload: { id: task.boardId, taskId: task.id },
    })
  }

  const submitHandler=(e)=>{
   e.preventDefault()
    dispatchTaskAction({type:'UPDATE_TASK',payload:{id:task.id,title:taskTitle}})
    setEditMode(false)
  }
  return (
    <div>
      {editMode ? (
        <AddItemForm title={taskTitle} onChangeHandler={(e)=>setTaskTitle(e.target.value)} setEditMode={setEditMode} submitHandler={submitHandler} />
      ) : (
        <div onClick={(e)=>{setEditMode(true)}} className='d-flex justify-content-around w-100 m-5'>
          <p className='btn'>{taskTitle}</p>
          <p onClick={removeTaskHandler} className="btn">
            ❌
          </p>
        </div>
      )}
    </div>
  )
}

export default TaskCard
