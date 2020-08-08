import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Spinner from 'react-loader-spinner'

export default function Loader() {
  return (<Spinner
    type='Bars'
    color='#00BFFF'
    height={100}
    width={100}
    timeout={1000000}
    />)
}