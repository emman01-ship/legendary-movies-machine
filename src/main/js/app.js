import React, { Component } from 'react';
import { useState, useEffect } from 'react';
const ReactDOM = require('react-dom');
const client = require('./client');
import ReactTable from 'react-table-6';
import styled from 'styled-components';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			moviesInfoes: [],
			page: []
		};
	}

	
	componentDidMount() {
		// client({method: 'GET', path: '/api/moviesInfoes?size=10'}).done(response => {
		// 	console.log(response.entity._embedded.moviesInfoes)
		// 	this.setState({moviesInfoes: response.entity._embedded.moviesInfoes});
		// });

		fetch(
			`http://localhost:8080/api/moviesInfoes`)
				.then((res) =>  
					res.json()).then((data) => 
						this.setState(
						{
							moviesInfoes: data._embedded.moviesInfoes,
							page: data.page
						}));
	}



	render() {

		const movies = this.state.moviesInfoes || [];
		console.log(this.state.page)
		console.log(movies);

		const options = {  
			
							page: 2,   
							sizePerPageList: [ {  		
							text: '5', value: 5  
								}, 
								{  
									text: '10', value: 10  
			
								}, 
								{  
			
									text: 'All', value: this.state.moviesInfoes.length  
								} ],   
									sizePerPage: 5,   
									pageStartIndex: 0,   
									paginationSize: 3,    
									prePage: 'Prev',   
									nextPage: 'Next',   
									firstPage: 'First',   
									lastPage: 'Last',   
									paginationPosition: 'top' 
						}

		const columns = [
			// {
			// 	Header: 'Movie',
			// 	accessor: 'film',
			// 	filterable: true,
			// 	Cell: props => {
			// 		return <span data-genre={props.original.film}>{props.original.film}</span>
			// 	}

			// }
			// ,
			// {
			// 	Header: 'Genre',
			// 	accessor: 'genre',
			// 	filterable: true,
			// 	Cell: props => {
			// 		console.log(props)
			// 		return <span data-genre={props.original.genre}>{props.original.genre}</span>
			// 	}
			// },
			// {
			// 	Header: 'Lead Studio',
			// 	accessor: 'leadStudio',
			// 	filterable: true,
			// 	Cell: props => {
			// 		return <span>{props.original.leadStudio}</span>
			// 	}
			// },
			{  
				
				dataField: 'film',  	
				text: 'Search Movies',  	
				filter: textFilter()  
				
			},
			// {
			// 	dataField: 'film',
			// 	text: 'Movie',
			// 	sort: true	
			// },
			{
				dataField: 'genre',
				text: 'Genre',
				sort: true
			},
			{
				dataField: 'year',
				text: 'Year released',
				sort: true
			}

		]

		const cellEdit = cellEditFactory({
			mode: 'click'
		  });
		
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
			<div>
				<BootstrapTable
					striped
					hover
					keyField='id'
					data={movies}
					columns={columns}
					filter={filterFactory()}
					pagination={ paginationFactory(options)} 
					rowStyle={{ backgroundColor: 'light green' }}
					rowClasses="custom-row-class1"
					cellEdit={ cellEdit }
				/>
			</div>
			
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