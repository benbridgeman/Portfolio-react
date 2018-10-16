import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header className="App-header">
				<div className="Header-content">
					<h1>Hi, I'm {this.props.name} :)</h1>
				</div>
			</header>
		);
	}
}

export default Header;
