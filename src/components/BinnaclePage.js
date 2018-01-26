import React, { Component } from 'react';
import pivotalData from '../data/pivmock.json';
import BinnacleTable from './BinnacleTable'

class BinnaclePage extends Component {
	render() {

		return(
			<div>
				<BinnacleTable />
			</div>
		)
	}
}

export default BinnaclePage