import logo from '@/logo.svg';
import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

function Home () {
	let [num, setNum] = useState(0);
	return (<div className="App">
		<img src={logo} className="App-logo" alt="logo" />
		<h1 onClick={() => {
			setNum(++ num)
		}}>hello</h1>
		<p>{ num }</p>
	</div>)
};
const About = () => <h1>about</h1>;
function NotFound (props) {
	props.staticContext && (props.staticContext.code = 404);
	return 404;
}
const Default = () => <Redirect to='/home' />;


export default function () {
	return (<Switch>
		<Route path='/home' component={Home} />
		<Route path='/about' component={About} />
		<Route path='/' component={Default} />
		<Route component={NotFound} />
	</Switch>);
}

