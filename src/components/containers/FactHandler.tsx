import React from 'react'
import FactDisplay from '../representational/FactDisplay'
import Search from '../representational/Search'
import { IState } from '../../infrastructure/roundHouseReducer'
import { IBoxProps } from './Box'

export default function FactHandler({
  chuckJoke,
  fetchChuck
}: {
  chuckJoke: IState['chuckJoke'],
  fetchChuck: IBoxProps['fetchChuck']
}) {
  return (
    <>
      <FactDisplay chuckJoke={chuckJoke} />
      <Search fetchChuck={fetchChuck} />
    </>
  )
}