import React from 'react'
import { NavLink } from 'react-router-dom'
import './searchItem.css'

const SearchItem = ({ item }) => {
	return (
		<div className='searchItem'>
			<img
				src={item.photos[0]}
				alt=''
				className='siImg'
			/>
			<div className='siDesc'>
				<h1 className='siTitle'>{item.name}</h1>
				<span className='siDistance'>
					{item.distance} km from centre
				</span>
				<span className='siTaxiOp'>Free airport taxi</span>
				<span className='siSubtitle'>
					Double or Twin Room with Private Bathroom
				</span>
				<span className='siFeatures'>{item.desc}</span>
				<span className='siCancelOp'>Free cancellation</span>
				<span className='siCancelOpSubtitle'>
					You can cancel later, so lock in this great price today.
				</span>
			</div>
			<div className='siDetails'>
				{item.rating && (
					<div className='siRating'>
						<span>Excellent</span>
						<button>{item.rating}</button>
					</div>
				)}
				<div className='siDetailTexts'>
					<span className='siPrice'>${item.cheapestPrice}</span>
					<span className='siTaxOp'>Includes taxes and fees</span>
					<NavLink to={`/hotels/${item._id}`}>
						<button className='siCheckButton'>
							See Availability
						</button>
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default SearchItem
