import { Link } from 'react-router-dom'

const Menu = (): JSX.Element => {
  return (
    <>
      <div id='sidebar'>
        <h1>ÑAPAPP</h1>
        <nav>
          <ul>
              <li>
                  <Link to="/">Dashboard</Link>
             </li>
              <li>
                  <Link to="/product">Products</Link>
              </li>
          </ul>
          </nav>
      </div>
    </>
  )
}

export default Menu
