import React from 'react'
import { IState } from '../../infrastructure/roundHouseReducer'
import Loader from '../representational/Loader'
import FactHandler from './FactHandler'
import ErrorDisplay from '../representational/ErrorDisplay'

export default function Box({
  state: {
    chuckJoke,
    loading,
    errorMessage
  },
  fetchChuck
}: IBoxProps) {

  // determines whether to show loading spinner, error message or joke, depending on state
  function determineRender () {
    if (loading) return (<Loader />)
    if (errorMessage) return (<ErrorDisplay  errorMessage={errorMessage}/>)
    return (<FactHandler chuckJoke={chuckJoke} fetchChuck={fetchChuck} />)
  }
  return (
    <div className="box" >
      {determineRender()}
    </div>
  )
}

export interface IBoxProps {
  state: IState
  fetchChuck: (searchString: string) => void
}