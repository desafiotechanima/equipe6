import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import { Navbar } from '@mantine/core';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/register" element={<h1>Register</h1>} />
					<Route path="/login" element={<h1>Login</h1>} />
					<Route path="/login" element={<h1>Login</h1>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
