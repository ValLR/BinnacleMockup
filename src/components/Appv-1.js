/*import React, { Component } from 'react';
import pivotalData from '../data/pivmock.json';*/
console.log(
	pivotalData.data[0].projects[0].canonicalName,
	pivotalData.data[0].projects[0].stories[0],
	pivotalData.data[0].projects[0].stories[1],
	pivotalData.data[0].projects[0].stories[2]);
console.log(
	pivotalData.data[0].projects[1].canonicalName,
	pivotalData.data[0].projects[1].stories[0],
	pivotalData.data[0].projects[1].stories[1],
	pivotalData.data[0].projects[1].stories[2]);

class App extends Component {
  render() {
    return (
    	<BinnaclePage />
    );
  }
}

class BinnaclePage extends Component {

	render() {

		return(
			pivotalData.data[0].projects.map((project) =>
				<BinnacleTable projectTitle={project.canonicalName} project={project} />
			)
		)
	}
}


class BinnacleTable extends Component {
	
/*	render() {

		return(
			<div>
				<ProjectTable projectTitle={this.props.project.name} project={this.props.project}/>
			</div>
		)
	}
*/
	render() {
		return(
			this.props.project.stories.map((story) =>
				<StoryRow epic={story.epic} id={story.id} pivState={story.state} points={story.points} project={this.props.project} />
			)
		)
	}

}


class StoryRow extends Component {
	constructor(props) {
		super(props)
		this.state = {
			points:0,
		}
	}
	componentDidMount() {
		this.setState({
			points:this.props.points,
		})
	}

	render() {
		return(
			<div>
				{this.state.points+' '+this.props.epic +' '+this.props.id+' '+this.props.pivState+' '+this.props.points} 
			</div>			
		)
	}
}

export default App;