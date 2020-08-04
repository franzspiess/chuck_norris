import {useReducer, useCallback} from 'react'
import { roundHouseReducer, initState, IState } from './roundHouseReducer'
import { fetchAction, fetchFinishedAction } from './martialActions'

const apiRoutes = {
  baseUrl:'https://api.chucknorris.io/jokes',
  appendRandom: '/random',
  appendSearchString: '/search?query='
}

export default function useFetchChuck () :
[IState, (searchString:string) => void] {
  const [state, dispatch] = useReducer(roundHouseReducer, initState)
  const fetchChuck = useCallback((searchString: string) => {
    const route = getRoute (searchString)
    fetch(route)
      .then(console.log)
      .then(data => dispatch(fetchFinishedAction(data)))
  }, [])

  return [state, fetchChuck]
}

function getRoute (searchString:string) {
  const {baseUrl, appendRandom, appendSearchString} = apiRoutes

  return baseUrl + (searchString.length ?
  appendSearchString + searchString :
  appendRandom)
}