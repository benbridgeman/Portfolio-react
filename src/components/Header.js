import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header className="App-header">
				<div className="Header-content">
					<h1>{this.props.name}<span class="bold">PORTFOLIO</span></h1>
				</div>
			</header>
		);
	}
}

export default Header;
