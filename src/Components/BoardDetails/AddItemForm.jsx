import React from 'react'

const AddItemForm = ({
    submitHandler,
    title,
    setEditMode,
    onChangeHandler,
    listForm
}) => {

    const  createHandler=(e)=>{
        if(title!==''){
            submitHandler(e)
        }else{
            alert('Please Enter the valid title for this list')
        }
    }
  return (
    <div className='container'>
      <div className='p-5'>
        <form onSubmit={(e)=>createHandler(e)}>
           <textarea name="" id="" cols="30" rows="2" autoFocus placeholder={listForm?'Enter the list Title':'Enter a title for this task'} value={title} onChange={onChangeHandler}></textarea>
        </form>
      </div>

      <div className='d-flex justify-content-around w-100'>
        <button className='btn'  onClick={(e) => {
            // e.stopPropagation();
            createHandler(e);
          }}>

          {listForm ? "Add list" : "Add task"}
        </button>
        <p onClick={(e)=>setEditMode(false)} className='btn'>❌</p>
        
      </div>
    </div>
  )
}

export default AddItemForm