import React from 'react'
import './App.css'
import useFetchChuck from './infrastructure/customHook'
import Container from './components/Container'
import Box from './components/Box'

function App() {
  const [state, fetchChuck] = useFetchChuck()
  return (
    <Container>
      <Box
        state={state}
        fetchChuck={fetchChuck}
        />
    </Container >
  );
}

export default App;
