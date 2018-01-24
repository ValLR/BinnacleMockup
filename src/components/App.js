import React, { Component } from 'react';
import pivotalData from '../data/mock.json'
console.log(pivotalData.projects[0].name);
console.log(pivotalData.projects[0].epics[2].name)
console.log(pivotalData.projects[0].epics[0].stories[0].state)

class App extends Component {
  render() {
    return (
    	<BinnaclePage />
    );
  }
}

class BinnaclePage extends Component {
/*	constructor(props){
		super(props);
		this.state ={
			items:[]
		}
	}
*/
	render(){
		return(
			<div className='container'>
				<h1 className='text-center'>Proyectos</h1>
				<div className='row'>
					{pivotalData.projects.map((project, index) =>
					<ProjectList key={index} name={project.name} url={project.url}/>
					)}
				</div>
			</div>
		)
	}
}

class ProjectList extends Component {
	render(){
		return(
			<a className='col-sm col-md col-lg' href={this.props.url}>{this.props.name}</a>
		)
	}

}

export default App;
