import React, { Component } from 'react';
import pivotalData from '../data/pivmock.json';
import StoryRow from './StoryRow'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class BinnacleTable extends Component {

	render() {
		let points = 0;

		return(
			<div className="table">
			    <div className="row head">
			        <div className="col-lg-3 col-md-3 col-sm-3 text-center">Proyecto</div>
			        <div className="col-lg-3 col-md-3 col-sm-3 text-center">Epic</div>
			        <div className="col-lg-3 col-md-3 col-sm-3 text-center">Estado</div>
			        <div className="col-lg-3 col-md-3 col-sm-3 text-center">Puntos</div>
				</div>
		      	<div className="body">
					{pivotalData.data[0].projects.map((project) =>
						project.stories.map((story) =>
						<StoryRow  key={story.id} project={project.canonicalName} epic={story.epic} pivState={story.state} points={story.points} />
					)
					)}
				</div>
			</div>
		)
	}
}

export default BinnacleTable