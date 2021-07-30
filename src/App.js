import React, {useState} from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Table from './Table';
import Page1 from './page1.js'
import Page2 from './page2.js'
import Page3 from './page3.js'
import Home from './home.js'

function App() {
	const [count, setCount] = useState(0)

	function handleCount() {
		setCount(count + 1)
	}

	return (
		<BrowserRouter>
			<div>
				<h1>Items: {count}</h1>
				<button onClick={handleCount}>Click me</button>
				
				<Switch>
					<Route path="/" exact={true} component={Home} />
					<Route path="/page1" component={Page1} />
					<Route path="/page2" component={Page2} />
					<Route path="/page3" component={Page3} />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
