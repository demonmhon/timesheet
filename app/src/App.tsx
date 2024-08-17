import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import './App.css'

import Router from './Router';

function App() {
  return (
    <MantineProvider>
      <Router />
    </MantineProvider>
  )
}

export default App
