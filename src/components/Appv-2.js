import React, { Component } from 'react';
import pivotalData from '../data/pivmock.json';
/*console.log(
	pivotalData.data[0].projects[0].canonicalName,
	pivotalData.data[0].projects[0].stories[0],
	pivotalData.data[0].projects[0].stories[1],
	pivotalData.data[0].projects[0].stories[2]);
console.log(
	pivotalData.data[0].projects[1].canonicalName,
	pivotalData.data[0].projects[1].stories[0],
	pivotalData.data[0].projects[1].stories[1],
	pivotalData.data[0].projects[1].stories[2]);*/

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
				project.stories.map((story) =>
					<div>
						<p>{story.epic+' >from> '+project.canonicalName}</p>
					</div>
				)
			)
		)
	}
}




export default App;