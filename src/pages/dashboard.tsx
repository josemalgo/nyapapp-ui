import { Outlet } from 'react-router-dom'
import Menu from '../components/menu'

const Dashboard = (): JSX.Element => {
  return (
    <>
      <Menu />
      <main id='panel-info'>
        <Outlet />
      </main>
    </>
  )
}

export default Dashboard
