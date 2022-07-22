import {useReducer,createContext} from 'react'
import ListReducer from '../reducer/ListReducer'
 

export const ListContext = createContext()


const ListProvider=(props)=>{
const [lists,dispatchListAction] = useReducer(ListReducer,[])


return(
<ListContext.Provider value={{lists,dispatchListAction}}> 
    {props.children}
</ListContext.Provider>
)

}
export default ListProvider