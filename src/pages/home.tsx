import { Outlet } from 'react-router-dom'
import Menu from '../components/menu'

const Home = (): JSX.Element => {
  return (
    <>
      <Menu />
      <main id='panel-info'>
        <Outlet />
      </main>
    </>
  )
}

export default Home
