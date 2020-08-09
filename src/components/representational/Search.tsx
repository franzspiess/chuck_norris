import React from 'react'
import {IBoxProps} from '../containers/Box'

// Input and button to initialize network request
// Stores value in useState hook and resets upon fetch

export default function Search ({
  fetchChuck
} : {
  fetchChuck: IBoxProps['fetchChuck']
}) {
  const [searchString, setSearchString] = React.useState('')
  const handleChange = (event:React.FormEvent<HTMLInputElement>) => {
    setSearchString(event.currentTarget.value)
  }
  return (
    <div className='search-box'>
      <input
        value={searchString}
        onChange={handleChange}
        autoFocus
      />
      <button
        onClick={() => {
          fetchChuck(searchString)
          setSearchString('')
        }}
      >{ searchString.length > 3 ?
        'SEARCH' :
        'RANDOM FACT'
      }
        </button>
    </div>
  )
}