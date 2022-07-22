import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import BoardProvider from './Contexts/boardContext'
import ListProvider from './Contexts/listContext'
import TaskProvider from './Contexts/taskContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BoardProvider>
    <ListProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </ListProvider>
  </BoardProvider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
