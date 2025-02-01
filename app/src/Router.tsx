import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import MainLayout from './layouts/Main'
import ErrorPage from './pages/Error'
import HomePage from './pages/Home'
import TimesheetPage from './pages/Timesheet'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/timesheet" element={<TimesheetPage />} />
        <Route path="/404" element={<ErrorPage />} />
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

