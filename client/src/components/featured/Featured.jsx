import React from 'react'
import useFetch from '../../hooks/useFetch'
import './featured.css'

const Featured = () => {
	const { data, loading, error } = useFetch(
		'http://localhost:8800/api/hotels/countByCity?cities=multan,lahore,Karachi'
	)

	return (
		<div className='featured'>
			{loading ? (
				'Loading Please wait'
			) : (
				<>
					{' '}
					<div className='featuredItem'>
						<img
							src='https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o='
							alt=''
							className='featuredImg'
						/>
						<div className='featuredTitle'>
							<h1>Multan</h1>
							<h1>{data[0]} properties</h1>
						</div>
					</div>
					<div className='featuredItem'>
						<img
							src='https://cf.bstatic.com/xdata/images/hotel/max300/78771218.webp?k=e982edd9b768b5841a0376d27ebb2049dafd99348797428c48a1daefff1b2d78&o='
							alt=''
							className='featuredImg'
						/>
						<div className='featuredTitle'>
							<h1>Karachi</h1>
							<h1>{data[1]} properties</h1>
						</div>
					</div>
					<div className='featuredItem'>
						<img
							src='https://cf.bstatic.com/xdata/images/hotel/max300/169331211.webp?k=7a126633f26a6c95e1d54f90d5e73bcd905300b85f572d393fe64587e1b0ce81&o='
							alt=''
							className='featuredImg'
						/>
						<div className='featuredTitle'>
							<h1>Lahore</h1>
							<h1>{data[2]} properties</h1>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default Featured
