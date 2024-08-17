import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/Main'
import Form from './pages/Form'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { Router as AppRoute }

export default Router
