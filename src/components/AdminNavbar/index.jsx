import React from 'react'
import { AdminNav } from './styled'
import logo from '../../assets/images/adminlogo.svg'
import adminuser from '../../assets/images/adminuser.svg'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <AdminNav>
      <Link to='/'>
        <AdminNav.Logo src={logo} />
      </Link>
      <AdminNav.AdminBox>
        <AdminNav.UserLogo src={adminuser} />
        <AdminNav.Text>
          Qodirjon Polatov
        </AdminNav.Text>
      </AdminNav.AdminBox>
    </AdminNav>
  )
}

export default AdminNavbar