import React, { Component } from 'react';

class ProjectItem extends Component {
	render() {
		return (
			<div className="Project-container hide">
        <img className="Project-img" alt={this.props.project.title} src={this.props.project.image} />
				<p className="Project-description">{this.props.project.title}: <br />
        <em>{this.props.project.category}</em></p>
			</div>
		);
	}
}

export default ProjectItem;
