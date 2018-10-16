import React, { Component } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';
import './Responsive.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			projects: []
		};
	}

	componentDidMount() {
		this.setState({
			projects: [
				{
					title: 'D&AD Entry - Tinker Tailor Soldier Spy',
					category: 'Illustration',
					image: 'https://goo.gl/wnrfz2'
				},
				{
					title: 'Mixed Media Info',
					category: 'Graphic Design',
					image: 'https://goo.gl/ZkTBRd'
				},
				{
					title: 'Pixel Art Maker',
					category: 'Web Development',
					image: 'https://goo.gl/1KUYtj'
				},
				{
					title: 'Trick Pixel Logo',
					category: 'Graphic Design & Illustration',
					image: 'https://goo.gl/ZNz1Z1'
				},
				{
					title: 'SBP Site Maintenance',
					category: 'CMS Joomla',
					image: 'https://goo.gl/K12KCr'
				},
				{
					title: 'Brighton Times Responsive Project',
					category: 'Web Design',
					image: 'https://goo.gl/EPAg5w'
				}
			]
		});
	}

	render() {
		return (
			<div className="App">
				<div className="App-container">
					<Header name="Ben" />
					<Projects projects={this.state.projects} />
					<Footer email="ben_bridgeman@hotmail.co.uk" phone="07531413568" />
				</div>
			</div>
		);
	}
}

export default App;
