import React from 'react'
import {IBoxProps} from '../containers/Box'


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
      />
      <button
        onClick={() => {
          fetchChuck(searchString)
          setSearchString('')
        }}
      >{ searchString.length ?
        'SEARCH' :
        'RANDOM JOKE'
      }
        </button>
    </div>
  )
}