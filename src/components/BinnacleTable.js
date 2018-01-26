import React, { Component } from 'react';
import pivotalData from '../data/pivmock.json';
import StoryRow from './StoryRow'

class BinnacleTable extends Component {

	render() {
		let points = 0;

		return(
		    <table>
		    	<thead>
		    		<tr>
		        		<th>Proyecto</th>
		        		<th>Epic</th>
		        		<th>Estado</th>
		        		<th>Puntos</th>
		        	</tr>
		      	</thead>
				{pivotalData.data[0].projects.map((project) =>
					project.stories.map((story) =>

					<StoryRow key={story.id} project={project.canonicalName} epic={story.epic} pivState={story.state} points={story.points} />
				)
			)}
		    </table>

		)
	}
}

export default BinnacleTable