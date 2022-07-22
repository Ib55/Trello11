import React from 'react'

const AddItem = ({listAddItem,setEditMode}) => {
  return (
    <div onClick={()=>setEditMode(true)} className='d-flex justify-content-around w-100 btn'>
         <h4>+</h4>
         <p>{listAddItem ? 'Add Another List': 'Add a Card'}</p>
    </div>
  )
}

export default AddItem