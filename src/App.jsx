// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './components/navbar';
// import Home from './pages/Home';
// import Test from './pages/ExamplePage';

// function App() {
// 	return (
// 		<Router>
// 			<Navbar />
// 			<Switch>
// 				<Route exact path="/">
// 					<Home />
// 				</Route>
// 				<Route path="/test-page">
// 					<Test />
// 				</Route>
// 			</Switch>
// 		</Router>
// 	);
// }

// export default App;

import React from "react";
import Register from './components/Register';
// import { AuthProvider } from './contexts/Auth'


function App() {
  return(
      <Register />
  )
}

export default App;

