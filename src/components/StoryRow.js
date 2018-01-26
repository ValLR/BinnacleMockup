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
			<div draggable="true" className="story row">
				<div className="col-lg-3 col-md-3 col-sm-3 text-center">{this.props.project}</div>
				<div className="col-lg-3 col-md-3 col-sm-3 text-center">{this.props.epic}</div>
				<div className="col-lg-3 col-md-3 col-sm-3 text-center">{this.props.pivState}</div>
				<div className="col-lg-3 col-md-3 col-sm-3 text-center">{this.props.points}</div>
			</div>
		)
	}
}

export default StoryRow