import React,{useContext} from "react";
import {Link} from 'react-router-dom'
import { BoardContext } from "../../Contexts/boardContext";
import {ListContext} from '../../Contexts/listContext'
import {TaskContext} from '../../Contexts/taskContext'



const BoardItem = ({ item }) => {
const {dispatchBoardAction} = useContext(BoardContext)
const {lists,dispatchListAction} = useContext(ListContext)
const {tasks,dispatchTaskAction} = useContext(TaskContext)






  const removeHandler=(e)=>{
  e.preventDefault()
  e.stopPropagation()
  // Board
  dispatchBoardAction({type:'DELETE_BOARD',payload:{id:item.id}})
  //List
  const listTobeDeleted=lists.filter(list=>list.boardId===item.id)
  listTobeDeleted.forEach(list=>{
    dispatchListAction({type:'DELETE_LIST',payload:{id:list.id}})
  })
  }
  //Task
  const tasktobeDeleted = tasks.filter(task=>task.boardId===item.id)
  tasktobeDeleted.forEach(task=>{
    dispatchTaskAction({type:'DELETE_TASK',payload:{id:task.id}})
  })
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-around">
          <h4>{item.title}</h4>
          <h4 className="cross btn" onClick={(e)=>removeHandler(e)}>❌</h4>
        </div>
        <Link to={`/${item.id}`}>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          {item.lists.length}
        </a>
        </Link>
      </div>
    </div>
  );
};

export default BoardItem;
