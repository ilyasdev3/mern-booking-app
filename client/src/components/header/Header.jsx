import React, { useContext } from 'react'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import {
	faBed,
	faCar,
	faPerson,
	faPlane,
	faTaxi,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import { AuthContext } from '../../context/AuthContext'

const Header = ({ type }) => {
	const [destination, setDestination] = React.useState('')
	const [openDate, setOpenDate] = React.useState(false)
	const { user } = useContext(AuthContext)

	const [dates, setDates] = React.useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	])
	const [openOption, setOpenOption] = React.useState(false)
	const [Options, setOptions] = React.useState({
		adult: 1,
		children: 0,
		room: 1,
	})

	const navigate = useNavigate()

	const handleOPtion = (name, operation) => {
		setOptions((prev) => {
			return {
				...prev,
				[name]:
					operation === 'i' ? Options[name] + 1 : Options[name] - 1,
			}
		})
	}

	const { dispatch } = useContext(SearchContext)

	const handleSearch = () => {
		dispatch({
			type: 'NEW_SEARCH',
			payload: { destination, dates, Options },
		})
		navigate('/hotels', { state: { destination, dates, Options } })
	}

	return (
		<div className='header'>
			<div
				className={
					type === 'list'
						? 'headerContainer listMode'
						: 'headerContainer'
				}>
				<div className='headerList'>
					<div className='headerListItem active'>
						<FontAwesomeIcon icon={faBed} />
						<span>Stays</span>
					</div>
				</div>

				{type !== 'list' && (
					<>
						{' '}
						<h1 className='headerTitle'>
							A lifetime of discounts? It's Genius
						</h1>
						<p className='headerDesc'>
							Get rewarded for your travels unlock instant saving
							of 10% or money with a free OnlineBooking
						</p>
						{!user && (
							<button className='headerBtn'>
								Sign in / Register
							</button>
						)}
						<div className='headerSearch'>
							<div className='headerSearchItem'>
								<FontAwesomeIcon
									icon={faBed}
									className='headerIcon'
								/>
								<input
									type='text'
									placeholder='Where are you going'
									className='headerSearchInput'
									onChange={(e) => {
										setDestination(e.target.value)
									}}
									id=''
								/>
							</div>
							<div className='headerSearchItem'>
								<FontAwesomeIcon
									icon={faCalendarDays}
									className='headerIcon'
								/>
								<span
									onClick={() => setOpenDate(!openDate)}
									className='headerSearchText'>{`${format(
									dates[0].startDate,
									'MM/dd/yyyy'
								)} to ${format(
									dates[0].endDate,
									'MM/dd/yyyy'
								)}`}</span>

								{openDate && (
									<DateRange
										editableDateInputs={true}
										onChange={(item) =>
											setDates([item.selection])
										}
										moveRangeOnFirstSelection={false}
										ranges={dates}
										className='date'
										minDate={new Date()}
									/>
								)}
							</div>
							<div className='headerSearchItem'>
								<FontAwesomeIcon
									icon={faPerson}
									className='headerIcon'
								/>
								<span
									onClick={() => {
										setOpenOption(!openOption)
									}}
									className='headerSearchText'>{`${Options.adult} adult - ${Options.children} children - ${Options.room} room`}</span>

								{openOption && (
									<div className='optins'>
										<div className='optionItem'>
											<span className='optionText'>
												Adult
											</span>
											<div className='optionCounter'>
												<button
													disabled={
														Options.adult <= 1
													}
													className='optionCouterBtn'
													onClick={() => {
														handleOPtion(
															'adult',
															'd'
														)
													}}>
													-
												</button>
												<span className='optionCounterNumber'>
													{Options.adult}
												</span>
												<button
													className='optionCouterBtn'
													onClick={() => {
														handleOPtion(
															'adult',
															'i'
														)
													}}>
													+
												</button>
											</div>
										</div>

										<div className='optionItem'>
											<span className='optionText'>
												Children
											</span>
											<div className='optionCounter'>
												<button
													disabled={
														Options.children <= 0
													}
													className='optionCouterBtn'
													onClick={() => {
														handleOPtion(
															'children',
															'd'
														)
													}}>
													-
												</button>
												<span className='optionCounterNumber'>
													{Options.children}
												</span>
												<button
													className='optionCouterBtn'
													onClick={() => {
														handleOPtion(
															'children',
															'i'
														)
													}}>
													+
												</button>
											</div>
										</div>
										<div className='optionItem'>
											<span className='optionText'>
												Room
											</span>
											<div className='optionCounter'>
												<button
													disabled={Options.room <= 1}
													className='optionCouterBtn'
													onClick={() => {
														handleOPtion(
															'room',
															'd'
														)
													}}>
													-
												</button>
												<span className='optionCounterNumber'>
													{Options.room}
												</span>
												<button
													className='optionCouterBtn'
													onClick={() => {
														handleOPtion(
															'room',
															'i'
														)
													}}>
													+
												</button>
											</div>
										</div>
									</div>
								)}
							</div>
							<div className='headerSearchItem'>
								<button
									className='headerBtn'
									onClick={handleSearch}>
									Search
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Header
