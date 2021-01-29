import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from './router';

function App () {
	return (<Router>
		<Routes />
	</Router>);
}

export default App;


