import {useReducer} from 'react'
import { roundHouseReducer, initState } from './roundHouseReducer'

const apiRoutes = {
  baseUrl:'https://api.chucknorris.io/jokes',
  appendRandom: '/random',
  appendSearchString: '/search?query='
}

export function useFetchChuck () {
  const [state, dispatch] = useReducer(roundHouseReducer, initState)

  function fetchChuck (searchString: string) {

    const route = getRoute (searchString)





  }

  return [state, dispatch]
}

function getRoute (searchString:string) {
  const {baseUrl, appendRandom, appendSearchString} = apiRoutes

  return baseUrl + (searchString.length ?
  appendSearchString + searchString :
  appendRandom)
}