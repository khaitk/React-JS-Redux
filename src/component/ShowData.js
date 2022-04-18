import React from 'react'
import { useSelector } from 'react-redux'

export default function ShowData() {

	const data = useSelector(state => state.formAdd)

  	return (
    	<div className='col-sm-6'>
			<table className='table'>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody>
					{data && data.map((item, index) => {
						return (
							<tr key={index}>
								<td>{index+1}</td>
								<td>{item.name}</td>
								<td>{item.email}</td>
							</tr>
						)
					})}
				</tbody>			
			</table>
		</div>
  	)
}
