import React from "react";
import { Routes, Route } from "react-router-dom";

/*
Imports used for components
*/

import styled from 'styled-components';
import HomeTable from './pages/table/HomeTable';
import Layout from "./pages/homepage/Layout";
import Home from "./pages/homepage/Home";
import Recommend from "./pages/table/Recommend";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

export default function App() {
	return (

		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home/>} />
					<Route path="/movies" element={<HomeTable/>}/>
					<Route path="/recommend" element={<Recommend/>} />
				</Route>
			</Routes>
		</div>

		
	)	
}
