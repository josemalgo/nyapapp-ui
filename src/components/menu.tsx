import MenuItem from './meniItem'

const menuOptions = [
  'Dashboard',
  'Products',
  'Customers'
]

const Menu = (): JSX.Element => {
  return (
    <>
      <div id='sidebar'>
        <h1>ÑAPAPP</h1>
        <nav>
          <ul>
              {menuOptions.map((option) => {
                return <MenuItem key={option} option={option}/>
              })}
          </ul>
          </nav>
      </div>
    </>
  )
}

export default Menu
