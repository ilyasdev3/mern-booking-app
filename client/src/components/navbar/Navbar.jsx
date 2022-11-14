import './navbar.css'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
const Navbar = () => {
	const { user } = useContext(AuthContext)

	return (
		<div className='navbar'>
			<div className='navContainer'>
				<NavLink
					to='/'
					style={{ color: 'inherit', textDecoration: 'none' }}>
					<span className='logo'>OnlineBooking</span>
				</NavLink>
				{user ? (
					user.username
				) : (
					<div className='navItems'>
						<NavLink
							to='/register'
							className='navButton'>
							Register
						</NavLink>
						<NavLink
							to='/login'
							className='navButton'>
							Login
						</NavLink>
					</div>
				)}
			</div>
		</div>
	)
}

export default Navbar
