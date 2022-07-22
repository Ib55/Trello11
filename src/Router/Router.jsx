import React from 'react'
import Board from '../Pages/Board'
import BoardDetails from '../Pages/BoardDetails'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const Router= () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Board/>} />
      <Route path='/:boardId' element={<BoardDetails/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router