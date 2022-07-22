import React,{useContext,useState} from 'react'
import {BoardContext} from '../../Contexts/boardContext'
import {ListContext} from '../../Contexts/listContext'
import {TaskContext} from '../../Contexts/taskContext'
import TaskCard from './TaskCard'
import AddItem from './AddItem'
import AddItemForm from './AddItemForm'
import shortid from 'shortid'

const TaskList = ({taskList}) => {

const [taskTitle,setTaskTitle] = useState('')
const [editMode,setEditMode] = useState(false)
//context
  const {dispatchBoardAction} = useContext(BoardContext)
  const {dispatchListAction} = useContext(ListContext)
  const {tasks:allTasks,dispatchTaskAction} = useContext(TaskContext)


    const {title} = taskList
    const removeListHandler=(e)=>{
      e.preventDefault()
      //list
      dispatchListAction({type:'DELETE_LIST',payload:{id:taskList.id}})
      dispatchBoardAction({type:'REMOVE_LIST_ID_FROM_A_BOARD',payload:{id:taskList.boardId,listId:taskList.id}})
    }
    

    //submithandler
    const submitHandler =(e)=>{
      e.preventDefault()
            const listId = taskList.id
            const id = shortid.generate()
            const task={
              id,
              listId,
              title:taskTitle,
              boardId:taskList.boardId
            }
      
      dispatchTaskAction({type:'CREATE_TASK',payload:task})
      dispatchListAction({type:'ADD_TASK_ID_TO_LIST',payload:{id:listId,taskId:task.id}})
      dispatchBoardAction({type:'ADD_TASKS_ID_TO_BOARD',payload:{id:task.boardId,taskId:task.id}})
      setTaskTitle('')
      setEditMode(false)
    }
  return (
   <div>
    
        <div className='d-flex justify-content-around w-100 bg-info m-5'>
            <h5 className='btn'>{title}</h5>
            <h5 onClick={(e)=>removeListHandler(e)} className='btn'>❌</h5>
        </div>

        
        {
          taskList?.tasks?.map((item)=>{
            return allTasks.find(t=>t.id===item)
          })?.map((task,index)=>(
            <TaskCard task={task} index={index} key={task.id} id={task.id} taskList={taskList} />
          ))
        }
        {
          editMode?(<AddItemForm submitHandler={submitHandler} title={taskTitle} onChangeHandler={(e)=>setTaskTitle(e.target.value)} editMode={editMode} setEditMode={setEditMode}   />):(<AddItem setEditMode={setEditMode}/>)
        }
   </div>
   

    
  )
}

export default TaskList