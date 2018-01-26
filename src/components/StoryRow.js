import React, { Component } from 'react';


class StoryRow extends Component {

	constructor(props) {
		super(props)
		this.state= {
			project:"",
			epic:"",
			pivState:"",
			points:"",
		}
	}

	componentDidMount() {
		this.setState({
			project:this.props.project,
			epic:this.props.epic,
			pivState:this.props.pivState,
			points:this.props.points,	
		})
	}


	render() {

		return (
			<tbody>
				<tr>
					<th>{this.props.project}</th>
					<th>{this.props.epic}</th>
					<th>{this.props.pivState}</th>
					<th>{this.props.points}</th>
				</tr>
			</tbody>
		)
	}
}

export default StoryRow