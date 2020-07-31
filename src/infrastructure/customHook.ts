import {useReducer} from 'react'
import { roundHouseReducer, initState } from './roundHouseReducer'

export function useFetchChuck () {
  const [state, dispatch] = useReducer(roundHouseReducer, initState)

  return [state, dispatch]
}