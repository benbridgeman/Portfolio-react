import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer className="App-header">
				<div className="Footer-content">
          <h4>Contact Information</h4>
					<p>
						<strong>Email:</strong> {this.props.email} <br />
						<strong>Phone:</strong> {this.props.phone}
					</p>
				</div>
			</footer>
		);
	}
}

export default Footer;
