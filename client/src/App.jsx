import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import Hotel from './pages/hotel/Hotel'
import List from './pages/list/List'
import Login from './pages/login/Login'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/hotels'
					element={<List />}
				/>
				<Route
					path='/hotels/:id'
					element={<Hotel />}
				/>
				<Route
					path='/login'
					element={<Login />}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
