import React from 'react'
import { Link } from 'react-router-dom'

function MenuButton({to, active, children}) {
  return (
    <Link to={to} className={`${active ? `bg-blue-500 p-2 rounded-md h-full hover:text-blue-500 hover:bg-transparent border-solid border-2 hover:border-blue-500 border-transparent transition ease-in delay-50`: ` hover:text-blue-500 transition ease-in delay-50`}`}>
        {children}
    </Link>
  )
}

export default MenuButton