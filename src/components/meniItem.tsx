import { Link } from 'react-router-dom'
import { type PropsMenuOption } from '../types'

const MenuItem: React.FC<PropsMenuOption> = ({ option }) => {
  const path = option !== 'Dashboard' ? `/${option}` : '/'

  return (
    <>
      <li>
          <Link to={path} >{option}</Link>
      </li>
    </>
  )
}

export default MenuItem
