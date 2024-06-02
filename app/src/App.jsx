import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import './App.css'

import { Form } from './pages/Form'

function App() {
  return (
    <MantineProvider>
      <p>timesheet</p>
      <Form />
    </MantineProvider>
  )
}

export default App
