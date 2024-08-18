import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import MainLayout from './layouts/Main'
import Error from './pages/Error'
import Timesheet from './pages/Timesheet'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Timesheet />} />
        <Route path="/timesheet" element={<Timesheet />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Route>
    </Routes>
  )
}

const AppBrowserRouter = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export { AppRouter, AppBrowserRouter };

export default AppBrowserRouter

