import { Outlet } from 'react-router-dom'

const MainLayout = (props) => {
  return (
    <>
      <header></header>
      <Outlet />
      <footer></footer>
    </>
  )
}

export default MainLayout
