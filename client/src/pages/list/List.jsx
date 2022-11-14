import React from 'react'
import './list.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'
import useFetch from '../../hooks/useFetch.js'

const List = () => {
	const locaton = useLocation()
	// console.log("locaton", locaton);
	const [destination, setDestination] = React.useState(
		locaton.state.destination
	)
	const [dates, setDates] = React.useState(locaton.state.dates)
	const [openDate, setOpenDate] = React.useState(false)
	const [options, setOptions] = React.useState(locaton.state.Options)
	const [min, setMin] = React.useState(undefined)
	const [max, setMax] = React.useState(undefined)

	const { data, loading, error, reFetch } = useFetch(
		`http://localhost:8800/api/hotels?city=${destination}&min=${
			min || 0
		}&max=${max || 999}`
	)

	const handleClick = () => {
		reFetch()
	}

	return (
		<div>
			<Navbar /> <Header type='list' />
			<div className='listContainer'>
				<div className='listWrapper'>
					<div className='listSearch'>
						<h1 className='lsTitle'>Search</h1>
						<div className='lsItem'>
							<label htmlFor=''>Destination</label>
							<input
								type='text'
								value={destination}
								onChange={(e) => {
									setDestination(e.target.value)
								}}
							/>
						</div>
						<div className='lsItem'>
							<label htmlFor=''>Check-in Date</label>
							<span onClick={() => setOpenDate(!openDate)}>
								{`${format(
									dates[0].startDate,
									'MM/dd/yyyy'
								)} to ${format(
									dates[0].endDate,
									'MM/dd/yyyy'
								)}`}
							</span>
							{openDate && (
								<DateRange
									onChange={(item) =>
										setDates([item.selection])
									}
									minDate={new Date()}
									ranges={dates}
								/>
							)}
						</div>
						<div className='lsItem'>
							<label htmlFor=''>Options</label>
							<div className='lsOptions'>
								<div className='lsOptionItem'>
									<span className='lsOptionText'>
										Min price <small>per night</small>
									</span>
									<input
										onChange={(e) => {
											setMin(e.target.value)
										}}
										type='number'
										className='lsOptionInput'
									/>
								</div>
								<div className='lsOptionItem'>
									<span className='lsOptionText'>
										Max price <small>per night</small>
									</span>
									<input
										onChange={(e) => {
											setMax(e.target.value)
										}}
										type='number'
										className='lsOptionInput'
									/>
								</div>
								<div className='lsOptionItem'>
									<span className='lsOptionText'>Adult</span>
									<input
										type='number'
										min={1}
										className='lsOptionInput'
										placeholder={options.adult}
									/>
								</div>
								<div className='lsOptionItem'>
									<span className='lsOptionText'>
										Children
									</span>
									<input
										type='number'
										min={0}
										className='lsOptionInput'
										placeholder={options.children}
									/>
								</div>
								<div className='lsOptionItem'>
									<span className='lsOptionText'>Room</span>
									<input
										type='number'
										min={1}
										className='lsOptionInput'
										placeholder={options.room}
									/>
								</div>
							</div>
						</div>
						<button onClick={handleClick}>Search</button>
					</div>
					<div className='listResult'>
						{loading ? (
							'loading'
						) : (
							<>
								{data.map((item) => {
									return (
										<SearchItem
											item={item}
											key={item._id}
										/>
									)
								})}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default List
