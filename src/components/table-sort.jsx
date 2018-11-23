import React from 'react'
import { Menu, Input } from 'semantic-ui-react'

const Filter = ({setFilter, filterBy, searchQuery, setSearchQuery }) => {

	return (
    <Menu text>
          <Menu.Item header>Sort By</Menu.Item>
      <Menu.Item
            active={filterBy  === 'all'}
            onClick={setFilter.bind(this, 'all')}
          />
          <Menu.Item
            active={filterBy  === 'title'}
            onClick={setFilter.bind(this, 'title')}
          >Title</Menu.Item>
          <Menu.Item
            active={filterBy  === 'price'}
            onClick={setFilter.bind(this, 'price')}
          >Price</Menu.Item>
      <Menu.Item
            active={filterBy  === 'oldPrice'}
            onClick={setFilter.bind(this, 'oldPrice')}
          >Old price</Menu.Item>
      <Menu.Item>
        <Input 
          className='searchPanel'
          icon='search'
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery} 
          placeholder='Find'
        />
        </Menu.Item>
    </Menu>
	)
}

export default Filter;