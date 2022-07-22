import React, { useContext, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ListContext } from '../Contexts/listContext'
import TaskList from '../Components/BoardDetails/TaskList'
import shortid from 'shortid'
import AddItem from '../Components/BoardDetails/AddItem'
import AddItemForm from '../Components/BoardDetails/AddItemForm'

const BoardDetails = () => {
  const { boardId } = useParams()
  const { lists, dispatchListAction } = useContext(ListContext)
  const [listTitle, setListTitle] = useState('')
  const [editMode, setEditMode] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatchListAction({
      type: 'CREATE_LIST',
      payload: { id: shortid.generate(), title: listTitle, boardId: boardId },
    })
    setListTitle('')
    setEditMode(false)
  }

  return (
    <div>
      <Link to={'/'}>Back to Home</Link>
       
        <div className='d-flex justify-content-between w-100'>





          <div className='w-100'>
            <div className="row">{lists?.filter((item) => item.boardId === boardId)?.map((taskList) => (
              <div className="col-md-3"><TaskList taskList={taskList} key={taskList.id} /></div>
        ))}
        </div>
           
        </div>







          <div className='w-25'> {!editMode ? (
        <AddItem listAddItem setEditMode={setEditMode} />
      ) : (
        <AddItemForm
          submitHandler={submitHandler}
          title={listTitle}
          setEditMode={setEditMode}
          onChangeHandler={(e) => setListTitle(e.target.value)}
          listForm
        />
      )}</div>
        </div>
       



     




        </div>
       
      
   
    
  )
}

export default BoardDetails
