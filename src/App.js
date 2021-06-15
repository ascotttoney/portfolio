import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Project from './components/Project';
import NavBar from './components/NavBar';
import Resume from './components/Resume';

function App() {
	return (
		<BrowserRouter>
			<div className="w-full h-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
				<NavBar />
				<Switch>
					<Route component={Home} path="/" exact />
					<Route component={About} path="/about" />
					<Route component={SinglePost} path="/post/:slug" />
					<Route component={Post} path="/post" />
					<Route component={Project} path="/project" />
					<Route component={Resume} path="/resume" />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
