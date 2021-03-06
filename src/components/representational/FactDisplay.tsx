import React from 'react'
import { IState } from '../../infrastructure/roundHouseReducer';

export default function FactDisplay ({
  chuckJoke
} : {
    chuckJoke:IState['chuckJoke']
  }) {
    return (
      <div>
        <p className='chuck-joke'>{chuckJoke}</p>
      </div>
    )
}