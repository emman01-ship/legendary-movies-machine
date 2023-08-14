import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const ReactDOM = require('react-dom');
import { useState, useEffect } from 'react';
const client = require('./client');
import ReactTable from 'react-table-6';
import styled from 'styled-components';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import HomeTable from "./pages/HomeTable";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import RecommendMovie from "./pages/Recommend";
import json from 'rest/mime/type/application/json';

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			moviesList: [],
			numberOfMovies: 0
		};
	}
	

	componentDidMount(){

		fetch(
			`http://localhost:8080/moviesInfo/all` , {
				// mode: 'no-cors',
				method: 'GET',
				headers: {
			  Accept: 'application/json',
			},
		  },
			).then((res) => res.ok? res.json() : Promise.reject())
			.then( (json) => 
				this.setState({
					moviesList: json.content,
					numberOfMovies: json.totalElements
				})
			);
	
	}

	render(){

		console.log(this.state.moviesList);
		//console.log(this.state.numberOfMovies);
		var moviesLen = this.state.numberOfMovies;
		return (

			// <div>
			// 	<MoviesInfoList moviesInfoes={this.state.moviesInfoes}/>
				
			// <div className='pagination-container'>
			// 	<nav>
			// 	  <ul className="pagination">
				   
			// 	  </ul>
			// 	</nav>
			// </div>
			// </div>
			// <Wrapper>
			// 	{(movies || []).length > 0 ? (
			// 		<ReactTable
			// 			data={movies}
			// 			columns={columns}
			// 			defaultPageSize={10}
			// 			showPageSizeOptions={true}
			// 			minRows={10}
			// 		/>
			// 	)
			// 	: (
			// 		`No items to render`
			// 		)}
			// </Wrapper>
			// <div>
			// 	<BootstrapTable
			// 		striped
			// 		hover
			// 		keyField='id'
			// 		data={movies}
			// 		columns={columns}
			// 		filter={filterFactory()}
			// 		pagination={ paginationFactory(options)} 
			// 		rowStyle={{ backgroundColor: 'light green' }}
			// 		rowClasses="custom-row-class1"
			// 		cellEdit={ cellEdit }
			// 	/>
			// </div>
	
			/*
				<Route path="movies" element={<HomeTable movies={movies}
						moviesLength={moviesLen}/>}/>
						<Route path="recommend" element={<RecommendMovie numberOfMovies={moviesLen}/>} />
			*/
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home/>} />
						<Route path="movies" element={<HomeTable movies={this.state.moviesList}
						moviesLength={this.state.numberOfMovies}/>}/>
						<Route path="recommend" element={<RecommendMovie numberOfMovies={moviesLen}/>} />
	
					</Route>
				</Routes>
			</BrowserRouter>
	
			
		)
	}



	
}


// class MoviesInfoList extends React.Component{
// 	render() {
// 	    //console.log(this.props)
// 		const moviesInfoes = this.props.moviesInfoes.map(moviesInfo =>
// 			<MoviesInfo key={moviesInfo._links.self.href} moviesInfo={moviesInfo}/>
// 			);
		
// 		return (
// 			<div>
// 				<Table striped bordered hover size="sm" responsive bordered>
// 				<tbody>
// 					<tr>
// 						<th>Film</th>
// 						<th>Genre</th>
// 						<th>Lead Studio</th>
// 						<th>Audience Score %</th>
// 						<th>Profitability</th>
// 						<th>Rotten Tomatoes %</th>
// 						<th>world_wide gross</th>
// 						<th>Year</th>
// 					</tr>
// 					{moviesInfoes}
// 				</tbody>
// 			</Table>
// 			</div>
// 		)
// 	}
// }

// class MoviesInfo extends React.Component{
// 	render() {

// 		return (
			
// 			<tr>
// 				<td><button>{this.props.moviesInfo.film}</button></td>
// 				<td>{this.props.moviesInfo.genre}</td>
// 				<td>{this.props.moviesInfo.leadStudio}</td>
// 				<td>{this.props.moviesInfo.audienceScore}</td>
// 				<td>{this.props.moviesInfo.profitability}</td>
// 				<td>{this.props.moviesInfo.rottenTomatoesScore}</td>
// 				<td>{this.props.moviesInfo.worldWideGross}</td>
// 				<td>{this.props.moviesInfo.year}</td>
// 			</tr>
		
// 		)
// 	}
// }

ReactDOM.render(
	<App />,
	document.getElementById('legendaryMovies')
)