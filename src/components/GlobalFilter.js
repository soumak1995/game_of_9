import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { useAsyncDebounce } from 'react-table'
import '../css/globalFilter.css'
export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter)
  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 1000)
  return (
    <span className="search">
      <SearchIcon fontSize="small"/>
      <input
        className='searchInput'
        value={value || ''}
        placeholder="Search Players"
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  )
}