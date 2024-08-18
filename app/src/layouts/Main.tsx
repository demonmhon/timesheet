import { Outlet } from 'react-router-dom'

import Header from './Header';

const MainLayout = (props) => {
  return (
    <>
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}

export default MainLayout
