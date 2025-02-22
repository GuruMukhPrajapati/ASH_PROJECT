import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  // Add active style for NavLink
  const navLinkStyles = ({ isActive }) => ({
    borderBottom: isActive ? '2px solid #primary' : 'none'
  })

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
      
      <ul className='md:flex items-start gap-5 font-medium hidden'>
        <NavLink to='/' style={navLinkStyles} end>
          <li className='py-1 cursor-pointer hover:text-primary transition-colors'>HOME</li>
        </NavLink>
        <NavLink to='/doctors' style={navLinkStyles}>
          <li className='py-1 cursor-pointer hover:text-primary transition-colors'>ALL FREELANCERS</li>
        </NavLink>
        <NavLink to='/about' style={navLinkStyles}>
          <li className='py-1 cursor-pointer hover:text-primary transition-colors'>ABOUT</li>
        </NavLink>
        <NavLink to='/contact' style={navLinkStyles}>
          <li className='py-1 cursor-pointer hover:text-primary transition-colors'>CONTACT</li>
        </NavLink>
      </ul>

      <div className='flex items-center gap-4'>
        {token && userData
          ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={userData.image} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
          : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
        }
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 z-20 bg-white transition-all duration-300 ${showMenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img src={assets.logo} className='w-36' alt="" />
            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7' alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/' className='w-full'>
              <p className='px-4 py-2 rounded-full hover:bg-gray-100 text-center'>HOME</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors' className='w-full'>
              <p className='px-4 py-2 rounded-full hover:bg-gray-100 text-center'>ALL FREELANCERS</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about' className='w-full'>
              <p className='px-4 py-2 rounded-full hover:bg-gray-100 text-center'>ABOUT</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact' className='w-full'>
              <p className='px-4 py-2 rounded-full hover:bg-gray-100 text-center'>CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar