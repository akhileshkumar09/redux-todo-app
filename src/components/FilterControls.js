import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../store/todoSlice'

function FilterControls() {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.todos.filter)

    const handleFilterChange = (filterType) =>{
        dispatch(setFilter(filterType))
    }

    
  return (
    <div>
        <button onClick={()=>handleFilterChange('all')}
        style={{fontWeight : filter === 'all' ? 'bold' : 'normal'}}>
            All
        </button>
        <button onClick={()=>handleFilterChange('completed')}
        style={{fontWeight : filter === 'completed' ? 'bold' : 'normal'}}>
            Completed
        </button>
        <button onClick={()=>handleFilterChange('incompleted')}
        style={{fontWeight : filter === 'incompleted' ? 'bold' : 'normal'}}>
            Incompleted
        </button>
    </div>
  )
}

export default FilterControls