import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'
 
const ascDescOptions = [
  {
    key: 'desc',
    text: 'Desc',
    value: 'desc',
  },
  {
    key: 'asc',
    text: 'Asc',
    value: 'asc',
  }  
]
const highestLowest = [
  {
    key: 'Highest',
    text: 'Highest',
    value: 'desc',
  },
  {
    key: 'Lowest',
    text: 'Lowest',
    value: 'asc',
  }  
]
const SortAsciiFacesBy = (props) => {
  
  const handleChange = (event: SyntheticEvent, data: object) => {
    props.sortByFilterHandle(data)
  }

  return  (<React.Fragment>
      <Dropdown
        text='Sort by size'
        name="size"
        icon='sort'
        floating
        labeled
        button
        className='icon'
        onChange={handleChange}
        options={ascDescOptions} 
      /> 
      
      <Dropdown
        text='Sort by price'
        name="price"
        icon='sort'
        floating
        labeled
        button
        className='icon'
        onChange={handleChange}
        options={highestLowest} 
      /> 


      <Dropdown
        text='Sort by date'
        name="date"
        icon='sort'
        floating
        labeled
        button
        className='icon'
        onChange={handleChange}
        options={ascDescOptions} 
      /> 
    </React.Fragment>
  )
}

export default SortAsciiFacesBy
