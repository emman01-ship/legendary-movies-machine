
import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';

function options(moviesLength){  
			
    return { page: 2,   
    sizePerPageList: [ {  		
    text: '5', value: 5  
        }, 
        {  
            text: '10', value: 10  

        }, 
        {  

            text: 'All', value: moviesLength  
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
}

const columns = [{  
				
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
}]

const cellEdit = cellEditFactory({
    mode: 'click'
  });

const HomeTable = (movies, moviesLength) => {

    console.log(movies);
    return (
        <div>
				<BootstrapTable
					striped
					hover
					keyField='id'
					data={movies.movies}
					columns={columns}
					filter={filterFactory()}
					pagination={ paginationFactory(options(moviesLength))} 
					rowStyle={{ backgroundColor: 'light green' }}
					rowClasses="custom-row-class1"
					cellEdit={ cellEdit }
				/>
			</div>
    )
}

export default HomeTable