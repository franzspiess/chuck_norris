import React from 'react'

export default function ErrorDisplay(
  {errorMessage}:{errorMessage:string}) {
    return (
      <div>
        <p>{errorMessage}</p>
      </div>
    )
}