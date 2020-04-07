import React from 'react';
import Fullpage from './Fullpage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page6Sub from './P6Sub/Page6Sub';
import Page5Sub from './P5Sub/Page5Sub'
import Page9Sub from './P9Sub/Page9Sub'
import Page10Sub from './P10Sub/Page10Sub';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/blessingMessage" component={Page10Sub}/>
					<Route path="/checkMessage" component={Page9Sub}/>
					<Route path="/leaveMessage" component={Page5Sub}/>
					<Route path="/headImage" component={Page6Sub} />
                    <Route path="/" component={Fullpage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
