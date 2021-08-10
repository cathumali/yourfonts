import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'
 
const handleChange = () => {
  console.log('sorFonts')
}
const SortAsciiFacesBy = () => (<React.Fragment>
    <Dropdown
      text='Sort by size'
      icon='sort'
      floating
      labeled
      button
      className='icon'
      onChange={handleChange}
    >
      <Dropdown.Menu>
        <Dropdown.Header icon='tags' content='Sort size by' />
        <Dropdown.Divider />
        <Dropdown.Item>Highest</Dropdown.Item>
        <Dropdown.Item>Lowest</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>



    <Dropdown
      text='Sort by price'
      icon='sort'
      floating
      labeled
      button
      className='icon'
      onChange={handleChange}
    >
      <Dropdown.Menu>
        <Dropdown.Header icon='tags' content='Sort price by' />
        <Dropdown.Divider />
        <Dropdown.Item>Highest</Dropdown.Item>
        <Dropdown.Item>Lowest</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


    <Dropdown
      text='Sort by date'
      icon='sort'
      floating
      labeled
      button
      className='icon'
      onChange={handleChange}
    >
      <Dropdown.Menu>
        <Dropdown.Header icon='tags' content='Sort date by' />
        <Dropdown.Divider />
        <Dropdown.Item>Desc</Dropdown.Item>
        <Dropdown.Item>Asc</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </React.Fragment>
)

export default SortAsciiFacesBy
