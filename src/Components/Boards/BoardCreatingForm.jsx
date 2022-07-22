import React,{useState,useContext} from 'react'
import shortid from 'shortid'
import {BoardContext} from '../../Contexts/boardContext'



const BoardCreatingForm = () => {
const [boardTitle,setBoardTitle] = useState('')
const {dispatchBoardAction} = useContext(BoardContext)

const submitHandler=(e)=>{
e.preventDefault()
if(boardTitle){
    dispatchBoardAction({type:'CREATE_BOARD',payload:{id:shortid.generate(),title:boardTitle}})
setBoardTitle('')

}else{
    alert('Please Provide A Board Name')
}
}

  return (
    <div className='text-center'>
        <form onSubmit={(e)=>submitHandler(e)}>
            <input type="text" name='boardTitle' value={boardTitle} onChange={(e)=>setBoardTitle(e.target.value)} className=''/>
            <button type="submit" onClick={(e)=>submitHandler(e)} className='mx-2 btn btn-info'>Create Boards</button>
        </form>
    </div>
  )
}

export default BoardCreatingForm