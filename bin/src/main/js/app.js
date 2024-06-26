const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
import { useState, useEffect } from 'react';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {moviesInfoes: []};
	}
	
	componentDidMount() {
		client({method: 'GET', path: '/api/moviesInfoes'}).done(response => {
			this.setState({moviesInfoes: response.entity._embedded.moviesInfoes});
		});
		// fetch(
		// 	"http://localhost:8080/api/moviesInfoes")
		// 				.then((res) =>  res.text()).then((data) => 
		// 					JSON.parse(data)._embedded.moviesInfoes).then((dataParsed) => this.setState({moviesInfoes: dataParsed}))
	}

	render() {
		return (
			<MoviesInfoList moviesInfoes={this.state.moviesInfoes}/>
		)
	}
}


class MoviesInfoList extends React.Component{
	render() {
	    console.log(this.props)
		const moviesInfoes = this.props.moviesInfoes.map(moviesInfo =>
			<MoviesInfo key={moviesInfo._links.self.href} moviesInfo={moviesInfo}/>
			);
		
		return (
			<table>
				<tbody>
					<tr>
						<th>Film</th>
						<th>Genre</th>
						<th>Lead Studio</th>
						<th>Audience Score %</th>
						<th>Profitability</th>
						<th>Rotten Tomatoes %</th>
						<th>world_wide gross</th>
						<th>Year</th>
					</tr>
					{moviesInfoes}
				</tbody>
			</table>
		)
	}
}

class MoviesInfo extends React.Component{
	render() {
		console.log(this.props.moviesInfo.id)
		
		return (
			<tr>
				<td>{this.props.moviesInfo.film}</td>
				<td>{this.props.moviesInfo.genre}</td>
				<td>{this.props.moviesInfo.leadStudio}</td>
				<td>{this.props.moviesInfo.audienceScore}</td>
				<td>{this.props.moviesInfo.profitability}</td>
				<td>{this.props.moviesInfo.rottenTomatoesScore}</td>
				<td>{this.props.moviesInfo.worldWideGross}</td>
				<td>{this.props.moviesInfo.year}</td>
			</tr>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)