import React from 'react'
import useFetch from '../../hooks/useFetch'
import './propertyList.css'

const PropertyList = () => {
	const { data, loading, error } = useFetch(
		'http://localhost:8800/api/hotels/countByType'
	)

	const images = [
		'https://cf.bstatic.com/xdata/images/hotel/max300/309838583.webp?k=53c898313bd050350d39176f3573c2944d952cb74433575fbd55b927a3a781ab&o=',
		'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
		'https://images.unsplash.com/photo-1582582588373-db70762e81cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
		'https://images.unsplash.com/photo-1581404554128-5032fe7874be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
	]

	return (
		<div className='pList'>
			{loading ? (
				'Loading'
			) : (
				<>
					{data &&
						images.map((img, i) => {
							return (
								<div
									className='pListItem'
									key={i}>
									<img
										src={img}
										alt=''
										className='pListImg'
									/>
									<div className='pListTitles'>
										<h1>{data[i]?.type}</h1>
										<h2>
											{data[i]?.count} {data[i]?.type}
										</h2>
									</div>
								</div>
							)
						})}
				</>
			)}
		</div>
	)
}

export default PropertyList
