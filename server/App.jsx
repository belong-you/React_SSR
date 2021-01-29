import React from 'react';
import { StaticRouter as Router } from 'react-router-dom';
import Routes from '../src/router';

export default function ({path, context}) {
	return (<Router location={path} context={context} >
		<Routes />
	</Router>);
}


